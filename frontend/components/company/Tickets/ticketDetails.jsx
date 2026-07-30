"use client";

import {

    ArrowLeft,

    CalendarDays,

    Mail,

    User,

    Save

} from "lucide-react";

import {

    format

} from "date-fns";



export default function TicketDetailsUI({

    ticket,

    status,

    setStatus,

    loading,

    saving,

    updateStatus,

    goBack

}){


    if(loading){

        return(

            <div className="min-h-screen flex items-center justify-center">

                Loading...

            </div>

        );

    }




    if(!ticket){

        return(

            <div className="min-h-screen flex items-center justify-center">

                Ticket not found

            </div>

        );

    }





    return(


        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            p-6
            "
        >



        <div
            className="
            mx-auto
            max-w-5xl
            "
        >





        <button

            onClick={goBack}

            className="
            mb-8
            flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            shadow
            hover:bg-slate-50
            "

        >

            <ArrowLeft size={18}/>

            Back

        </button>







        <div
            className="
            rounded-3xl
            bg-white
            p-8
            shadow-xl
            "
        >




        <h1
            className="
            text-3xl
            font-bold
            text-slate-800
            "
        >

            {ticket.subject}

        </h1>





        <div
            className="
            mt-8
            grid
            gap-6
            md:grid-cols-2
            "
        >




        <div
            className="
            rounded-2xl
            bg-slate-50
            p-5
            "
        >

            <div className="flex items-center gap-2">

                <User size={18}/>

                <span className="font-semibold">

                    Customer

                </span>

            </div>

            <p className="mt-3">

                {ticket.customerId?.name}

            </p>

            <div className="mt-2 flex items-center gap-2 text-slate-500">

                <Mail size={16}/>

                {ticket.customerId?.email}

            </div>

        </div>






        <div
            className="
            rounded-2xl
            bg-slate-50
            p-5
            "
        >

            <div className="flex items-center gap-2">

                <CalendarDays size={18}/>

                <span className="font-semibold">

                    Created

                </span>

            </div>

            <p className="mt-3">

                {

                    format(

                        new Date(ticket.createdAt),

                        "dd MMM yyyy"

                    )

                }

            </p>

        </div>




        </div>







        <div className="mt-8">

            <h2
                className="
                text-xl
                font-semibold
                text-slate-800
                "
            >

                Description

            </h2>

            <div
                className="
                mt-3
                rounded-2xl
                bg-slate-50
                p-6
                leading-8
                text-slate-600
                "
            >

                {ticket.description}

            </div>

        </div>








        <div className="mt-10">

            <h2
                className="
                text-xl
                font-semibold
                text-slate-800
                "
            >

                Ticket Status

            </h2>



            <div
                className="
                mt-4
                flex
                flex-col
                gap-4
                md:flex-row
                "
            >


                <select

                    value={status}

                    onChange={

                        e=>setStatus(

                            e.target.value

                        )

                    }

                    className="
                    rounded-2xl
                    border
                    border-slate-200
                    px-5
                    py-4
                    outline-none
                    focus:border-indigo-500
                    "

                >

                    <option value="open">

                        Open

                    </option>

                    <option value="in_progress">

                        In Progress

                    </option>

                    <option value="resolved">

                        Resolved

                    </option>

                </select>





                <button

                    onClick={updateStatus}

                    disabled={saving}

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    hover:opacity-90
                    "

                >

                    <Save size={18}/>

                    {

                        saving

                        ?

                        "Saving..."

                        :

                        "Save Changes"

                    }

                </button>


            </div>


        </div>




        </div>


        </div>


        </div>

    );

}