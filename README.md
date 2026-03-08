# Backend Developer Assignment

## Project Overview
This project is a scalable REST API with JWT authentication and role-based access control.  
It includes a basic frontend UI for signup, login, dashboard, and task management.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- EJS
- HTML/CSS/JavaScript

## Features
- User signup
- User login
- Password hashing using bcrypt
- JWT authentication
- Role-based access (user/admin)
- Task creation
- View tasks
- Delete tasks
- Basic dashboard UI

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
