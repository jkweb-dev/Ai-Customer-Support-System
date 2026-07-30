import express from "express";

import verifyToken from "../Middleware/authMiddleware.js";

import { getAllCustomers , getSingleCustomer } from "../Controllers/CustomerManagement.js";



const router = express.Router();




// Get All Customers

router.get(

    "/",

    verifyToken,

    getAllCustomers

);




// Get Single Customer

router.get(

    "/:id",

    verifyToken,

    getSingleCustomer

);




export default router;