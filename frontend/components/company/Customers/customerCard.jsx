"use client";


import Link from "next/link";


import {

    MessageCircle,

    Ticket,

    CalendarDays,

    Eye,

    User

} from "lucide-react";


import {

    format

} from "date-fns";





export default function CustomerCard({

    customer

}){



    return(


        <div
            className="
            group
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






        {/* Profile */}


        <div
            className="
            flex
            items-center
            gap-4
            "
        >



            <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500
                to-purple-600
                shadow-lg
                "
            >

                <User
                    className="
                    text-white
                    "
                    size={30}
                />

            </div>





            <div
                className="
                min-w-0
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

                    {customer.name}

                </h2>



                <p
                    className="
                    truncate
                    text-sm
                    text-slate-500
                    "
                >

                    {customer.email}

                </p>


            </div>



        </div>










        {/* Stats */}


        <div
            className="
            mt-7
            grid
            grid-cols-2
            gap-4
            "
        >




            <div
                className="
                rounded-2xl
                bg-indigo-50
                p-4
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-indigo-600
                    "
                >

                    <MessageCircle size={18}/>

                    <span
                        className="
                        text-sm
                        font-semibold
                        "
                    >

                        Chats

                    </span>


                </div>




                <p
                    className="
                    mt-2
                    text-2xl
                    font-bold
                    text-slate-800
                    "
                >

                    {

                        customer.totalConversations

                    }

                </p>


            </div>









            <div
                className="
                rounded-2xl
                bg-purple-50
                p-4
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-purple-600
                    "
                >

                    <Ticket size={18}/>


                    <span
                        className="
                        text-sm
                        font-semibold
                        "
                    >

                        Tickets

                    </span>


                </div>




                <p
                    className="
                    mt-2
                    text-2xl
                    font-bold
                    text-slate-800
                    "
                >

                    {

                        customer.totalTickets

                    }

                </p>


            </div>




        </div>









        {/* Joining Date */}


        <div
            className="
            mt-6
            flex
            items-center
            gap-2
            rounded-2xl
            bg-slate-50
            px-4
            py-3
            text-sm
            text-slate-600
            "
        >

            <CalendarDays size={17}/>



            Joined:

            <span
                className="
                font-semibold
                text-slate-800
                "
            >

                {

                    format(

                        new Date(

                            customer.createdAt

                        ),

                        "dd MMM yyyy"

                    )

                }

            </span>


        </div>









        {/* Button */}


        <Link

            href="#"

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


            Customer Profile


        </Link>







        </div>


    );

}