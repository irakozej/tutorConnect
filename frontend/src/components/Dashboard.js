import React, { useEffect, useState } from "react";
import api from "../utils/api";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = jwt.decode(token);
      setUser(userData);
    }
  }, []);

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.role === "teacher" ? "Teacher" : "Student"}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

export default Dashboard;
