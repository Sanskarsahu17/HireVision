# HireVision - AI-Powered Interview Platform

## Overview

HireVision is an AI-powered interview platform that helps candidates practice and improve their interview skills through real-time audio recording and transcription.

## Features

- Real-time audio recording
- AI-powered speech-to-text transcription
- Interview question bank
- Results dashboard
- Secure API integration

## Tech Stack

- React + Vite
- Node.js + Express
- MongoDB
- Assembly AI
- Tailwind CSS

## Setup

1. **Install Dependencies**

Frontend
cd frontend
npm install

Backend
cd backend
npm install

2. **Environment Setup**

Frontend (.env)
VITE_ASSEMBLY_AI_KEY=your_assembly_ai_key

Backend (.env)
MONGODB_URI=your_mongodb_uri
PORT=5000

3. **Start Development Servers**

Frontend
npm run dev
Backend
nodemon server.js

## Usage

1. Open `http://localhost:5173` in your browser
2. Create an account/login
3. Start practicing interviews!

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](LICENSE)
