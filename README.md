# 🖼️ Imagify – AI Image Generator Web App

**Imagify** is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application that allows users to securely generate, view, and manage AI-generated images using the **ClipDrop API**. It features a responsive modern UI, authentication, and a credit system.


##  Live Demo

Link : https://imagify-nine-drab.vercel.app


##  Features

###  AI & User Functionality
-  **AI Image Generation** using ClipDrop API
-  **Credits System** to limit and track image generation
-  **Regenerate images** with new prompts/styles

###  Authentication & Security
-  **JWT Auth** for login and route protection
-  **Protected API Routes** with middleware
-  **User-specific credit management**

###  Frontend (React + Vite + Tailwind)
- **Modern Dark UI** using Tailwind CSS
-  **Fully Responsive Design**
-  **Fast Loading** with Vite
-  **Toast Notifications** using `react-toastify`
-  **Loading States** while generating images

###  Backend (Express + MongoDB)
-  **RESTful API Architecture**
-  **MVC Structure**: Cleanly separated logic
-  **MongoDB Integration** with Mongoose
-  **Environment-based config** (`.env` support)
- ⚙ **CORS-enabled** for frontend/backend interaction


## 🛠 Tech Stack

| Layer     | Tech                                 |
|-----------|--------------------------------------|
| Frontend  | React, Vite, Tailwind CSS            |
| Backend   | Node.js, Express.js, MongoDB         |
| APIs      | ClipDrop API, JWT                    |
| Hosting   | Vercel (Frontend + Backend)          |


## 📁 Folder Structure

```bash
imagify/
├── client/ # React Frontend
│ └── src/
├── server/ # Express Backend
│ └── routes/
│ └── controllers/
│ └── models/

```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash

git clone https://github.com/your-username/imagify.git
cd imagify

2. Start the backend

cd server
npm install
npm run dev

3. Start the frontend
bash
cd client
npm install
npm start

```
Make sure to add a .env file in the server directory with the following variables:

PORT=5000
MONGO_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

📦 Deployment
Frontend and backend deployed using Vercel

Connect with me

Linkedin : www.linkedin.com/in/kalyani-ekhande-31413a272
Github : https://github.com/kalyani090
