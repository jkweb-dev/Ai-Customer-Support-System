"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import AuthLayout from "@/components/Auth/AuthLayout";
import CustomerLoginForm from "@/components/Auth/customerLoginForm";

import handleError from "@/Utils/handleError";
import axios from "axios";



const CustomerLoginPage = () => {


const router = useRouter();



const [formData,setFormData] = useState({

email:"",
password:""

});



const [loading,setLoading] = useState(false);








const handleChange=(e)=>{


const {name,value}=e.target;


setFormData((prev)=>({

...prev,

[name]:value

}));


};







const handleLogin = async(e)=>{


e.preventDefault();



if(!formData.email){

return toast.error(
"Email is required"
);

}


if(!formData.password){

return toast.error(
"Password is required"
);

}





try{


setLoading(true);



const response = await axios.post(
"http://localhost:5000/customer/login",

formData

);





if(
response.status===200 ||
response.status===201
){


localStorage.setItem(

"token",

response.data.token

);



toast.success(

response.data.message ||
"Login successful"

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

title="Welcome Back"

subtitle="Continue your AI support experience"

>


<CustomerLoginForm

formData={formData}

handleChange={handleChange}

handleLogin={handleLogin}

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

Don't have an account?


<Link

href="/customer/register"

className="
ml-2

font-semibold

text-blue-600

hover:text-cyan-600
"

>

Register

</Link>


</p>



</AuthLayout>

);


};


export default CustomerLoginPage;