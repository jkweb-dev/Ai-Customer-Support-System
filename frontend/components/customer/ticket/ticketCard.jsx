"use client";

import Link from "next/link";

import {

    Eye,

    Pencil,

    Trash2,

    CalendarDays

} from "lucide-react";

import { format } from "date-fns";



export default function TicketCard({

    ticket,

    onDelete

}){



    const getStatus = ()=>{

        switch(ticket.status){

            case "open":

                return {

                    text:"Open",

                    className:
                    "bg-yellow-100 text-yellow-700 border-yellow-200"

                };


            case "in_progress":

                return {

                    text:"In Progress",

                    className:
                    "bg-blue-100 text-blue-700 border-blue-200"

                };


            case "resolved":

                return {

                    text:"Resolved",

                    className:
                    "bg-green-100 text-green-700 border-green-200"

                };


            default:

                return {

                    text:"Unknown",

                    className:
                    "bg-slate-100 text-slate-600"

                };

        }

    };



    const status =
    getStatus();




    return(


        <div
            className="
            group
            flex
            h-full
            flex-col
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-6
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1.5
            hover:border-indigo-300
            hover:shadow-2xl
            "
        >




            {/* Top */}

            <div
                className="
                mb-5
                flex
                items-start
                justify-between
                gap-4
                "
            >



                <div
                    className="
                    min-w-0
                    flex-1
                    "
                >

                    <h2
                        className="
                        truncate
                        text-xl
                        font-bold
                        text-slate-800
                        "
                    >

                        {ticket.subject}

                    </h2>


                </div>




                <span
                    className={`
                    whitespace-nowrap
                    rounded-full
                    border
                    px-4
                    py-1.5
                    text-xs
                    font-semibold

                    ${status.className}
                    `}
                >

                    {status.text}

                </span>



            </div>







            {/* Description */}

            <p
                className="
                mb-6
                line-clamp-3
                flex-1
                text-[15px]
                leading-7
                text-slate-600
                "
            >

                {ticket.description}

            </p>







            {/* Footer */}

            <div
                className="
                mb-6
                flex
                items-center
                gap-2
                text-sm
                text-slate-500
                "
            >

                <CalendarDays
                    size={17}
                />

                Created

                {

                    format(

                        new Date(

                            ticket.createdAt

                        ),

                        "dd MMM yyyy"

                    )

                }

            </div>








            {/* Buttons */}

            <div
                className="
                grid
                grid-cols-2
                gap-3
                "
            >








                {/* Edit */}

                <Link

                    href={`/customerSide/edit-ticket/${ticket._id}`}

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-emerald-50
                    px-3
                    py-3
                    font-medium
                    text-emerald-700
                    transition
                    hover:bg-emerald-600
                    hover:text-white
                    "

                >

                    <Pencil
                        size={18}
                    />

                    <span
                        className="
                        hidden
                        sm:inline
                        "
                    >

                        Edit

                    </span>

                </Link>






                {/* Delete */}

                <button

                    onClick={()=>

                        onDelete(

                            ticket._id

                        )

                    }

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-red-50
                    px-3
                    py-3
                    font-medium
                    text-red-600
                    transition
                    hover:bg-red-600
                    hover:text-white
                    "

                >

                    <Trash2
                        size={18}
                    />

                    <span
                        className="
                        hidden
                        sm:inline
                        "
                    >

                        Delete

                    </span>

                </button>



            </div>




        </div>

    );

}