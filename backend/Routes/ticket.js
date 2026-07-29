import express from "express";

import { createTicket , getMyTickets , getSingleTicket , updateTicket , deleteTicket } from "../Controllers/Ticket.js";

import verifyToken from "../Middleware/authMiddleware.js";

const router = express.Router();


// Create Ticket

router.post(
    "/",
    verifyToken,
    createTicket
);


// Get My Tickets

router.get(
    "/",
    verifyToken,
    getMyTickets
);


// Get Single Ticket

router.get(
    "/:id",
    verifyToken,
    getSingleTicket
);


// Update Ticket

router.put(
    "/:id",
    verifyToken,
    updateTicket
);


// Delete Ticket

router.delete(
    "/:id",
    verifyToken,
    deleteTicket
);


export default router;