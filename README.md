# AI Code Analyzer 🚀

An **AI-powered Code Analyzer** that helps developers **analyze, debug, explain, and improve source code** using **OpenAI GPT-4o**. The project is built with a **Java backend** and a **React + TypeScript frontend**, designed for fast feedback, clean UI, and extensibility.

---

## ✨ Features

* 🔍 **Code Analysis** – Detect issues, bugs, and potential improvements
* 🧠 **AI-Powered Explanations** – Understand complex code instantly
* 🛠 **Refactoring Suggestions** – Get cleaner and more maintainable code
* 🐞 **Debug Assistance** – Identify errors and possible fixes
* 📄 **Multi-language Support** (extensible)
* ⚡ **Real-time Responses** using OpenAI GPT-4o
* 🎨 **Modern UI** with React & TypeScript

---

## 🏗 Tech Stack

### Backend

* **Java**
* **Spring Boot**
* **OpenAI GPT-4o API**
* **REST APIs**
* **Maven / Gradle**

### Frontend

* **React**
* **TypeScript**
* **Axios** (API communication)
* **Modern CSS / UI Library (optional)**

---

## 📂 Project Structure

```
ai-code-analyzer/
├── backend/
│   ├── src/main/java
│   │   ├── controller
│   │   ├── service
│   │   ├── dto
│   │   └── config
│   └── application.yml
│
├── frontend/
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── types
│   └── package.json
│
└── README.md
```

---

## 🔐 Environment Variables

### Backend

Create an `.env` file or configure environment variables:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o
SERVER_PORT=8080
```

> ⚠️ Never commit your API key to version control.

---

## ▶️ Running the Project

### Backend (Java)

```bash
cd backend
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:8080
```

---

### Frontend (React + TypeScript)

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 🔁 API Flow

1. User pastes code in the frontend editor
2. Frontend sends code + prompt to backend
3. Backend calls **OpenAI GPT-4o API**
4. AI analyzes the code
5. Response is sent back and rendered in UI

---

## 📡 Sample API Endpoint

```
POST /api/analyze
```

**Request Body**

```json
{
  "language": "java",
  "code": "public class HelloWorld {}"
}
```

**Response**

```json
{
  "analysis": "This class is valid but can be improved by..."
}
```

---

## 🧪 Future Enhancements

* ✅ Authentication & user history
* 📊 Code quality scoring
* 🗂 Save & compare analyses
* 🧩 IDE / VS Code extension
* 🐳 Docker support
* 🌐 Multi-model support

---

## 🛡 Security Notes

* API key is stored securely on the backend
* Frontend never directly calls OpenAI APIs
* Rate limiting can be added for production

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

---

## 👨‍💻 Author

**Divyansh Mathur**
AI & Full-Stack Developer

---

⭐ If you like this project, give it a star!
