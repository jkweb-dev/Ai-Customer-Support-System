import express from "express";

import { getAISettings ,testAI,updateAISettings } from "../Controllers/Ai-Controller.js";

import verifyToken from "../Middleware/authMiddleware.js";



const router = express.Router();



router.get(

    "/settings",

    verifyToken,

    getAISettings

);



router.put(

    "/settings",

   verifyToken,

    updateAISettings

);

router.post(
    "/test",
    verifyToken,
    testAI
);

export default router;