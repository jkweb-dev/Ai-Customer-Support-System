import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Configurations/db.js";


dotenv.config();

import CompanyRegisterrouter from "./Routes/company.js";


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


// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});