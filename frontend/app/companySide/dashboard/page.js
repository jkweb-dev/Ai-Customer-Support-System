"use client";


import {
    useEffect,
    useState
} from "react";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";


import ProtectedRoute from "@/components/Auth/Protetected";

import DashboardUI from "@/components/company/Dashboard/dashboardUi";




export default function DashboardPage(){



    const [data,setData] = useState(null);


    const [loading,setLoading] = useState(true);







    const fetchDashboard = async()=>{


        try{


            const res = await api.get(

                "/dashboard"

            );


            setData(

                res.data

            );

            console.log(res.data)


        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }


    };








    useEffect(()=>{


        fetchDashboard();


    },[]);









    return(


        <ProtectedRoute

            allowedRole="company"

        >


            <DashboardUI

                data={data}

                loading={loading}

            />


        </ProtectedRoute>


    );


}