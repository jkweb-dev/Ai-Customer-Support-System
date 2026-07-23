"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";


import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/Auth/Login";
import { useAuth } from "@/Context/AuthProvider";


import handleError from "@/Utils/handleError";
import axios from "axios";



const LoginPage = () => {

const {login} = useAuth()
const router = useRouter();



const [formData,setFormData] = useState({

email:"",
password:""

});



const [loading,setLoading] = useState(false);







const handleChange = (e)=>{


const {name,value}=e.target;


setFormData((prev)=>({

...prev,

[name]:value

}));


};







const handleLogin = async(e)=>{


e.preventDefault();



if(!formData.email.trim()){

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

 "http://localhost:5000/company/login",

formData

);




if(
response.status === 200 ||
response.status === 201
){


await login(response.data.token)



toast.success(

response.data.message ||
"Login successful"

);



router.push(
"/company/dashboard"
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

subtitle="Login to manage your AI customer support system"

>


<LoginForm

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

href="/company/register"

className="
ml-2

font-semibold

text-violet-600

hover:text-indigo-600

transition
"

>

Create Account

</Link>


</p>



</AuthLayout>

);


};


export default LoginPage;