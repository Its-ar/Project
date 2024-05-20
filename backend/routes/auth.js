// routes/auth.js
import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
// import User from "../models/User";
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {                                       
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Login endpoint
router.post("/login", passport.authenticate("local"), (req, res) => {
  // If authentication succeeds, user will be stored in req.user
  res.json({ message: "Login successful", user: req.user });
});

export default router;
