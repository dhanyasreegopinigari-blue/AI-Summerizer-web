### 🤖 AI Text Summarizer Web App

🚀 A powerful AI-powered web application that summarizes long documents, PDFs, and text using state-of-the-art NLP models. Built with Flask and Transformers.

---

### 🌐 Live Demo

🔗 Live Project:

(Replace this after deploying on Render)

---

### ✨ Features

🧠 AI-powered text summarization using BART model
📄 Upload PDF, DOCX, TXT, PPTX files
✍️ Manual text input support
🌍 Multi-language translation (Hindi, Tamil, Telugu, French, German)
🔑 Keyword extraction using YAKE
🧾 Flashcard generator for study revision
⭐ Important sentence extraction
🧠 AI mind map generation
📊 Document statistics (words saved, compression rate)
📚 Summary history with delete option
📥 Download summary as PDF
👤 User authentication system (login/register)
🌙 Clean modern UI with dark mode support

---

### 🛠️ Tech Stack

## Backend
🐍 Python
⚡ Flask
🔐 Flask-Login
🧠 HuggingFace Transformers (facebook/bart-large-cnn)
NLP & AI
🤖 Transformers
🔑 YAKE (Keyword Extraction)
🌍 Deep Translator
File Processing
📄 PyPDF2
📝 python-docx
📊 python-pptx
Export & Reports
📑 ReportLab (PDF generation)

## Frontend
🌐 HTML5
🎨 CSS3
⚡ JavaScript
📁 Project Structure
ai-summarizer/
│── app.py
│── models.py
│── config.py
│── requirements.txt
│── Procfile
│── runtime.txt
│
├── templates/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│
├── static/
│   ├── css/
│   ├── js/
│
└── README.md
---

### ⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/your-username/ai-summarizer.git
cd ai-summarizer
--- 
2️⃣ Create virtual environment
python -m venv venv

Activate:

Windows

venv\Scripts\activate
---
3️⃣ Install dependencies
pip install -r requirements.txt
---
4️⃣ Run the application
python app.py
---
Now open:

http://127.0.0.1:5000
🚀 Deployment (Render)
Push project to GitHub
Go to 👉 https://render.com
Create New Web Service
Connect repo
Add:
Build Command
pip install -r requirements.txt
Start Command
gunicorn app:app
🧠 How It Works
User uploads text or file
Flask extracts raw content
BART AI model generates summary
Optional:
Translation 🌍
Keywords 🔑
Flashcards 🧾
Mind map 🧠
Output displayed on dashboard
📊 Example Output

Input:

Long article or research paper

✨Output:

Short AI-generated summary
Keywords list
Flashcards for revision
Important sentences
🎯 Future Improvements
🔊 Text-to-Speech feature
💬 Chat with PDF (AI assistant)
📱 Mobile app version
☁️ PostgreSQL database upgrade
🧾 OCR support for images

---

### 👨‍💻 Developer

💼 CSE (AI & ML) Student
🌐 GitHub: https://github.com/dhanyasreegopinigari-blue/
📧 Email: dhanyasreegopinigari@gmail.com

---

### ⭐ Show Support

If you like this project:

⭐ Star this repository
🍴 Fork it
🚀 Share it

If you want next upgrade, I can also help you:

 Add badges (Flask, Python, Render live status)
 Make it look like a top 1% GitHub project README
 Add GIF demo preview of your app

Just tell me 👍