"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import AuthLayout from "@/components/Auth/AuthLayout";
import RegisterForm from "@/components/Auth/Register";
import { useAuth } from "@/Context/AuthProvider";


import handleError from "@/Utils/handleError";
import axios from "axios";


 const RegisterPage = () => {

  const {login} = useAuth()

  const router = useRouter();


  const [formData, setFormData] = useState({

    companyName: "",
    email: "",
    password: "",
    confirmPassword: ""

  });



  const [loading, setLoading] = useState(false);



  // Handle Input Changes

  const handleChange = (e) => {


    const { name, value } = e.target;


    setFormData((prev)=>({

      ...prev,

      [name]: value

    }));


  };







  // Register Handler

  const handleRegister = async (e) => {


    e.preventDefault();



    // Frontend Validation

    if(!formData.companyName.trim()){

      return toast.error("Company name is required");

    }


    if(!formData.email.trim()){

      return toast.error("Email is required");

    }


    if(formData.password.length < 8){

      return toast.error(
        "Password must be at least 8 characters"
      );

    }



    if(formData.password !== formData.confirmPassword){

      return toast.error(
        "Passwords do not match"
      );

    }





    try{


      setLoading(true);



      const response = await axios.post(  "http://localhost:5000/company/register", {

          companyName: formData.companyName,

          email: formData.email,

          password: formData.password
 }
 );



   if(
  response.status === 200 ||
  response.status === 201
){

  const token = response.data.token;

await login(token)


  toast.success(
    response.data.message ||
    "Account created successfully"
  );


  router.push("/companySide/Knowledge-List");

}




    }

    catch(error){


      handleError(error, router);


    }

    finally{


      setLoading(false);


    }


  };







  return (

    <AuthLayout

      title="Create Company Account"

      subtitle="Build your AI-powered customer support system"

    >


      <RegisterForm

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

          href="/company/login"

          className="
          ml-2

          font-semibold

          text-violet-600

          hover:text-indigo-600

          transition
          "

        >

          Login

        </Link>


      </p>



    </AuthLayout>

  );

};


export default RegisterPage