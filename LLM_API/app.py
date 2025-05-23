import os
import requests
import tempfile
import fitz  # PyMuPDF
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import boto3

load_dotenv()
app = Flask(__name__)

# S3 client setup
s3_client = boto3.client(
    's3',
    region_name=os.getenv('AWS_REGION'),
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)
S3_BUCKET_NAME = os.getenv('AWS_BUCKET_NAME')
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Perplexity API setup
API_ENDPOINT = 'https://api.perplexity.ai/chat/completions'
API_KEY = os.getenv('PERPLEXITY_API_KEY')

# Improved query_perplexity_llm with better error handling
def query_perplexity_llm(prompt: str, model: str = "sonar-small-online") -> str:
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    data = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7
    }

    try:
        response = requests.post(API_ENDPOINT, headers=headers, json=data, timeout=30)
        response.raise_for_status()
        result = response.json()
        
        if not result.get('choices') or not result['choices'][0].get('message'):
            raise ValueError("Unexpected API response format")
            
        return result['choices'][0]['message']['content'].strip()
        
    except requests.exceptions.RequestException as e:
        raise Exception(f"API request failed: {str(e)}")
    except (KeyError, IndexError, ValueError) as e:
        raise Exception(f"Failed to parse API response: {str(e)}")


def extract_text_from_pdf(pdf_path):
    text = ""
    with fitz.open(pdf_path) as pdf:
        for page in pdf:
            text += page.get_text()
    return text


@app.route('/eligibility', methods=['POST'])
def get_eligibility():
    data = request.json
    resumes = data.get('resumes', [])
    job_position = data.get('jobPosition')
    job_requirement = data.get('requirements')

    if not resumes:
        return jsonify({"error": "No resumes provided"}), 400

    results = []

    for resume_info in resumes:
        s3_key = resume_info["resume"]
        temp_file_path = None
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                s3_client.download_fileobj(S3_BUCKET_NAME, s3_key, temp_file)
                temp_file_path = temp_file.name

            extracted_text = extract_text_from_pdf(temp_file_path)

            eligibility_query = (
                f"Document: {extracted_text}\n\n"
                f"Question: Is the candidate eligible for {job_position} job position and job requirement as: {job_requirement}?\n"
                f"Answer in '1' for yes and '0' for no only.\n\nAnswer:"
            )
            eligibility = query_perplexity_llm(eligibility_query)

            results.append({
                "resume": resume_info["resume"],
                "Candidate_ID": resume_info["candidate_ID"],
                "eligibility": eligibility.strip()[0]
            })

        except Exception as e:
            results.append({
                "resume": resume_info["resume"],
                "Candidate_ID": resume_info["candidate_ID"],
                "eligibility": "Error",
                "error": str(e)
            })
        finally:
            if temp_file_path and os.path.exists(temp_file_path):
                os.remove(temp_file_path)

    return jsonify(results)


@app.route('/interviews', methods=['POST'])
def get_interviews():
    data = request.json
    resume_path = data.get('resumePath')
    conversation_logs = data.get('conversationLogs', [])
    job_position = data.get('jobPosition', '')
    c_logs = "\n".join(f"{item['role']}: {item['text']}" for item in conversation_logs if 'role' in item and 'text' in item)

    s3_key = resume_path
    temp_file_path = None

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            s3_client.download_fileobj(S3_BUCKET_NAME, s3_key, temp_file)
            temp_file_path = temp_file.name

        extracted_text = extract_text_from_pdf(temp_file_path)

        prompt = (
            f"Resume Text: {extracted_text}\n\n"
            f"Interview Logs: {c_logs}\n\n"
            f"Question: Pretend you're a technical interviewer for the position of {job_position}. "
            f"Based on the resume and conversation so far, ask ONE relevant follow-up question to the candidate.\n"
            f"Just provide the question, nothing else.\n\nAnswer:"
        )
        response = query_perplexity_llm(prompt)
        return jsonify({"question": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if temp_file_path and os.path.exists(temp_file_path):
            os.remove(temp_file_path)


@app.route('/getInterviewScore', methods=['POST'])
def getScore():
    data = request.json
    resume_path = data.get('resumePath')
    conversation_logs = data.get('conversation_logs', [])
    job_position = data.get('jobPosition', '')

    if not resume_path or not conversation_logs or not job_position:
        return jsonify({"error": "Missing required fields"}), 400

    c_logs = "\n".join(f"{item['role']}: {item['text']}" for item in conversation_logs if 'role' in item and 'text' in item)
    s3_key = resume_path
    temp_file_path = None

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            s3_client.download_fileobj(S3_BUCKET_NAME, s3_key, temp_file)
            temp_file_path = temp_file.name

        extracted_text = extract_text_from_pdf(temp_file_path)

        prompt_template = (
            f"Suppose you're a non-biased interviewer for the job position: {job_position}.\n"
            f"This is the candidate's resume:\n{extracted_text}\n\n"
            f"Here is the interview conversation:\n{c_logs}\n\n"
            f"Rate the candidate on a scale of 1-10 for accuracy. Only return the number.\n\n"
        )

        scores = [
            query_perplexity_llm(prompt_template),
            query_perplexity_llm(prompt_template),
            query_perplexity_llm(prompt_template)
        ]

        return jsonify({"question": [s.strip() for s in scores]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if temp_file_path and os.path.exists(temp_file_path):
            os.remove(temp_file_path)


if __name__ == "__main__":
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(host='127.0.0.1', port=5001, debug=True)
