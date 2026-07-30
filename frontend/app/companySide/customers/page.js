"use client";


import {

    useEffect,

    useState

} from "react";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";


import ProtectedRoute from "@/components/Auth/Protetected";

import CustomersUI from "@/components/company/Customers/customerUi";




export default function CustomersPage(){



    const [customers,setCustomers]=useState([]);

    const [loading,setLoading]=useState(true);






    const fetchCustomers = async()=>{


        try{


            const res = await api.get(

                "/company/customers"

            );



            setCustomers(

                res.data.customers

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


        fetchCustomers();


    },[]);







    return(


        <ProtectedRoute allowedRole="company">


            <CustomersUI

                customers={customers}

                loading={loading}

            />


        </ProtectedRoute>


    );


}