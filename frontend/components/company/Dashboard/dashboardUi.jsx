"use client";


import {

    Users,

    MessageCircle,

    Ticket,

    Bot,

    Plus,

    Database

} from "lucide-react";

import StatCard from "./StatCard";
import RecentConversations from "./RecentConversation";
import RecentTickets from "./RecentTicket";


export default function DashboardUI({

    data,

    loading

}){



    if(loading){

        return(

            <div
                className="
                min-h-screen
                flex
                items-center
                justify-center
                text-slate-500
                "
            >

                Loading Dashboard...

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
            px-5
            py-10
            "
        >


            <div
                className="
                mx-auto
                max-w-7xl
                space-y-10
                "
            >







            {/* Header */}


            <div
                className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
                "
            >


                <div>


                    <h1
                        className="
                        text-4xl
                        font-bold
                        text-slate-800
                        "
                    >

                        Welcome Back 👋

                    </h1>


                    <p
                        className="
                        mt-2
                        text-slate-500
                        "
                    >

                        Monitor your AI support system performance.

                    </p>


                </div>





                <button
                    className="
                    flex
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
                    "
                >

                    <Plus size={20}/>

                    Quick Action

                </button>



            </div>










            {/* Stats */}


            <div
                className="
                grid
                gap-6
                sm:grid-cols-2
                xl:grid-cols-4
                "
            >



                <StatCard

                    title="Customers"

                    value={data.totalCustomers}

                    icon={Users}

                    color="indigo"

                />



                <StatCard

                    title="Conversations"

                    value={data.totalConversations}

                    icon={MessageCircle}

                    color="purple"

                />



                <StatCard

                    title="Tickets"

                    value={data.totalTickets}

                    icon={Ticket}

                    color="pink"

                />



                <StatCard

                    title="AI Resolution"

                    value={`${data.aiResolution}%`}

                    icon={Bot}

                    color="emerald"

                />


            </div>









            {/* AI Performance */}


            <div
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                p-8
                shadow-xl
                backdrop-blur-xl
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
                        rounded-2xl
                        bg-indigo-100
                        p-4
                        "
                    >

                        <Database
                            className="
                            text-indigo-600
                            "
                        />

                    </div>


                    <div>

                        <h2
                            className="
                            text-xl
                            font-bold
                            text-slate-800
                            "
                        >

                            AI Performance

                        </h2>

                        <p
                            className="
                            text-slate-500
                            "
                        >

                            How effectively AI handles customer requests.

                        </p>

                    </div>


                </div>





                <div
                    className="
                    mt-6
                    h-4
                    overflow-hidden
                    rounded-full
                    bg-slate-100
                    "
                >

                    <div

                        style={{

                            width:
                            `${data.aiResolution}%`

                        }}

                        className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600
                        "

                    />


                </div>


                <p
                    className="
                    mt-3
                    font-semibold
                    text-indigo-600
                    "
                >

                    {data.aiResolution}% conversations solved by AI

                </p>


            </div>









            {/* Recent Section */}


            <div
                className="
                grid
                gap-8
                lg:grid-cols-2
                "
            >


                <RecentConversations

                    conversations={
                        data.recentConversations
                    }

                />



                <RecentTickets

                    tickets={
                        data.recentTickets
                    }

                />


            </div>





            </div>


        </div>


    );

}