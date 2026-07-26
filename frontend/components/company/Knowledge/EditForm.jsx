"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function EditKnowledgeForm({

    formData,

    file,

    onChange,

    onFileChange,

    onSubmit,

    loading

}) {


      const [tagInput,setTagInput] = useState("");

    return (


        
      

        <div
            className="
            min-h-screen
            bg-slate-50
            px-4
            py-10
            "
        >


            <div
                className="
                mx-auto
                max-w-3xl
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                md:p-10
                "
            >


                <h1
                    className="
                    text-3xl
                    font-semibold
                    text-slate-800
                    "
                >

                    Edit Knowledge

                </h1>


                <p
                    className="
                    mt-2
                    text-slate-500
                    "
                >

                    Update your knowledge document

                </p>




                <form
                    onSubmit={onSubmit}
                    className="mt-8 space-y-6"
                >



                    {/* Title */}

                    <div>

                        <label
                            className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            "
                        >
                            Title
                        </label>


                        <input

                            name="title"

                            value={formData.title}

                            onChange={onChange}

                            className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            px-4
                            py-3
                            outline-none
                            focus:border-indigo-500
                            "

                        />


                    </div>





                    {/* Category */}

                    <div>

                        <label
                            className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            "
                        >
                            Category
                        </label>


                        <input

                            name="category"

                            value={formData.category}

                            onChange={onChange}

                            className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            px-4
                            py-3
                            outline-none
                            focus:border-indigo-500
                            "

                        />


                    </div>



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






                    {/* File */}

                    <div>


                        <label
                            className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            "
                        >

                            Replace File (optional)

                        </label>



                        <input

                            type="file"

                            accept=".pdf,.txt"

                            onChange={onFileChange}

                            className="
                            block
                            w-full
                            text-sm
                            "

                        />



                    </div>







                    <button

                        disabled={loading}

                        className="
                        w-full
                        rounded-xl
                        bg-indigo-600
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-indigo-700
                        disabled:opacity-50
                        "

                    >

                        {
                            loading
                            ?
                            "Updating..."
                            :
                            "Update Knowledge"
                        }


                    </button>




                </form>


            </div>


        </div>

    );

}