"use client";


import {
    FileText,
    File,
    Eye,
    Edit,
    Trash2,
    CalendarDays
} from "lucide-react";

import Link from "next/link";



export default function KnowledgeCard({
    knowledge,
    onDelete
}) {



    const getFileIcon = ()=>{


        if(
            knowledge.type === "pdf"
        ){

            return (
                <FileText
                    className="
                    h-6
                    w-6
                    text-red-500
                    "
                />
            );

        }


        return (

            <File
                className="
                h-6
                w-6
                text-indigo-500
                "
            />

        );


    };





    return (

        <div
            className="
            group
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-lg
            "
        >



            {/* Header */}


            <div
                className="
                flex
                items-start
                justify-between
                "
            >



                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >


                    <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-100
                        "
                    >

                        {getFileIcon()}

                    </div>



                    <div>


                        <h3
                            className="
                            line-clamp-1
                            font-semibold
                            text-slate-800
                            "
                        >

                            {knowledge.title}

                        </h3>


                        <p
                            className="
                            text-sm
                            text-slate-500
                            uppercase
                            "
                        >

                            {knowledge.type}

                        </p>


                    </div>



                </div>



            </div>







            {/* Category */}


            <div
                className="
                mt-6
                flex
                flex-wrap
                gap-2
                "
            >

                {
                    knowledge.category && (

                        <span
                            className="
                            rounded-full
                            bg-indigo-50
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-indigo-600
                            "
                        >

                            {knowledge.category}

                        </span>

                    )
                }



                {
                    knowledge.tags?.slice(0,3)
                    .map((tag,index)=>(


                        <span

                            key={index}

                            className="
                            rounded-full
                            bg-slate-100
                            px-3
                            py-1
                            text-xs
                            text-slate-600
                            "

                        >

                            #{tag}

                        </span>


                    ))
                }


            </div>








            {/* Date */}


            <div
                className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                text-slate-500
                "
            >


                <CalendarDays
                    className="
                    h-4
                    w-4
                    "
                />


                {
                    new Date(
                        knowledge.createdAt
                    )
                    .toLocaleDateString()
                }


            </div>









            {/* Actions */}


            <div
                className="
                mt-6
                flex
                gap-3
                border-t
                border-slate-100
                pt-5
                "
            >



               <Link

    href={`/companySide/Knowledge-View/${knowledge._id}`}

    className="
    flex
    flex-1
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-slate-100
    py-2.5
    text-sm
    font-medium
    text-slate-700
    transition
    hover:bg-slate-200
    "

>

    <Eye
        className="h-4 w-4"
    />

    View

</Link>





<Link

href={`/companySide/Knowledge-Edit/${knowledge._id}`}

className="
rounded-xl
bg-indigo-50
px-4
py-2
text-sm
text-indigo-600
"

>

Edit

</Link>






                <button

                    onClick={()=>onDelete(knowledge)}

                    className="
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    px-3
                    text-red-500
                    transition
                    hover:bg-red-100
                    "

                >

                    <Trash2
                        className="
                        h-4
                        w-4
                        "
                    />

                </button>



            </div>




        </div>

    );

}