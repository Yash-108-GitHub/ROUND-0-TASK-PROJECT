# Task Project
Click here to view the project:

🚀 Live Demo: https://task-project-3jd8.onrender.com

## Project Overview
This project is a scalable REST API with JWT authentication and role-based access control.  
It includes a basic frontend UI for signup, login, dashboard, and task management.
A scalable REST API with authentication and role-based access control, along with a simple frontend dashboard for managing tasks.

---

## 🚀 Key Features

- 🔐 User registration & login with secure password hashing (bcrypt)
- 🔑 JWT-based authentication and protected routes
- 👥 Role-based access control (User/Admin)
- 📝 CRUD operations for task management (Create, Read, Delete)
- 🔄 API versioning (`/api/v1/...`) following REST principles
- 🏗️ Modular project structure (MVC architecture)
- ⚠️ Error handling and async wrapper utilities
- 💻 Basic frontend UI for signup, login, and dashboard
- 📬 Postman collection for API testing

---

## 🔐 Security

- Token-based authentication using JWT
- Input validation and protected endpoints

---

## 📌 Highlights

- Designed a scalable backend structure for future expansion
- Implemented admin role logic for restricted operations
- Integrated frontend with backend APIs using `fetch`

---

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- EJS
- HTML/CSS/JavaScript

## API Routes

### Auth Routes
- POST `/api/v1/auth/signup`
- POST `/api/v1/auth/login`

### Task Routes
- POST `/api/v1/tasks`
- GET `/api/v1/tasks`
- DELETE `/api/v1/tasks/:id`

## Role-based Access

- By default, every registered user is assigned the role **user**.
- For testing admin functionality, if a user signs up using the email **admin@gmail.com**, the system automatically assigns the role **admin**.

### How to test admin access

1. Sign up using:
   - Email: `admin@gmail.com`
   - Password: any password

2. Login with the same credentials.

3. The account will now have **admin privileges** and can access admin-only APIs such as:

## Frontend Pages
- `/` → Home page
- `/api/v1/auth/signup` → Signup page
- `/api/v1/auth/login` → Login page
- `/dashboard` → Dashboard page

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Start MongoDB locally
4. Run `nodemon app.js` or `node app.js`

## API Documentation
Postman collection is included in the repository.

## Scalability Note
This project follows a modular structure using separate folders for models, routes, controllers, and utilities.  
For larger scale deployment, it can be extended using Redis caching, Docker containers, and load balancing.

## Author
Yash Barahate
