import express from "express";

import { customerChat } from "../Controllers/Customer-ai.js";
import verifyToken from "../Middleware/authMiddleware.js";



const router = express.Router();



router.post(
    "/chat",
    verifyToken,
    customerChat
);

export default router;