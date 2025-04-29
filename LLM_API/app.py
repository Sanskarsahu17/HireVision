import os
from dotenv import load_dotenv
from groq import Groq
import fitz  # PyMuPDF
import json
import boto3
import tempfile
import re
from werkzeug.utils import secure_filename

from flask import Flask, jsonify, request
app = Flask(__name__)
load_dotenv()

# S3 client setup
s3_client = boto3.client(
    's3',
    region_name=os.environ.get('AWS_REGION'),
    aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY')
)

S3_BUCKET_NAME = os.environ.get('AWS_BUCKET_NAME')

# Set upload folder
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

client = Groq(
    api_key=os.environ.get("API_GROQ"),
)

def extract_text_from_pdf(pdf_path):
    text = ""
    # Open the PDF file
    with fitz.open(pdf_path) as pdf:
        # Iterate through each page
        for page in pdf:
            text += page.get_text()  # Extract text from the page
    return text

def query_groq_llm(prompt):
    # Use Groq LLM for chat completion
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model="llama3-8b-8192",
    )
    return chat_completion.choices[0].message.content



@app.route('/candidate_info', methods=['POST'])
def get_candidate_info():
    # # Get the PDF path from the request
    # pdf_path = "./data/resumea.pdf"

    # Logic to check whether file is uploaded or not
    if 'pdf' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['pdf']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

        # Save the file to the server
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    # Step 1: Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Define questions for Groq LLM
    question1 = "What is the name of the candidate, answer name only"
    name1 = f"Document: {extracted_text}\n\nQuestion: {question1}\n\nAnswer:"
    contact_no1 = f"Document: {extracted_text}\n\nQuestion: If there is any contact number of the candidate, answer phone number only\n\nAnswer:"
    email1 = f"Document: {extracted_text}\n\nQuestion: what is the email of the candidate, answer email only\n\nAnswer:"
    skills1 = f"Document: {extracted_text}\n\nQuestion: What are the skills of the candidate?\n\nAnswer:"
    projects1 = f"Document: {extracted_text}\n\nQuestion: What are the projects of the candidate?\n\nAnswer:"
    recent_education1 = f"Document: {extracted_text}\n\nQuestion: What is the recent education of the candidate?\n\nAnswer:"
    experience1 = f"Document: {extracted_text}\n\nQuestion: What is the experience of the candidate?\n\nAnswer:"


    # Query Groq LLM
    name = query_groq_llm(name1)
    contact_no = query_groq_llm(contact_no1)
    email = query_groq_llm(email1)
    skills = query_groq_llm(skills1)
    projects = query_groq_llm(projects1)
    recent_education = query_groq_llm(recent_education1)
    experience = query_groq_llm(experience1)


    # Prepare the candidate data
    candidate_data = {
        "name": name.strip(),
        "email": email.strip(),
        "phone": contact_no.strip(),
        "recent_education": recent_education.strip(),
        "skills": skills.strip(),
        "experience": experience.strip(),
        "projects": projects.strip(),
    }
    return jsonify(candidate_data)


@app.route('/eligibility', methods=['POST'])
def get_eligibility():
    data = request.json
    resumes = data.get('resumes', [])  # Expecting a list of resume paths
    job_position = data.get('jobPosition')
    job_requirement = data.get('requirements')
    if not resumes:
        return jsonify({"error": "No resumes provided"}), 400

    results = []
    # Save the file to the server
    for resume_info in resumes:
        s3_key = resume_info["resume"]  # Ex: "resumes/user@email-171433.pdf"

        try:
            # Download file from S3 to a temp file
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                s3_client.download_fileobj(S3_BUCKET_NAME, s3_key, temp_file)
                temp_file_path = temp_file.name  # Save temp file path

            # Now extract text from the downloaded temp file
            extracted_text = extract_text_from_pdf(temp_file_path)

            # Build the LLM query
            eligibility_query = (
                f"Document: {extracted_text}\n\n"
                f"Question: Is the candidate eligible for {job_position} job position and job requirement as: {job_requirement}?\n\n"
                "Answer in '1' for yes and '0' for no only.\n\nAnswer:"
            )
            eligibility = query_groq_llm(eligibility_query)

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
            # Clean up temporary file
            if os.path.exists(temp_file_path):
                os.remove(temp_file_path)

    return jsonify(results)

@app.route('/getMcqs', methods=['GET'])
def getMcqs():
    data = request.json
    resume_path = data.get('resumePath')
    job_position = data.get('jobPosition')
    job_requirement = data.get('requirements')
    if not resume_path:
        return jsonify({"error": "No resume path"}), 400

    # Save the file to the server
    file_path = r"C:\Users\Sanskar Sahu\OneDrive\Desktop\NexusAi\HireVision\HireVision\backend\uploads\\" + resume_path

    # Step 1: Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Query to generate interview questions
    questions1 = f"Document: {extracted_text}\n\n The above is the parsed resume of the candidate, we need to assess the candidate for the job Position of {job_position}, \n So generate 20 technical non personal";
    question_response = query_groq_llm(questions1)

    # Extract questions using regex
    # questions = re.findall(r'(\d+\.\s|-\s)(.*?\?)', question_response)
    # extracted_questions = [q[1].strip() for q in questions]
    print("Extracted Questions:", question_response)  # Debugging
    return jsonify({"questions": question_response})

@app.route('/questions', methods=['POST'])
def get_questions():
    data = request.json
    resume_path = data.get('resumePath')
    job_position = data.get('jobPosition')
    job_requirement = data.get('requirements')
    if not resume_path:
        return jsonify({"error": "No resume path"}), 400

    # Save the file to the server
    file_path = r"C:\Users\Sanskar Sahu\OneDrive\Desktop\NexusAi\HireVision\HireVision\backend\uploads\\" + resume_path

    # Step 1: Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Query to generate interview questions
    questions1 = f"Document: {extracted_text}\n\nQuestion: Generate 5 questions for taking interview of the candidate based on their skills and experience, difficulty level: easy\n\nAnswer:"
    question_response = query_groq_llm(questions1)

    # Extract questions using regex
    questions = re.findall(r'(\d+\.\s|-\s)(.*?\?)', question_response)
    extracted_questions = [q[1].strip() for q in questions]
    print("Extracted Questions:", extracted_questions)  # Debugging
    return jsonify({"questions": extracted_questions})

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001, debug=True)
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)