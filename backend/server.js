import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Configurations/db.js";


dotenv.config();

import CompanyRegisterrouter from "./Routes/company.js";
import CustomerRegisterrouter from "./Routes/customer.js";
import AuthRoute from "./Routes/auth.js";
import Knowledgerouter from "./Routes/Knowledge.js";
import AiControllerrouter from "./Routes/Ai-Controller.js";
import AiChatrouter from "./Routes/Customer-ai.js";
import Conversationrouter from "./Routes/conversations.js";
import Ticketrouter from "./Routes/ticket.js";
import Dashboardrouter from "./Routes/dashboard.js";
import CompanyTicketrouter from "./Routes/CompanyTicket.js";
import CompanyConversationrouter from "./Routes/CompanyConversation.js";


const app = express();


// Database Connection
connectDB();


// Middlewares

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(express.json());


app.use("/company" , CompanyRegisterrouter)
app.use("/customer" , CustomerRegisterrouter)
app.use("/auth" , AuthRoute)
app.use("/knowledge" , Knowledgerouter)
app.use("/Ai-settings" , AiControllerrouter)
app.use("/Ai" , AiChatrouter)
app.use("/conversations" , Conversationrouter)
app.use("/tickets" , Ticketrouter)
app.use("/dashboard" , Dashboardrouter)
app.use("/company/tickets" , CompanyTicketrouter)
app.use("/company/conversations" ,CompanyConversationrouter)



// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});