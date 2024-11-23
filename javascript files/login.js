document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        loginMessage.textContent =
          data.error || "Login failed. Please try again.";
        loginMessage.className = "message error";
        return;
      }

      // Save the token in localStorage
      localStorage.setItem("token", data.token);

      // Redirect based on role
      if (data.role === "student") {
        window.location.href = "student.html"; // Student dashboard
      } else if (data.role === "teacher") {
        window.location.href = "teacher.html"; // Teacher dashboard
      } else {
        loginMessage.textContent = "Unknown role. Please contact support.";
        loginMessage.className = "message error";
      }
    } catch (error) {
      console.error("Error during login:", error);
      loginMessage.textContent = "An error occurred. Please try again.";
      loginMessage.className = "message error";
    }
  });
});
