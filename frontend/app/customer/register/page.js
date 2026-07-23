"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import AuthLayout from "@/components/Auth/AuthLayout";
import CustomerRegisterForm from "@/components/Auth/customerRegister";


import handleError from "@/Utils/handleError";
import axios from "axios";


const CustomerRegisterPage = () => {


const router = useRouter();



const [formData,setFormData] = useState({

name:"",
email:"",
password:"",
confirmPassword:""

});



const [loading,setLoading] = useState(false);








const handleChange = (e)=>{


const {name,value}=e.target;


setFormData((prev)=>({

...prev,

[name]:value

}));


};







const handleRegister = async(e)=>{


e.preventDefault();




if(!formData.name.trim()){

return toast.error(
"Name is required"
);

}



if(!formData.email.trim()){

return toast.error(
"Email is required"
);

}



if(formData.password.length < 8){

return toast.error(
"Password must be at least 8 characters"
);

}



if(
formData.password !==
formData.confirmPassword
){

return toast.error(
"Passwords do not match"
);

}





try{


setLoading(true);



const response = await axios.post(

"http://localhost:5000/customer/register",

{

name:formData.name,

email:formData.email,

password:formData.password

}

);





if(
response.status === 200 ||
response.status === 201
){


localStorage.setItem(

"token",

response.data.token

);



toast.success(

response.data.message ||
"Account created successfully"

);



router.push(
"/customer/dashboard"
);


}



}

catch(error){


handleError(
error,
router
);


}

finally{


setLoading(false);


}


};







return (

<AuthLayout

title="Create Customer Account"

subtitle="Get instant AI-powered support from your favorite businesses"

>


<CustomerRegisterForm

formData={formData}

handleChange={handleChange}

handleRegister={handleRegister}

loading={loading}



/>



<p

className="
mt-6

text-center

text-sm

text-slate-600
"

>

Already have an account?


<Link

href="/customer/login"

className="
ml-2

font-semibold

text-blue-600

hover:text-cyan-600

transition
"

>

Login

</Link>


</p>



</AuthLayout>

);


};


export default CustomerRegisterPage;