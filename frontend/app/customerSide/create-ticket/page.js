"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import api from "@/Services/api";

import handleError from "@/Utils/handleError";

import ProtectedRoute from "@/components/Auth/Protetected";

import CreateTicketUI from "@/components/customer/ticket/createTicket";
import toast from "react-hot-toast";



export default function CreateTicketPage(){


    const router = useRouter();


    const [formData,setFormData] = useState({

        subject:"",

        description:""

    });


    const [loading,setLoading] = useState(false);




    const handleChange = (e)=>{

        setFormData(prev=>({

            ...prev,

            [e.target.name]:
            e.target.value

        }));

    };




    const handleSubmit = async(e)=>{

        e.preventDefault();

        if(!formData.subject || !formData.description){
            toast.error("Please Fill both fields below")
            return ;
        }


        try{

            setLoading(true);


            await api.post(

                "/tickets",

                formData

            );


            toast.success("Your Issue has reached the Admin !")

            setFormData({
                subject: "" ,
                description : ""
            })

            //router.push(
                //"/customerSide/tickets"
            //);

        }
        catch(error){

            handleError(error);

        }
        finally{

            setLoading(false);

        }

    };



    return(

        <ProtectedRoute allowedRole="customer">

            <CreateTicketUI

                formData={formData}

                onChange={handleChange}

                onSubmit={handleSubmit}

                loading={loading}

            />

        </ProtectedRoute>

    );

}