# 🚀 AI Summarizer Web Application

An intelligent AI-powered document summarization platform that helps users quickly understand lengthy documents, articles, reports, and notes. The application supports multiple file formats, generates concise summaries, extracts keywords, creates flashcards, and provides downloadable outputs.

## 🌐 Live Demo

https://ai-summerizer.up.railway.app

---

## 📌 Features

### 🔐 User Authentication
- User Registration
- Secure Login & Logout
- Password Hashing
- User-specific Dashboard

### 📄 Document Processing
Supports:
- PDF Files
- DOCX Files
- PPTX Files
- TXT Files
- Direct Text Input

### 🤖 AI-Powered Summarization
Multiple summary styles:
- Executive Summary
- Research Summary
- Student Notes
- Meeting Summary
- Bullet Summary
- Action-Oriented Summary

### 🌍 Translation Support
Translate generated summaries into multiple languages using Google Translator.

### 🔑 Smart Insights
- Keyword Extraction
- Important Sentence Detection
- AI Flashcard Generation
- Mind Map Generation

### 📥 Export Options
Download summaries as:
- PDF
- DOCX
- Markdown (.md)

### 📊 Dashboard Analytics
- Total Summaries Generated
- Documents Uploaded
- Words Saved
- Compression Statistics
- Summary History

### 📧 Email Integration
Send generated summaries directly to the registered email address.

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask
- Flask-Login
- Flask-SQLAlchemy
- Flask-Mail

### AI & NLP
- Hugging Face Transformers
- DistilBART (sshleifer/distilbart-cnn-6-6)
- YAKE Keyword Extraction
- Deep Translator

### Database
- SQLite

### Document Processing
- PyPDF2
- Python-Docx
- Python-PPTX

### Export & Reporting
- ReportLab

### Deployment
- Railway

---

## 📂 Project Structure

```bash
AI-Summarizer/
│
├── app.py
├── config.py
├── models.py
├── requirements.txt
├── runtime.txt
├── Procfile
│
├── templates/
│   ├── landing.html
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
└── database.db
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/AI-Summerizer-web.git
cd AI-Summerizer-web
```

### Create Virtual Environment

```bash
python -m venv .venv
```

### Activate Environment

Windows:

```bash
.venv\Scripts\activate
```

Mac/Linux:

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Application

```bash
python app.py
```

Application runs at:

```bash
http://127.0.0.1:5000
```

---

## 🔑 Environment Variables

Create a `.env` file or configure environment variables:

```env
SECRET_KEY=your_secret_key

MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
```

---

## 🚀 Deployment

This project is deployed using Railway.

### Production Start Command

```bash
gunicorn app:app --bind 0.0.0.0:$PORT
```

### Runtime

```text
python-3.13.5
```

---

## 📸 Key Functionalities

✅ User Authentication

✅ AI Text Summarization

✅ File Upload Support

✅ Keyword Extraction

✅ Flashcard Generation

✅ Mind Map Creation

✅ Translation Support

✅ Email Sharing

✅ PDF Export

✅ DOCX Export

✅ Markdown Export

✅ Summary History

---

## 🔮 Future Enhancements

- PostgreSQL Integration
- MongoDB Support
- AI Chat with Uploaded Documents
- Text-to-Speech Summary Generation
- OCR for Image Documents
- Advanced Analytics Dashboard
- Dark Mode Support
- Multi-user Collaboration

---

## 👩‍💻 Developer

**Dhanyasree Gopinigari**

Passionate AI & Full-Stack Developer focused on building intelligent applications that simplify information processing and enhance productivity.

GitHub: https://github.com/dhanyasreegopinigari-blue

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub!