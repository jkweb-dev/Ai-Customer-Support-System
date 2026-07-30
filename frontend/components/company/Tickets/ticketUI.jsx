"use client";


import {

    Ticket,

    Search,

    Filter

} from "lucide-react";


import {

    useState

} from "react";


import TicketCard from "./ticketcard";




export default function TicketsUI({

    tickets,

    loading

}){


    const [search,setSearch] = useState("");

    const [status,setStatus] = useState("all");






    const filteredTickets = tickets.filter(ticket=>{


        const matchSearch =

        ticket.subject
        .toLowerCase()
        .includes(

            search.toLowerCase()

        );



        const matchStatus =

        status==="all"

        ?

        true

        :

        ticket.status===status;



        return matchSearch && matchStatus;


    });







    return(

        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            px-5
            py-10
            "
        >



        <div
            className="
            mx-auto
            max-w-7xl
            "
        >






        {/* Header */}


        <div
            className="
            mb-10
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
            "
        >


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
                    rounded-3xl
                    bg-gradient-to-br
                    from-indigo-600
                    to-purple-600
                    shadow-xl
                    "
                >

                    <Ticket
                        className="
                        text-white
                        "
                    />

                </div>




                <div>


                    <h1
                        className="
                        text-4xl
                        font-bold
                        text-slate-800
                        "
                    >

                        Support Tickets

                    </h1>


                    <p
                        className="
                        mt-2
                        text-slate-500
                        "
                    >

                        Manage and resolve customer requests.

                    </p>


                </div>


            </div>


        </div>









        {/* Filters */}


        <div
            className="
            mb-8
            flex
            flex-col
            gap-4
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-5
            shadow-lg
            backdrop-blur-xl
            md:flex-row
            "
        >



            <div
                className="
                relative
                flex-1
                "
            >

                <Search

                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    "

                    size={20}

                />



                <input

                    value={search}

                    onChange={
                        e=>
                        setSearch(
                            e.target.value
                        )
                    }

                    placeholder="Search tickets..."

                    className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-4
                    pl-12
                    pr-5
                    outline-none
                    focus:border-indigo-500
                    "

                />


            </div>







            <div
                className="
                flex
                items-center
                gap-3
                "
            >

                <Filter
                    className="
                    text-slate-500
                    "
                />



                <select

                    value={status}

                    onChange={
                        e=>
                        setStatus(
                            e.target.value
                        )
                    }

                    className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    outline-none
                    "

                >

                    <option value="all">
                        All
                    </option>

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


            </div>



        </div>









        {

            loading &&

            <div
                className="
                py-20
                text-center
                text-slate-500
                "
            >

                Loading tickets...

            </div>

        }









        {

            !loading &&

            filteredTickets.length===0 &&

            <div
                className="
                rounded-3xl
                bg-white/80
                p-16
                text-center
                shadow-xl
                "
            >

                <Ticket
                    className="
                    mx-auto
                    h-16
                    w-16
                    text-indigo-400
                    "
                />

                <h2
                    className="
                    mt-5
                    text-2xl
                    font-bold
                    text-slate-700
                    "
                >

                    No Tickets Found

                </h2>


            </div>

        }








        {

            !loading &&

            filteredTickets.length>0 &&


            <div
                className="
                grid
                gap-7
                md:grid-cols-2
                xl:grid-cols-3
                "
            >


            {

                filteredTickets.map(ticket=>(

                    <TicketCard

                        key={ticket._id}

                        ticket={ticket}

                    />

                ))

            }


            </div>


        }




        </div>

        </div>

    );

}