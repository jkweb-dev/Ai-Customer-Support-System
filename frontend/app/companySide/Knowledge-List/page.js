"use client";


import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";


import api from "@/Services/api";
import handleError from "@/Utils/handleError";


import KnowledgeGrid from "@/components/company/Knowledge/KnowledgeGrid";
import KnowledgeStats from "@/components/company/Knowledge/KnowledgeStats";
import DeleteModal from "@/components/company/Knowledge/KnowlegeDelete";




export default function KnowledgePage(){



    const [knowledge,setKnowledge] = useState([]);


    const [loading,setLoading] = useState(true);

    const [stats,setStats] = useState(null);

    const [deleteItem,setDeleteItem] = useState(null);

const [deleteLoading,setDeleteLoading] = useState(false);



    const fetchKnowledge = async()=>{


        try{


            setLoading(true);



            const response =
            await api.get(
                "/knowledge"
            );



            setKnowledge(
                response.data.knowledge
            );



        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }


    };

    const fetchStats = async()=>{

    try{

        const response =
        await api.get(
            "/knowledge/stats"
        );


        setStats(
            response.data.stats
        );


        console.log(response.data.stats)
    }
    catch(error){

        handleError(error);

    }

};






    useEffect(()=>{


        fetchKnowledge();

        fetchStats()

    },[]);






const handleDelete = (item)=>{

    setDeleteItem(item);

};





const confirmDelete = async()=>{


    try{


        setDeleteLoading(true);



        await api.delete(
            `/knowledge/${deleteItem._id}`
        );



        setDeleteItem(null);



        fetchKnowledge();


        fetchStats();



    }
    catch(error){


        handleError(error);


    }
    finally{


        setDeleteLoading(false);


    }


};


    return (

        <div
            className="
            min-h-screen
            bg-slate-50
            px-4
            py-8

            md:px-8
            "
        >


            <div
                className="
                mx-auto
                max-w-7xl
                "
            >




                {/* Header */}


                <div
                    className="
                    mb-8
                    flex
                    flex-col
                    justify-between
                    gap-5

                    md:flex-row
                    md:items-center
                    "
                >



                    <div>


                        <h1
                            className="
                            text-3xl
                            font-semibold
                            tracking-tight
                            text-slate-800
                            "
                        >

                            Knowledge Base

                        </h1>



                        <p
                            className="
                            mt-2
                            text-slate-500
                            "
                        >

                            Manage documents that power your AI assistant.

                        </p>


                    </div>






                    <Link

                        href="/company/knowledge/add"

                        className="
                        flex
                        items-center
                        justify-center
                        gap-2

                        rounded-2xl
                        bg-indigo-500
                        px-5
                        py-3

                        font-medium
                        text-white

                        shadow-sm

                        transition
                        hover:bg-indigo-600
                        "

                    >


                        <Plus
                            className="
                            h-5
                            w-5
                            "
                        />


                        Add Knowledge


                    </Link>



                </div>




{
    stats && (

        <KnowledgeStats

            stats={stats}

        />

    )
}



            {/* Content */}


                {
                    loading ? (


                        <div
                            className="
                            flex
                            h-64
                            items-center
                            justify-center
                            rounded-3xl
                            bg-white
                            text-slate-500
                            "
                        >

                            Loading knowledge...


                        </div>



                    )
                    :

                   
    

                    (

                        <KnowledgeGrid

                            knowledge={knowledge}

                            onDelete={handleDelete}

                        />

                    )


                }



    <DeleteModal

        knowledge={deleteItem}

        onClose={()=>setDeleteItem(null)}

        onConfirm={confirmDelete}

        loading={deleteLoading}

    />



            </div>


        </div>


    );


}