import express from "express";

import { registerCustomer , loginCustomer } from "../Controllers/customer.js";



const router = express.Router();



router.post(
"/register",
registerCustomer
);



router.post(
"/login",
loginCustomer
);



export default router;