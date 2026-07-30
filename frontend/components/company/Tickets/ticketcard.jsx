"use client";


import Link from "next/link";


import {

    User,

    CalendarDays,

    Eye,

    Mail

} from "lucide-react";


import {

    format

} from "date-fns";




export default function TicketCard({

    ticket

}){



    const statusStyle = ()=>{


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



    const status = statusStyle();







    return(


        <div
            className="
            group
            flex
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
            hover:-translate-y-2
            hover:border-indigo-300
            hover:shadow-2xl
            "
        >





            {/* Header */}


            <div
                className="
                flex
                items-start
                justify-between
                gap-4
                "
            >



                <h2
                    className="
                    line-clamp-2
                    text-xl
                    font-bold
                    text-slate-800
                    "
                >

                    {ticket.subject}

                </h2>





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









            {/* Customer */}


            <div
                className="
                mt-6
                rounded-2xl
                bg-slate-50
                p-4
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
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-100
                        "
                    >

                        <User
                            className="
                            text-indigo-600
                            "
                            size={20}
                        />

                    </div>



                    <div>


                        <h3
                            className="
                            font-semibold
                            text-slate-800
                            "
                        >

                            {
                                ticket.customerId?.name ||
                                "Customer"
                            }

                        </h3>



                        <div
                            className="
                            flex
                            items-center
                            gap-1
                            text-sm
                            text-slate-500
                            "
                        >

                            <Mail size={14}/>


                            {
                                ticket.customerId?.email ||
                                "No email"
                            }


                        </div>


                    </div>


                </div>



            </div>









            {/* Description */}


            <p
                className="
                mt-5
                line-clamp-3
                flex-1
                text-sm
                leading-7
                text-slate-600
                "
            >

                {ticket.description}

            </p>









            {/* Date */}


            <div
                className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                text-slate-500
                "
            >

                <CalendarDays size={17}/>


                {

                    format(

                        new Date(

                            ticket.createdAt

                        ),

                        "dd MMM yyyy"

                    )

                }


            </div>









            {/* Action */}


            <Link

                href={`/companySide/ticketDetails/${ticket._id}`}

                className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                py-3.5
                font-semibold
                text-white
                shadow-lg
                transition
                hover:scale-[1.03]
                "

            >

                <Eye size={18}/>


                View Ticket


            </Link>




        </div>


    );

}