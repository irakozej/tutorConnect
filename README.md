# **TutorConnect**

### Connecting Students and Teachers Globally 🌎
## **What It Is**
**TutorConnect** is a web-based platform designed to bridge the gap between students and teachers. It provides a seamless experience for students to find the best tutors based on their needs and for teachers to showcase their expertise and manage bookings.

## What It’s About
1. **For Students:**

Search for tutors by subject or name.
View detailed tutor profiles, including their experience, subjects taught, and biography.
Book and cancel sessions with tutors.

2. **For Teachers:**

Create and manage a professional profile.
Showcase teaching expertise, upload a profile picture, and share a biography.
Receive session bookings and interact with students.

3. **For Communities:**

Engage in a forum to share ideas, give feedback, and ask questions.
Post content with optional attachments (images/documents).
Like, comment, and interact with posts.

## Features
🔒 **User Authentication**:

Secure signup and login functionality.
Role-based redirection (students and teachers).

**👩‍🏫 Teacher Profiles:**

Create profiles with detailed information (subject, experience, bio).
Automatically list on the student dashboard for discovery.

**📚 Student Dashboard:**

Search for tutors and book sessions.
Cancel or manage booked sessions.

**🌐 Community Forum:**

Post questions or feedback with optional images/documents.
Comment and interact with community posts.

**🔍 Search Functionality:**

Find tutors by name or subject.

## Screenshots

**Landing Page

Student Dashboard

Teacher Dashboard

Community Page**

## Technologies Used
### Frontend
**HTML5, CSS3,** and **JavaScript**
Responsive design with modern UI components.

### Backend
Node.js and Express.js for server-side functionality.
MongoDB for database management.

### Security
bcrypt.js for password hashing.
JSON Web Tokens (JWT) for secure authentication.

### Additional Tools

Postman for API testing.
### Setup Instructions
**Prerequisites**
Node.js
MongoDB
**Steps**
Clone this repository:

bash
Copy code
git clone https://github.com/irakozej/tutorconnect-1.git
cd tutorconnect
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and configure the following:

env
Copy code
MONGO_URI=mongodb://localhost:27017/tutorconnect
JWT_SECRET=your_jwt_secret
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
Start the backend server:

bash
Copy code
npm run start
Open the index.html file in your browser for the frontend, or serve it using a local server (e.g., Live Server in VS Code).

## Usage

**For Students**

Sign up as a student and log in.
Browse the list of available tutors on the dashboard.
Use the search bar to filter tutors by subject or name.
Book a session with a tutor and manage your bookings.

**For Teachers**

Sign up as a teacher and log in.
Create a profile with details like subject, biography, and experience.
Appear automatically on the student dashboard for discovery.

**Folder Structure**

plaintext
Copy code
tutorconnect/
├── models/                 # Mongoose schemas for database
│   ├── User.js
│   ├── Teacher.js
│   └── Post.js
├── routes/                 # API routes
│   ├── auth.js
│   ├── teacher.js
│   └── booking.js
├── public/                 # Static frontend files
│   ├── index.html
│   ├── signup.html
│   ├── student.html
│   ├── teacher.html
│   └── style.css
├── server.js               # Main server file
├── package.json            # Project metadata and dependencies
├── .env                    # Environment variables
└── README.md               # Project documentation
## Future Improvements
1. **Notifications:**
Email notifications for session bookings and cancellations.

3. **Admin Dashboard:**
Manage users, posts, and bookings.

3**Rating System:**
Allow students to rate and review tutors.

## Contributing
We welcome contributions! To get started:

Fork the repository.
Create a new branch for your feature/bug fix.
Submit a pull request explaining your changes.

## Contact
Author: Your Name
Email: your-email@example.com
Project Repository: TutorConnect
