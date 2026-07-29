"use client";

import { useEffect, useState } from "react";

import api from "@/Services/api";
import handleError from "@/Utils/handleError";

import ProtectedRoute from "@/components/Auth/Protetected";
import MyTicketsUI from "@/components/customer/ticket/my-tickets";

export default function MyTicketsPage() {

    const [tickets, setTickets] = useState([]);

    const [loading, setLoading] = useState(true);

    const [deleteId,setDeleteId]=useState(null);

const [deleting,setDeleting]=useState(false);




    const fetchTickets = async () => {

        try {

            const res =
                await api.get("/tickets");

            setTickets(
                res.data.tickets
            );

        }
        catch (error) {

            handleError(error);

        }
        finally {

            setLoading(false);

        }

    };




    useEffect(() => {

        fetchTickets();

    }, []);






    const handleDelete = async()=>{


    try{


        setDeleting(true);


        await api.delete(

            `/tickets/${deleteId}`

        );


        setTickets(prev=>

            prev.filter(

                ticket=>

                ticket._id !== deleteId

            )

        );


        setDeleteId(null);


    }
    catch(error){

        handleError(error);

    }
    finally{

        setDeleting(false);

    }


};






    return (

        <ProtectedRoute
            allowedRole="customer"
        >

            <MyTicketsUI

    tickets={tickets}

    loading={loading}

    onDelete={setDeleteId}

    deleteId={deleteId}

    confirmDelete={handleDelete}

    closeDelete={()=>setDeleteId(null)}

    deleting={deleting}

            />

        </ProtectedRoute>

    );

}