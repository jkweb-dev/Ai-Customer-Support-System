"use client";


import {
    useEffect,
    useState
} from "react";


import {
    useParams,
    useRouter
} from "next/navigation";

import EditKnowledgeForm from "@/components/company/Knowledge/EditForm";

import api from "@/Services/api";

import handleError from "@/Utils/handleError";
import toast from "react-hot-toast";



export default function EditKnowledgePage(){


    const {id}=useParams();


    const router=useRouter();



    const [formData,setFormData]=useState({

        title:"",
        category:"",
        type : "" ,
        tags:[]

    });



    const [file,setFile]=useState(null);



    const [loading,setLoading]=useState(false);



    const [pageLoading,setPageLoading]=useState(true);





    // Fetch existing data

    useEffect(()=>{


        const fetchKnowledge=async()=>{


            try{


                const res =
                await api.get(
                    `/knowledge/${id}`
                );



                const knowledge =
                res.data.knowledge;



                setFormData({

                    title:
                    knowledge.title || "",


                    category:
                    knowledge.category || "",

                    type : knowledge.type || "" ,

                    tags:
                    knowledge.tags || []

                });



            }
            catch(error){

                handleError(error);

            }
            finally{

                setPageLoading(false);

            }


        };



        if(id)
        fetchKnowledge();



    },[id]);







   const handleChange = (e)=>{

    const {name,value} = e.target;


    setFormData((prev)=>({

        ...prev,

        [name]: value

    }));

};








    const handleFileChange=(e)=>{


        setFile(
            e.target.files[0]
        );


    };








    const handleSubmit=async(e)=>{


        e.preventDefault();


        try{


            setLoading(true);



            const data =
            new FormData();



            data.append(
                "title",
                formData.title
            );



            data.append(
                "category",
                formData.category
            );

            
            data.append(
                "type",
                formData.type
            );



            data.append(
                "tags",
                JSON.stringify(
                    formData.tags
                )
            );




            if(file){

                data.append(
                    "file",
                    file
                );

            }




            await api.put(

                `/knowledge/${id}`,

                data,

                {

                    headers:{

                        "Content-Type":
                        "multipart/form-data"

                    }

                }

            );


toast.success("Updated Successfully !")


        }
        catch(error){

            handleError(error);

        }
        finally{

            setLoading(false);

        }


    };








    if(pageLoading)

    return (

        <div className="p-10 text-slate-500">

            Loading...

        </div>

    );







    return (

        <EditKnowledgeForm

            formData={formData}

            file={file}

            onChange={handleChange}

            onFileChange={handleFileChange}

            onSubmit={handleSubmit}

            loading={loading}

        />

    );

}