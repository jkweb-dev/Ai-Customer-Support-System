import express from "express";


import { getAllTickets , getSingleTicket , updateTicketStatus } from "../Controllers/CompanyTicket.js";


import verifyToken from "../Middleware/authMiddleware.js";



const router = express.Router();





// Get all tickets

router.get(

    "/",

    verifyToken,

    getAllTickets

);





// Get single ticket

router.get(

    "/:id",

    verifyToken,

    getSingleTicket

);






// Update ticket status

router.put(

    "/:id/status",

    verifyToken,

    updateTicketStatus

);





export default router;