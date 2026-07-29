import express from "express";

import verifyToken from "../Middleware/authMiddleware.js";


import { getConversations , getConversation } from "../Controllers/conversations.js";


const router = express.Router();



router.get(

    "/",

    verifyToken,

    getConversations

);



router.get(

    "/:id",

    verifyToken,

    getConversation

);



export default router;