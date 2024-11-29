# Nexus_AI

Revolutionizing the hiring process by integrating advanced AI for resume parsing, skill assessment, and virtual AI-driven interviews.

---

## **Project Overview**

**Nexus_AI** leverages a Large Language Model (LLM) to automate critical hiring steps, such as:

- **Resume Parsing:** Extracting and analyzing candidate data.
- **AI-Powered Interviewing:** Generating and assessing interview responses.
- **Skill Assessment:** Matching candidate skills to job requirements.

While the backend is fully functional and integrates the LLM, the frontend remains incomplete due to bugs and architectural challenges.

---

## **Technologies Used**

### **Backend:**

- Node.js, Express.js
- Python (LLM integration)
- REST APIs
- RAG (Retrieval-Augmented Generation) implementation

### **Frontend (Incomplete):**

- React.js
- Tailwind CSS for UI styling

---

## **Features**

- **LLM Integration:** Enables resume parsing, question generation, and candidate assessment.
- **Stable APIs:** Backend exposes APIs for seamless interaction with the LLM model.
- **User-Centric Interface:** Designed to ensure intuitive interaction (pending frontend-backend integration).

---

## **Project Structure**

```
nexus_ai/
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── models/
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── README.md (Frontend setup guide)
│
└── README.md (This file)
```

---

## **How to Run the Backend**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/nexus_ai.git
   ```

2. **Navigate to the Backend Folder:**

   ```bash
   cd nexus_ai/backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Backend:**

   ```bash
   npm start
   ```

   The backend will run at `http://localhost:5000`.

5. **Test the APIs:**  
   Use tools like Postman or curl to test the APIs exposed by the backend.

---

## **API Endpoints**

1. **Resume Parsing API:**

   - **Endpoint:** `/api/resume-parse`
   - **Method:** POST
   - **Description:** Parses a candidate's resume and extracts relevant details.

2. **Generate Questions API:**

   - **Endpoint:** `/api/generate-questions`
   - **Method:** GET
   - **Description:** Fetches interview questions tailored to a candidate's skillset.

3. **Assessment API:**
   - **Endpoint:** `/api/assess`
   - **Method:** POST
   - **Description:** Evaluates candidate responses and provides a score.

---

## **Current Limitations**

- **Frontend-Backend Integration:** The frontend is not yet linked with the backend.
- **Frontend Bugs:** Several issues need resolution to enable a smooth UI experience.

---

## **Future Plans**

- Complete the frontend-backend integration for a seamless user experience.
- Enhance the UI for better user engagement.
- Add more advanced features like video analysis during interviews.

---

## **Contributions**

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## **Contact**

For queries or suggestions, please contact:  
**Viivek [Your Email or Contact Info]**
