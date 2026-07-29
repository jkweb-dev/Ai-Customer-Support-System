"use client";

import {
    useEffect,
    useState
} from "react";


import {
    useParams,
    useRouter
} from "next/navigation";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";

import ProtectedRoute from "@/components/Auth/Protetected";

import EditTicketUI from "@/components/customer/ticket/Edit-ticket";



export default function EditTicketPage(){


    const params = useParams();

    const router = useRouter();


    const id = params.id;



    const [formData,setFormData] = useState({

        subject:"",

        description:""

    });


    const [loading,setLoading] = useState(true);


    const [saving,setSaving] = useState(false);






    const fetchTicket = async()=>{


        try{


            const res =

            await api.get(

                `/tickets/${id}`

            );



            setFormData({

                subject:
                res.data.ticket.subject,


                description:
                res.data.ticket.description

            });


        }
        catch(error){

            handleError(error);

        }
        finally{

            setLoading(false);

        }


    };








    useEffect(()=>{


        fetchTicket();


    },[]);









    const handleChange=(e)=>{


        setFormData(prev=>({

            ...prev,

            [e.target.name]:
            e.target.value

        }));


    };









    const handleSubmit=async(e)=>{


        e.preventDefault();


        try{


            setSaving(true);



            await api.put(

                `/tickets/${id}`,

                formData

            );



            router.push(

                "/customerSide/my-tickets"

            );


        }
        catch(error){

            handleError(error);

        }
        finally{

            setSaving(false);

        }


    };









    return(

        <ProtectedRoute
            allowedRole="customer"
        >


            <EditTicketUI

                formData={formData}

                loading={loading}

                saving={saving}

                onChange={handleChange}

                onSubmit={handleSubmit}

            />


        </ProtectedRoute>

    );


}