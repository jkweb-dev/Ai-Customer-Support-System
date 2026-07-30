"use client";


import {

    useEffect,

    useState

} from "react";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";


import ProtectedRoute from "@/components/Auth/Protetected";


import AnalyticsUI from "@/components/company/Analytics/Ui";




export default function AnalyticsPage(){


    const [analytics,setAnalytics]=useState(null);

    const [loading,setLoading]=useState(true);





    const fetchAnalytics = async()=>{


        try{


            const res = await api.get(

                "/company/analytics"

            );


            setAnalytics(

                res.data

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


        fetchAnalytics();


    },[]);







    return(


        <ProtectedRoute allowedRole="company">


            <AnalyticsUI

                analytics={analytics}

                loading={loading}

            />


        </ProtectedRoute>


    );


}