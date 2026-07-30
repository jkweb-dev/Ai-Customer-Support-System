"use client";


import {
    useEffect,
    useState
} from "react";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";


import ProtectedRoute from "@/components/Auth/Protetected";

import TicketsUI from "@/components/company/Tickets/ticketUI";



export default function CompanyTicketsPage(){


    const [tickets,setTickets] = useState([]);


    const [loading,setLoading] = useState(true);




    const fetchTickets = async()=>{


        try{


            const res = await api.get(

                "/company/tickets"

            );


            setTickets(

                res.data.tickets

            );


        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }


    };







    useEffect(()=>{


        fetchTickets();


    },[]);







    return(


        <ProtectedRoute

            allowedRole="company"

        >


            <TicketsUI

                tickets={tickets}

                loading={loading}

            />


        </ProtectedRoute>


    );


}