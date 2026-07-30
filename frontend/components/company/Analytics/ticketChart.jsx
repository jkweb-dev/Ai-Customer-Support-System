"use client";


import {

    PieChart,

    Pie,

    Cell,

    Tooltip,

    ResponsiveContainer,

    Legend

} from "recharts";





export default function TicketChart({

    data

}){


    const chartData=[


        {

            name:"Open",

            value:data.open

        },


        {

            name:"In Progress",

            value:data.inProgress

        },


        {

            name:"Resolved",

            value:data.resolved

        }


    ];





    const COLORS=[

        "#f97316",

        "#6366f1",

        "#22c55e"

    ];





    return(


        <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-6
            shadow-lg
            backdrop-blur-xl
            "
        >



            <h2
                className="
                mb-6
                text-xl
                font-bold
                text-slate-800
                "
            >

                Ticket Status

            </h2>






            <div
                className="
                h-[350px]
                "
            >



            <ResponsiveContainer

                width="100%"

                height="100%"

            >


                <PieChart>



                    <Pie

                        data={chartData}

                        dataKey="value"

                        nameKey="name"

                        cx="50%"

                        cy="50%"

                        outerRadius={110}

                        label

                    >



                    {

                        chartData.map(

                            (entry,index)=>(


                                <Cell

                                    key={index}

                                    fill={COLORS[index]}

                                />


                            )

                        )

                    }



                    </Pie>



                    <Tooltip/>

                    <Legend/>



                </PieChart>



            </ResponsiveContainer>



            </div>



        </div>


    );


}