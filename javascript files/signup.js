document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  // Helper function to save users to localStorage
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value.trim();
      const role = document.getElementById("signup-role").value;

      const users = getUsers();

      // Check if email already exists
      if (users.some((user) => user.email === email)) {
        document.getElementById("signup-error").textContent =
          "Email is already registered!";
        return;
      }

      // Save user data
      users.push({ name, email, password, role });
      saveUsers(users);

      alert("Signup successful! Please log in.");
      window.location.href = "login.html";
    });
  }
});
