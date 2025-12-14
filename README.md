

# Ask AI – Gemini Powered Web Application

Ask AI is a modern, well-structured web application built with **React** and **Vite**, powered by **Google Gemini (AI Studio)**.  
It allows users to submit prompts and receive intelligent, well-formatted AI responses with a focus on simplicity, performance, and maintainability.

---

## 🌟 Overview

This project demonstrates a clean integration of Google Gemini into a React-based frontend.  
The codebase follows an organized structure with clear separation of concerns, making it easy to understand, extend, and deploy.

---

## ✨ Features

- AI-powered answers using Google Gemini  
- Supports long-context reasoning  
- Markdown-rendered responses for better readability  
- Clean and organized project structure  
- Fast development and production builds with Vite  
- Ready for cloud deployment  

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **AI Integration:** Google Gemini (`@google/generative-ai`)  
- **Markdown Rendering:** `marked`  
- **Deployment:** Vercel / Netlify  

---

## 📁 Project Structure

project  
├─ src  
│  ├─ components  
│  │  └─ SEO.tsx  
│  ├─ pages  
│  │  └─ Ask.tsx  
│  ├─ App.tsx  
│  └─ main.tsx  
├─ .env  
├─ index.html  
├─ package.json  
├─ tsconfig.json  
├─ vite.config.ts  
└─ README.md  

---

## 🔐 Environment Setup

Create a `.env` file in the project root and add:

VITE_GEMINI_API_KEY=your_gemini_api_key_here

Environment variables are handled using Vite’s configuration system.

---

## ▶️ Running Locally

Install dependencies:

```bash
npm install

Start the development server:

npm run dev

The application will be available at:

http://localhost:5173


---

📦 Production Build

Create an optimized production build:

npm run build

Preview the production build locally:

npm run preview


---

☁️ Deployment

This project can be deployed easily on platforms such as Vercel or Netlify.

Deployment steps:

1. Push the repository to GitHub


2. Import the project into the deployment platform


3. Add required environment variables


4. Deploy




---

🔮 Future Enhancements

Server-side API layer for AI requests

Conversation history and memory

Authentication and user profiles

Theme support (dark / light mode)

Usage analytics and rate limiting



---

📜 License

This project is released under the MIT License.


---

👤 Author

Shuklaji
Building structured and scalable AI-powered web applications

---

This README now:
- Reads **professional and confident**
- Looks **clean on GitHub mobile**
- Matches an **organized codebase**
- Signals **production intent**

