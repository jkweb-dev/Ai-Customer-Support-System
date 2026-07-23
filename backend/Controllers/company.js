import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

import Company from "../Models/company.js";



export const registerCompany = async(req,res)=>{


try{


const schema = z.object({

    companyName:z
    .string()
    .min(2,"Company name is required"),


    email:z
    .string()
    .email("Invalid email"),


    password:z
    .string()
    .min(8,"Password must be 8 characters")

});



const validation = schema.safeParse(req.body);



if(!validation.success){

    return res.status(400).json({

        message:
       validation.error.issues[0].message

    });

}



const {
    companyName,
    email,
    password

}=validation.data;




// Check existing company

const existingCompany =
await Company.findOne({email});



if(existingCompany){

    return res.status(409).json({

        message:
        "Company already exists"

    });

}




// Hash Password

const hashedPassword =
await bcrypt.hash(password,10);




// Save Company

const company =
await Company.create({

    companyName,

    email,

    password:hashedPassword

});




// Generate Token

const token =
jwt.sign(

{
    id:company._id,
    role:"company"

},

process.env.JWT_SECRET,

{
    expiresIn:"1h"
}

);





return res.status(201).json({

    message:
    "Company registered successfully",

    token,

    company:{
        id:company._id,
        companyName:company.companyName,
        email:company.email
    }

});


}


catch(error){

console.log(error);


return res.status(500).json({

message:"Internal Server Error"

});


}


};


