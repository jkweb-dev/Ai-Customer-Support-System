"use client";

import { useState } from "react";

import {
    UploadCloud,
    FileText,
    Tag,
    FolderOpen
} from "lucide-react";


import { X } from "lucide-react";


export default function KnowledgeForm({
    formData,
    file,
    onChange,
    onFileChange,
    onSubmit,
    loading
}) {

const [tagInput,setTagInput] = useState("");
    return (

        <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">

            <div className="mx-auto max-w-4xl">


                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-3xl font-semibold tracking-tight text-slate-800">
                        Add Knowledge
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Upload documents and train your AI assistant with company knowledge.
                    </p>

                </div>



                {/* Form Card */}

                <form
                    onSubmit={onSubmit}
                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    md:p-10
                    "
                >


                    <div className="grid gap-6 md:grid-cols-2">



                        {/* Title */}

                        <div className="md:col-span-2">


                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Knowledge Title
                            </label>


                            <div className="relative">

                                <FileText
                                    className="
                                    absolute
                                    left-4
                                    top-3.5
                                    h-5
                                    w-5
                                    text-slate-400
                                    "
                                />


                                <input

                                    name="title"

                                    value={formData.title}

                                    onChange={onChange}

                                    placeholder="Example: Refund Policy"

                                    className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    py-3
                                    pl-12
                                    pr-4
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-indigo-400
                                    focus:bg-white
                                    "
                                />


                            </div>


                        </div>





                        {/* Type */}

                        <div>


                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Knowledge Type
                            </label>


                            <select

                                name="type"

                                value={formData.type}

                                onChange={onChange}

                                className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-3
                                text-slate-700
                                outline-none
                                focus:border-indigo-400
                                "

                            >

                                <option value="">
                                    Select Type
                                </option>

                                <option value="pdf">
                                    PDF
                                </option>

                                <option value="text">
                                    TXT
                                </option>

                                <option value="faq">
                                    FAQ
                                </option>


                            </select>


                        </div>





                        {/* Category */}

                        <div>


                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Category
                            </label>


                            <div className="relative">


                                <FolderOpen
                                    className="
                                    absolute
                                    left-4
                                    top-3.5
                                    h-5
                                    w-5
                                    text-slate-400
                                    "
                                />


                                <input

                                    name="category"

                                    value={formData.category}

                                    onChange={onChange}

                                    placeholder="Billing, HR, Support"

                                    className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    py-3
                                    pl-12
                                    pr-4
                                    outline-none
                                    focus:border-indigo-400
                                    "

                                />


                            </div>


                        </div>





                        {/* Tags */}
<div className="md:col-span-2">

    <label className="mb-2 block text-sm font-medium text-slate-700">
        Tags
    </label>


    <div
        className="
        flex
        flex-wrap
        gap-2
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-3
        "
    >


        {
            formData.tags.map((tag,index)=>(

                <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-indigo-100
                    px-3
                    py-1
                    text-sm
                    text-indigo-700
                    "
                >

                    {tag}


                    <button
                        type="button"
                        onClick={()=>{

                            const updated =
                            formData.tags.filter(
                                (_,i)=>i!==index
                            );

                            onChange({
                                target:{
                                    name:"tags",
                                    value:updated
                                }
                            });

                        }}
                    >

                        <X className="h-4 w-4"/>

                    </button>


                </div>

            ))
        }



        <input

            value={tagInput}

            onChange={(e)=>{

                const value =
                e.target.value;


                // only characters allowed

                if(
                    /^[a-zA-Z]*$/.test(value)
                ){

                    setTagInput(value);

                }

            }}


            onKeyDown={(e)=>{


                if(
                    e.key === "Enter" &&
                    tagInput.trim()
                ){


                    e.preventDefault();



                    onChange({

                        target:{

                            name:"tags",

                            value:[
                                ...formData.tags,
                                tagInput.toLowerCase()
                            ]

                        }

                    });



                    setTagInput("");

                }


            }}


            placeholder="Type tag and press Enter"


            className="
            flex-1
            min-w-[150px]
            bg-transparent
            outline-none
            text-slate-700
            "

        />


    </div>

</div>


                    </div>






                    {/* Upload Area */}


                    <div className="mt-8">


                        <label className="mb-3 block text-sm font-medium text-slate-700">
                            Upload Document
                        </label>


                        <label
                            className="
                            flex
                            cursor-pointer
                            flex-col
                            items-center
                            justify-center
                            rounded-3xl
                            border-2
                            border-dashed
                            border-indigo-200
                            bg-indigo-50
                            px-6
                            py-10
                            text-center
                            transition
                            hover:bg-indigo-100
                            "
                        >


                            <UploadCloud
                                className="
                                mb-3
                                h-10
                                w-10
                                text-indigo-500
                                "
                            />


                            <p className="font-medium text-slate-700">
                                Click to upload file
                            </p>


                            <p className="mt-1 text-sm text-slate-500">
                                PDF or TXT files only
                            </p>


                            {
                                file && (

                                    <p className="mt-4 rounded-full bg-white px-4 py-2 text-sm text-indigo-600 shadow-sm">
                                        {file.name}
                                    </p>

                                )
                            }


                            <input

                                type="file"

                                hidden

                                onChange={onFileChange}

                            />


                        </label>



                    </div>







                    {/* Button */}


                    <button

                        disabled={loading}

                        className="
                        mt-8
                        w-full
                        rounded-2xl
                        bg-indigo-500
                        py-3.5
                        font-medium
                        text-white
                        shadow-md
                        transition
                        hover:bg-indigo-600
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        "

                    >

                        {
                            loading
                            ?
                            "Creating Knowledge..."
                            :
                            "Create Knowledge"
                        }


                    </button>



                </form>


            </div>


        </div>

    );


}