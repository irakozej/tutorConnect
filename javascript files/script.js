document.addEventListener("DOMContentLoaded", () => {
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveSession = (user) =>
    localStorage.setItem("session", JSON.stringify(user));
  const getSession = () => JSON.parse(localStorage.getItem("session"));

  // Redirect if already logged in
  const session = getSession();
  if (session) {
    const role = session.role;
    if (role === "student") window.location.href = "student.html";
    if (role === "teacher") window.location.href = "teacher.html";
  }

  // Login logic
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;

      const users = getUsers();

      // Check if email and password match
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid email or password.");
        return;
      }

      // Save the session and redirect based on role
      saveSession(user);
      if (user.role === "student") {
        window.location.href = "student.html";
      } else if (user.role === "teacher") {
        window.location.href = "teacher.html";
      }
    });
  }
});
