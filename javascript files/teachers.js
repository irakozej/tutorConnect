document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.getElementById("profile-form");
  const profileDisplay = document.getElementById("profile-display");
  const displayPicture = document.getElementById("display-picture");
  const displayName = document.getElementById("display-name");
  const displayEmail = document.getElementById("display-email");
  const displaySubject = document.getElementById("display-subject");
  const displayExperience = document.getElementById("display-experience");
  const displayBio = document.getElementById("display-bio");
  const editProfile = document.getElementById("edit-profile");
  const deleteProfile = document.getElementById("delete-profile");

  // Save profile
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("teacher-name").value.trim();
    const email = document.getElementById("teacher-email").value.trim();
    const subject = document.getElementById("teacher-subject").value.trim();
    const experience = document
      .getElementById("teacher-experience")
      .value.trim();
    const bio = document.getElementById("teacher-bio").value.trim();
    const picture = document.getElementById("teacher-picture").files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const profile = {
        name,
        email,
        subject,
        experience,
        bio,
        picture: reader.result,
      };
      localStorage.setItem("teacherProfile", JSON.stringify(profile));
      renderProfile();
    };

    if (picture) {
      reader.readAsDataURL(picture);
    } else {
      const profile = { name, email, subject, experience, bio, picture: null };
      localStorage.setItem("teacherProfile", JSON.stringify(profile));
      renderProfile();
    }

    profileForm.reset();
  });

  // Render profile
  const renderProfile = () => {
    const profile = JSON.parse(localStorage.getItem("teacherProfile"));
    if (profile) {
      profileForm.classList.add("hidden");
      profileDisplay.classList.remove("hidden");
      displayName.textContent = profile.name;
      displayEmail.textContent = profile.email;
      displaySubject.textContent = profile.subject;
      displayExperience.textContent = profile.experience;
      displayBio.textContent = profile.bio;

      if (profile.picture) {
        displayPicture.src = profile.picture;
        displayPicture.classList.remove("hidden");
      } else {
        displayPicture.classList.add("hidden");
      }
    }
  };

  // Edit profile
  editProfile.addEventListener("click", () => {
    profileForm.classList.remove("hidden");
    profileDisplay.classList.add("hidden");
  });

  // Delete profile
  deleteProfile.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete your profile?")) {
      localStorage.removeItem("teacherProfile");
      profileForm.classList.remove("hidden");
      profileDisplay.classList.add("hidden");
    }
  });

  // Initialize
  renderProfile();
});
