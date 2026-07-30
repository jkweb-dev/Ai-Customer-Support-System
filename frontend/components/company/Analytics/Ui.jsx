"use client";


import {

    BarChart3

} from "lucide-react";


import StatCard from "./statsCard";

import TicketChart from "./ticketChart";

import ConversationChart from "./conversationChart";

import CustomerGrowthChart from "./customerGrowthChart";

import TopCustomers from "./topCustomer";



export default function AnalyticsUI({

    analytics,

    loading

}){


    if(loading){

        return(

            <div
                className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-gradient-to-br
                from-indigo-50
                via-white
                to-purple-50
                "
            >

                Loading Analytics...

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
            "
        >





        {/* Header */}


        <div
            className="
            mb-10
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

                <BarChart3
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

                    Analytics

                </h1>


                <p
                    className="
                    text-slate-500
                    "
                >

                    Understand your AI support performance

                </p>


            </div>


        </div>









        {/* Stats */}


        <div
            className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
            "
        >


            <StatCard

                title="Customers"

                value={analytics.totalCustomers}

                type="customers"

            />


            <StatCard

                title="Conversations"

                value={analytics.totalConversations}

                type="conversations"

            />


            <StatCard

                title="Tickets"

                value={analytics.totalTickets}

                type="tickets"

            />


            <StatCard

                title="Resolved"

                value={analytics.ticketStatus.resolved}

                type="resolved"

            />


        </div>









        {/* Charts */}


        <div
            className="
            mt-8
            grid
            gap-8
            xl:grid-cols-2
            "
        >


            <ConversationChart

                data={analytics.conversationTrend}

            />


            <TicketChart

                data={analytics.ticketStatus}

            />


        </div>







        <div
            className="
            mt-8
            "
        >

            <CustomerGrowthChart

                data={analytics.customerGrowth}

            />

        </div>







        <div
            className="
            mt-8
            "
        >

            <TopCustomers

                customers={analytics.topCustomers}

            />

        </div>





        </div>


        </div>


    );

}