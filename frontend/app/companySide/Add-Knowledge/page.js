"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


import KnowledgeForm from "@/components/company/Knowledge/knowledgeForm";
import handleError from "@/Utils/handleError";




export default function AddKnowledgePage(){


    const router = useRouter();



    const [formData,setFormData] = useState({

        title:"",
        type:"",
        category:"",
        tags:[]

    });



    const [file,setFile] = useState(null);



    const [loading,setLoading] = useState(false);





    // Handle Inputs

   const handleChange = (e)=>{

    const {name,value} = e.target;


    setFormData((prev)=>({

        ...prev,

        [name]: value

    }));

};





    // Handle File

    const handleFileChange = (e)=>{


        const selectedFile =
        e.target.files[0];


        if(selectedFile){

            setFile(selectedFile);

        }


    };







    // Submit

    const handleSubmit = async(e)=>{


        e.preventDefault();



        try{


            if(!file){

                toast.error(
                    "Please select a file"
                );

                return;

            }



            setLoading(true);




            const data = new FormData();



            data.append(
                "title",
                formData.title
            );


            data.append(
                "type",
                formData.type
            );


            data.append(
                "category",
                formData.category
            );


data.append(
    "tags",
    JSON.stringify(formData.tags)
);

            data.append(
                "file",
                file
            );






            const token =
            localStorage.getItem(
                "token"
            );






            const response =
            await axios.post(

                `${process.env.NEXT_PUBLIC_API_URL}/knowledge`,

                data,

                {

                    headers:{

                        Authorization:
                        `Bearer ${token}`

                     

                    }

                }

            );






            if(
                response.status === 200 ||
                response.status === 201
            ){

                toast.success(
                    "Knowledge created successfully"
                );

setFormData({
     title:"",
        type:"",
        category:"",
        tags:[]
    })

    setFile(null)

            }





        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }



    };






    return (

        <KnowledgeForm

            formData={formData}

            file={file}

            onChange={handleChange}

            onFileChange={handleFileChange}

            onSubmit={handleSubmit}

            loading={loading}

        />

    );


}