"use client";


import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import api from "@/Services/api";
import handleError from "@/Utils/handleError";

import KnowledgeDetails from "@/components/company/Knowledge/KnowledgeDetails";


export default function ViewKnowledgePage(){


    const {id}=useParams();


    const [knowledge,setKnowledge]=useState(null);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        const fetchData=async()=>{


            try{


                const res =
                await api.get(
                    `/knowledge/${id}`
                );


                setKnowledge(
                    res.data.knowledge
                );


            }
            catch(error){

                handleError(error);

            }
            finally{

                setLoading(false);

            }

        };


        if(id)
            fetchData();


    },[id]);





    if(loading)
    return (

        <div className="p-10 text-slate-500">
            Loading...
        </div>

    );



    return (

        <KnowledgeDetails

            knowledge={knowledge}

        />

    );


}