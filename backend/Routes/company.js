import express from "express";

import { registerCompany } from "../Controllers/company.js";


const router = express.Router();



router.post(
    "/register",
    registerCompany
);



export default router;