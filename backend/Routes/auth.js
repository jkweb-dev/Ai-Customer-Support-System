import express from "express";

import verifyToken from "../Middleware/authMiddleware.js";

import { getCurrentUser } from "../Controllers/auth.js";

const router = express.Router();

router.get(
  "/me",
  verifyToken,
  getCurrentUser
);

export default router;