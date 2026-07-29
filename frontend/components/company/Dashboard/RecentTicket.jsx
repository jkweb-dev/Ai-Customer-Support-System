"use client";


import {

    Ticket,

    User

} from "lucide-react";



export default function RecentTickets({

    tickets

}){


    const statusStyle=(status)=>{


        if(status==="open")

            return "bg-yellow-100 text-yellow-700";


        if(status==="in_progress")

            return "bg-blue-100 text-blue-700";


        return "bg-green-100 text-green-700";


    };



    return(

        <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-7
            shadow-xl
            backdrop-blur-xl
            "
        >


            <div
                className="
                mb-6
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    rounded-2xl
                    bg-indigo-100
                    p-3
                    "
                >

                    <Ticket
                        className="
                        text-indigo-600
                        "
                    />

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-slate-800
                    "
                >

                    Recent Tickets

                </h2>


            </div>







            <div
                className="
                space-y-4
                "
            >


            {

                tickets.length===0 ?

                (

                    <p
                        className="
                        py-8
                        text-center
                        text-slate-500
                        "
                    >

                        No tickets yet

                    </p>

                )

                :

                tickets.map(ticket=>(


                    <div

                        key={ticket._id}

                        className="
                        rounded-2xl
                        bg-slate-50
                        p-4
                        transition
                        hover:bg-indigo-50
                        "

                    >



                        <div
                            className="
                            flex
                            justify-between
                            gap-3
                            "
                        >


                            <div
                                className="
                                flex
                                items-center
                                gap-3
                                "
                            >

                                <User
                                    size={18}
                                    className="
                                    text-slate-500
                                    "
                                />

                                <h3
                                    className="
                                    font-semibold
                                    text-slate-800
                                    "
                                >

                                    {ticket.subject}

                                </h3>


                            </div>



                            <span
                                className={`
                                rounded-full
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                ${statusStyle(ticket.status)}
                                `}
                            >

                                {ticket.status}

                            </span>


                        </div>




                        <p
                            className="
                            mt-3
                            line-clamp-2
                            text-sm
                            text-slate-500
                            "
                        >

                            {ticket.description}

                        </p>



                    </div>


                ))

            }


            </div>


        </div>


    );

}