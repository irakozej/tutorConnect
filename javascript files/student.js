document.addEventListener("DOMContentLoaded", () => {
  const teacherProfiles = document.getElementById("teacher-profiles");
  const searchBar = document.getElementById("search-bar");
  const bookingSection = document.querySelector(".booking");
  const selectedTeacherName = document.getElementById("selected-teacher-name");
  const bookingForm = document.getElementById("booking-form");
  const cancelBooking = document.getElementById("cancel-booking");

  // Sample teacher data
  const teachers = [
    {
      name: "John Doe",
      subject: "Mathematics",
      biography: "Experienced Math tutor with 5+ years of teaching.",
      experience: 5,
      picture: "https://via.placeholder.com/80",
    },
    {
      name: "Jane Smith",
      subject: "Physics",
      biography: "Passionate about Physics and helping students excel.",
      experience: 7,
      picture: "https://via.placeholder.com/80",
    },
    {
      name: "Emily Brown",
      subject: "Chemistry",
      biography: "Chemistry specialist with hands-on learning techniques.",
      experience: 6,
      picture: "../Images/down.jfif",
    },
  ];

  // Render teacher profiles
  const renderTeachers = (filter = "") => {
    teacherProfiles.innerHTML = "";
    const filteredTeachers = teachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(filter.toLowerCase())
    );
    filteredTeachers.forEach((teacher) => {
      const teacherCard = document.createElement("div");
      teacherCard.className = "teacher-profile";
      teacherCard.innerHTML = `
                <img src="${teacher.picture}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                <p><strong>Subject:</strong> ${teacher.subject}</p>
                <p>${teacher.biography}</p>
                <button onclick="selectTeacher('${teacher.name}')">Book Meeting</button>
            `;
      teacherProfiles.appendChild(teacherCard);
    });
  };

  // Handle search
  searchBar.addEventListener("input", (e) => {
    renderTeachers(e.target.value);
  });

  // Select a teacher
  window.selectTeacher = (name) => {
    selectedTeacherName.textContent = name;
    bookingSection.classList.remove("hidden");
  };

  // Handle booking
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("meeting-date").value;
    const time = document.getElementById("meeting-time").value;

    alert(
      `Meeting with ${selectedTeacherName.textContent} booked for ${date} at ${time}.`
    );
    bookingForm.reset();
    bookingSection.classList.add("hidden");
  });

  // Cancel booking
  cancelBooking.addEventListener("click", () => {
    bookingSection.classList.add("hidden");
    bookingForm.reset();
  });

  // Initialize
  renderTeachers();
});
