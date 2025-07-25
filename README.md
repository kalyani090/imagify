# 🖼️ Imagify - Image Upload Web App

Imagify is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to upload, view, and manage images with a modern UI and responsive design.

## 🚀 Live Demo

Link : https://imagify-nine-drab.vercel.app

## ✨ Features

- 📤 Upload images from local device
- 📂 View uploaded images in a responsive gallery
- 🗑️ Delete images
- 🔐 (Optional) Authentication for secure uploads
- 🌐 Hosted on Vercel (Frontend & Backend)

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS (or any other styling you used)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary (for image storage) *(optional)*
- Multer (for file uploads)
- CORS, Dotenv

## 📁 Folder Structure

imagify/
├── client/ # React Frontend
│ └── src/
├── server/ # Express Backend
│ └── routes/
│ └── controllers/
│ └── models/

bash
Copy
Edit

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/imagify.git
cd imagify
2. Start the backend
bash
Copy
Edit
cd server
npm install
npm run dev
3. Start the frontend
bash
Copy
Edit
cd client
npm install
npm start
Make sure to add a .env file in the server directory with the following variables:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
📷 Screenshots
<!-- Add images here -->


📦 Deployment
Frontend deployed using Vercel

Backend deployed using Vercel / Render / Railway (mention your platform)

🙋‍♀️ Author
Kalyani Ekhande
Connect with me on LinkedIn
