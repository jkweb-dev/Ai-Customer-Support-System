"use client";

import Link from "next/link";

import {

    Ticket,

    Plus,

    Inbox

} from "lucide-react";

import TicketCard from "./ticketCard";
import DeleteTicketModal from "./DeleteTicket";


export default function MyTicketsUI({

    tickets,

    loading,

    onDelete,

      deleteId,

    confirmDelete,

    closeDelete,

    deleting

}) {

    return (

        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            px-4
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
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                    "
                >




                    <div
                        className="
                        flex
                        items-center
                        gap-5
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
                                h-8
                                w-8
                                text-white
                                "
                            />

                        </div>




                        <div>

                            <h1
                                className="
                                text-3xl
                                font-bold
                                text-slate-800
                                "
                            >

                                My Tickets

                            </h1>

                            <p
                                className="
                                mt-2
                                text-slate-500
                                "
                            >

                                Track and manage all of your support requests.

                            </p>

                        </div>



                    </div>





                    <Link

                        href="/customerSide/create-ticket"

                        className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        px-6
                        py-4
                        font-semibold
                        text-white
                        shadow-lg
                        transition
                        hover:scale-105
                        hover:shadow-xl
                        "

                    >

                        <Plus size={20} />

                        Create Ticket

                    </Link>



                </div>







                {/* Loading */}

                {

                    loading &&

                    <div
                        className="
                        py-24
                        text-center
                        text-slate-500
                        "
                    >

                        Loading tickets...

                    </div>

                }








                {/* Empty State */}

                {

                    !loading &&

                    tickets.length === 0 &&

                    <div
                        className="
                        rounded-3xl
                        border
                        border-dashed
                        border-slate-300
                        bg-white/70
                        p-16
                        text-center
                        shadow-sm
                        backdrop-blur-xl
                        "
                    >



                        <div
                            className="
                            mx-auto
                            mb-6
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            rounded-full
                            bg-indigo-100
                            "
                        >

                            <Inbox
                                className="
                                h-12
                                w-12
                                text-indigo-600
                                "
                            />

                        </div>




                        <h2
                            className="
                            text-2xl
                            font-bold
                            text-slate-700
                            "
                        >

                            No Tickets Yet

                        </h2>



                        <p
                            className="
                            mt-3
                            text-slate-500
                            "
                        >

                            Create your first support ticket if you need assistance.

                        </p>




                        <Link

                            href="/customerSide/create-ticket"

                            className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-indigo-600
                            to-purple-600
                            px-6
                            py-4
                            font-semibold
                            text-white
                            shadow-lg
                            "

                        >

                            <Plus size={18} />

                            Create Ticket

                        </Link>



                    </div>

                }









                {/* Tickets */}

                {

                    !loading &&

                    tickets.length > 0 &&

                    <div
                        className="
                        grid
                        gap-7
                        md:grid-cols-2
                        xl:grid-cols-3
                        "
                    >

                        {

                            tickets.map(ticket => (

                                <TicketCard

                                    key={ticket._id}

                                    ticket={ticket}

                                    onDelete={onDelete}

                                />

                            ))

                        }

                    </div>

                }





            </div>



<DeleteTicketModal

    open={deleteId !== null}

    onClose={closeDelete}

    onConfirm={confirmDelete}

    loading={deleting}

/>

        </div>

    );

}