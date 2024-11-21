const express = require("express");
const multer = require("multer");
const Teacher = require("../models/Teacher");
const auth = require("../middleware/auth");
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Create or Update Profile
router.post(
  "/profile",
  auth,
  upload.single("profilePicture"),
  async (req, res) => {
    const { subject, biography, experience } = req.body;
    try {
      const profileData = {
        userId: req.user.id,
        subject,
        biography,
        experience,
        profilePicture: req.file ? req.file.path : undefined,
      };
      const profile = await Teacher.findOneAndUpdate(
        { userId: req.user.id },
        profileData,
        { upsert: true, new: true }
      );
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

// Get Profile
router.get("/profile", auth, async (req, res) => {
  try {
    const profile = await Teacher.findOne({ userId: req.user.id });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Profile
router.delete("/profile", auth, async (req, res) => {
  try {
    await Teacher.findOneAndDelete({ userId: req.user.id });
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
