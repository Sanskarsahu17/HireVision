# HireVision

HireVision is a next-generation AI-driven interview platform that redefines modern hiring by offering fully automated, intelligent candidate assessments. It is an AI-driven recruitment assistant that streamlines the hiring process by parsing resumes, extracting key information, and conducting preliminary virtual interviews with candidates. The system evaluates candidate responses, giving recruiters a data-backed shortlisting process — saving time, improving accuracy, and enabling smarter hiring decisions.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Python LLM_API Backend](#2-python-llm_api-backend)
  - [3. Node.js Backend](#3-nodejs-backend)
  - [4. React Frontend](#4-react-frontend)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

---

## Project Structure

```
HireVision/
│
├── LLM_API/                # Python Flask backend (LLM, resume parsing)
│   ├── app.py
│   ├── requirements.txt
│   └── .env
│
├── backend/                # Node.js Express backend (API, MongoDB)
│   ├── server.js
│   ├── controllers/
│   └── .env
│
├── frontend/               # React frontend
│   ├── src/
│   ├── public/
│   └── .env
│
└── README.md
```

---

## Prerequisites

- Python 3.8+
- Node.js 16+
- npm 8+
- MongoDB Atlas account (or local MongoDB)
- AWS S3 account (for resume storage)
- Perplexity Sonar API key

---

## Environment Variables

### LLM_API/.env (Python backend)
```
PERPLEXITY_API=your_api_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=hirevision-resume-storage

```
> See `LLM_API/.env.example` for a template.

### backend/.env (Node.js backend)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
> See `backend/.env.example` for a template.

### frontend/.env (React frontend)
```
REACT_APP_API_URL=http://localhost:5000
VITE_ASSEMBLY_AI_KEY=your_assemblyai_api_key_here
```
> See `frontend/.env.example` for a template.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vivekmishra9343/HireVision.git
cd HireVision
```

---

### 2. Python LLM_API Backend

```bash
cd LLM_API
python -m venv .venv
# Activate the virtual environment:
# On Windows:
.venv\Scripts\activate
# On Mac/Linux:
source .venv/bin/activate

pip install -r requirements.txt
# Create and fill out .env as shown above
python app.py
```
The Flask server runs on [http://127.0.0.1:5001](http://127.0.0.1:5001).

---

### 3. Node.js Backend

```bash
cd backend
npm install
# Create and fill out .env as shown above
nodemon server.js
```
The Node.js server runs on [http://localhost:5000](http://localhost:5000).

---

### 4. React Frontend

```bash
cd frontend
npm install
# Create and fill out .env as shown above
npm run dev
```
The React app runs on [http://localhost:5183](http://localhost:5173).

---

## Running the Application

1. **Start the Python LLM_API backend** first (`python app.py`).
2. **Start the Node.js backend** (`nodemon server.js` in `/backend`).
3. **Start the React frontend** (`npm run dev` in `/frontend`).
4. Access the app at [http://localhost:5173](http://localhost:5173).

---

## Contributors

- Sanskar Sahu ([Sanskarsahu17](https://github.com/Sanskarsahu17))
- Vivek Mishra ([vivekmishra9343](https://github.com/vivekmishra9343))

> Want to contribute? Open a pull request or issue!

---

## License

MIT
