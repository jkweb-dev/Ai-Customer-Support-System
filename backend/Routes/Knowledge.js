import express from "express";

import {
    createKnowledge,
    getKnowledge,
    getKnowledgeStats,
    getSingleKnowledge,
    deleteKnowledge,
    updateKnowledge
} from "../Controllers/Knowledge.js";


import upload from "../Middleware/UploadMiddleware.js";

import verifyToken from "../Middleware/authMiddleware.js";


const router = express.Router();




// Create Knowledge

router.post(
    "/",
    verifyToken,
    upload.single("file"),
    createKnowledge
);




// Get All Knowledge

router.get(
    "/",
    verifyToken,
    getKnowledge
);



router.get(
    "/stats",
    verifyToken ,
    getKnowledgeStats
);
// Get Single Knowledge

router.get(
    "/:id",
    verifyToken,
    getSingleKnowledge
);




// Delete Knowledge

router.delete(
    "/:id",
    verifyToken,
    deleteKnowledge
);


router.put(
    "/:id",
    verifyToken,
    upload.single("file"),
    updateKnowledge
);




export default router;