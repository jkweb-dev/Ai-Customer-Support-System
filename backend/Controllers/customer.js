import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

import Customer from "../Models/customer.js";




// Register Customer

const registerCustomer = async(req,res)=>{


try{


const schema = z.object({

name:z
.string()
.min(2,"Name is required"),


email:z
.string()
.email("Invalid email"),


password:z
.string()
.min(8,"Password must be 8 characters")


});



const validation =
schema.safeParse(req.body);



if(!validation.success){

return res.status(400).json({

message:
validation.error.issues[0].message

});

}



const {
name,
email,
password

}=validation.data;



const existingCustomer =
await Customer.findOne({email});



if(existingCustomer){

return res.status(409).json({

message:
"Customer already exists"

});

}




const hashedPassword =
await bcrypt.hash(password,10);



const customer =
await Customer.create({

name,

email,

password:hashedPassword

});





const token =
jwt.sign(

{
id:customer._id,
role:"customer"
},

process.env.JWT_SECRET,

{
expiresIn:"1h"
}

);





return res.status(201).json({

message:
"Account created successfully",

token,

customer:{
id:customer._id,
name:customer.name,
email:customer.email
}

});



}

catch(error){


console.log(error);


return res.status(500).json({

message:
"Internal Server Error"

});


}


};







// Login Customer

const loginCustomer = async(req,res)=>{


try{


const schema=z.object({

email:z
.string()
.email(),


password:z
.string()
.min(1)

});



const validation =
schema.safeParse(req.body);



if(!validation.success){

return res.status(400).json({

message:
validation.error.issues[0].message


});

}




const {
email,
password

}=validation.data;





const customer =
await Customer.findOne({email});



if(!customer){

return res.status(404).json({

message:
"Customer not found"

});

}




const match =
await bcrypt.compare(

password,

customer.password

);



if(!match){

return res.status(400).json({

message:
"Invalid email or password"

});

}





const token =
jwt.sign(

{
id:customer._id,
role:"customer"
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);





return res.status(200).json({

message:
"Login successful",

token,

customer:{
id:customer._id,
name:customer.name,
email:customer.email
}

});


}

catch(error){

console.log(error);


res.status(500).json({

message:
"Internal Server Error"

});


}


};




export {
registerCustomer,
loginCustomer
};