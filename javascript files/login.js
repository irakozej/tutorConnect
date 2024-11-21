document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  // Helper function to get users from localStorage
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveSession = (user) =>
    localStorage.setItem("session", JSON.stringify(user));

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      const users = getUsers();

      // Match email and password
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        document.getElementById("login-error").textContent =
          "Invalid email or password!";
        return;
      }

      // Save session and redirect based on role
      saveSession(user);
      if (user.role === "student") {
        window.location.href = "student.html";
      } else if (user.role === "teacher") {
        window.location.href = "teacher.html";
      } else {
        alert("Unknown role detected.");
      }
    });
  }
});
