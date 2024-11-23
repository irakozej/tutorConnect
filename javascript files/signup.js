document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const passwordInput = document.getElementById("signup-password");
  const confirmPasswordInput = document.getElementById(
    "signup-confirm-password"
  );
  const signupMessage = document.getElementById("signup-message");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
      signupMessage.textContent = "Please enter the same password.";
      signupMessage.className = "message error";
      return;
    }

    // Simulate a successful signup process
    signupMessage.textContent = "Signup successful!";
    signupMessage.className = "message success";

    // Optionally, redirect to another page
    setTimeout(() => {
      window.location.href = "login.html"; // Redirect to login page
    }, 2000);
  });
});
document.getElementById("signup-role").addEventListener("change", (e) => {
  const teacherFields = document.getElementById("teacher-fields");
  if (e.target.value === "teacher") {
    teacherFields.classList.remove("hidden");
  } else {
    teacherFields.classList.add("hidden");
  }
});

