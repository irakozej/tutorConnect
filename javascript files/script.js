// script.js
document.addEventListener("DOMContentLoaded", () => {
  const teacherList = document.getElementById("teacher-list");
  const searchInput = document.getElementById("search");
  const teacherSelect = document.getElementById("teacher-name");
  const bookingForm = document.getElementById("booking-form");
  const bookingConfirmation = document.getElementById("booking-confirmation");

  // Sample teacher data
  const teachers = [
    { name: "Jane Doe", subject: "Mathematics", experience: "5 years" },
    { name: "John Smith", subject: "Physics", experience: "3 years" },
    { name: "Alice Brown", subject: "Chemistry", experience: "7 years" },
  ];

  // Save teachers in localStorage for persistence
  if (!localStorage.getItem("teachers")) {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }

  // Load teachers from localStorage
  const loadTeachers = () => JSON.parse(localStorage.getItem("teachers"));

  // Render teachers
  const renderTeachers = (filter = "") => {
    teacherList.innerHTML = "";
    const filteredTeachers = loadTeachers().filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(filter.toLowerCase())
    );
    filteredTeachers.forEach((teacher) => {
      const div = document.createElement("div");
      div.className = "teacher";
      div.innerHTML = `
                <h3>${teacher.name}</h3>
                <p>Subject: ${teacher.subject}</p>
                <p>Experience: ${teacher.experience}</p>
            `;
      teacherList.appendChild(div);
    });
  };

  // Populate teacher select dropdown
  const populateTeacherSelect = () => {
    teacherSelect.innerHTML = "";
    loadTeachers().forEach((teacher) => {
      const option = document.createElement("option");
      option.value = teacher.name;
      option.textContent = teacher.name;
      teacherSelect.appendChild(option);
    });
  };

  // Handle search input
  searchInput.addEventListener("input", (e) => {
    renderTeachers(e.target.value);
  });

  // Handle booking form submission
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teacherName = document.getElementById("teacher-name").value;
    const sessionDate = document.getElementById("session-date").value;
    const sessionTime = document.getElementById("session-time").value;

    // Display confirmation
    bookingConfirmation.textContent = `Session with ${teacherName} booked for ${sessionDate} at ${sessionTime}!`;

    // Clear form
    bookingForm.reset();
  });

  // Initial render
  renderTeachers();
  populateTeacherSelect();
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Helper functions
    const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
    const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginError = document.getElementById('login-error');
    const signupError = document.getElementById('signup-error');

    // Handle signup
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        const users = getUsers();

        // Check if the email already exists
        if (users.some(user => user.email === email)) {
            signupError.textContent = 'Email is already registered.';
            return;
        }

        // Add new user to the list
        users.push({ name, email, password });
        saveUsers(users);

        // Clear form and display success message
        signupForm.reset();
        signupError.textContent = 'Signup successful! Please log in.';
        signupError.style.color = 'green';
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const users = getUsers();

        // Check if the email and password match any user
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            loginError.textContent = 'Invalid email or password.';
            return;
        }

        // Simulate login success
        loginError.textContent = '';
        alert(`Welcome back, ${user.name}!`);
        loginForm.reset();

        // Optional: Redirect to another page or section
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const studentDashboard = document.getElementById("student-dashboard");
  const teacherDashboard = document.getElementById("teacher-dashboard");
  const loginError = document.getElementById("login-error");
  const signupError = document.getElementById("signup-error");

  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));
  const saveSession = (user) =>
    localStorage.setItem("session", JSON.stringify(user));
  const getSession = () => JSON.parse(localStorage.getItem("session"));

  // Handle signup
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("signup-role").value;

    if (!role) {
      signupError.textContent = "Please select a role.";
      return;
    }

    const users = getUsers();

    if (users.some((user) => user.email === email)) {
      signupError.textContent = "Email is already registered.";
      return;
    }

    users.push({ name, email, password, role });
    saveUsers(users);
    signupForm.reset();
    signupError.textContent = "Signup successful! Please log in.";
    signupError.style.color = "green";
  });

  // Handle login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const users = getUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      loginError.textContent = "Invalid email or password.";
      return;
    }

    saveSession(user);
    loginError.textContent = "";
    loginForm.reset();

    if (user.role === "student") {
      studentDashboard.style.display = "block";
      teacherDashboard.style.display = "none";
    } else if (user.role === "teacher") {
      teacherDashboard.style.display = "block";
      studentDashboard.style.display = "none";
    }

    document.getElementById("auth").style.display = "none";
  });
});
// script.js
