import express from "express";

import { getDashboardData } from "../Controllers/dashboard.js";


import verifyToken from "../Middleware/authMiddleware.js";

const router = express.Router();



router.get(

    "/",

    verifyToken,

    getDashboardData

);



export default router;