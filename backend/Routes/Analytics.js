import express from "express";

import verifyToken from "../Middleware/authMiddleware.js";

import { getAnalytics } from "../Controllers/Analytics.js";

const router = express.Router()

router.get("/" , verifyToken , getAnalytics)

export default router