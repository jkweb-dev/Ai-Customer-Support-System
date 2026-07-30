import express from "express";

import verifyToken from "../Middleware/authMiddleware.js";

import { getAllConversations , getSingleConversation } from "../Controllers/CompanyConversation.js";



const router = express.Router();




// Get All Conversations

router.get(

    "/",

    verifyToken,

    getAllConversations

);




// Get Single Conversation

router.get(

    "/:id",

    verifyToken,

    getSingleConversation

);




export default router;