const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  subject: { type: String, required: true },
  biography: { type: String },
  experience: { type: Number },
  profilePicture: { type: String }, // URL or path to the profile picture
});

module.exports = mongoose.model("Teacher", TeacherSchema);
