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

import TicketDetailsUI from "@/components/company/Tickets/ticketDetails";



export default function TicketDetailsPage(){


    const { id } = useParams();

    const router = useRouter();



    const [ticket,setTicket] = useState(null);

    const [status,setStatus] = useState("");

    const [loading,setLoading] = useState(true);

    const [saving,setSaving] = useState(false);





    const fetchTicket = async()=>{


        try{


            const res = await api.get(

                `/company/tickets/${id}`

            );


            setTicket(

                res.data.ticket

            );


            setStatus(

                res.data.ticket.status

            );


        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }


    };






    const updateStatus = async()=>{


        try{


            setSaving(true);


            const res = await api.put(

                `/company/tickets/${id}/status`,

                {

                    status

                }

            );


            setTicket(

                res.data.ticket

            );


        }
        catch(error){


            handleError(error);


        }
        finally{


            setSaving(false);


        }


    };






    useEffect(()=>{


        fetchTicket();


    },[]);






    return(

        <ProtectedRoute allowedRole="company">

            <TicketDetailsUI

                ticket={ticket}

                status={status}

                setStatus={setStatus}

                loading={loading}

                saving={saving}

                updateStatus={updateStatus}

                goBack={()=>router.back()}

            />

        </ProtectedRoute>

    );

}