"use client";


import {

    LineChart,

    Line,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    ResponsiveContainer

} from "recharts";




export default function ConversationChart({

    data

}){


    const chartData = data.map(item=>({

        date:item._id,

        conversations:item.total

    }));




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

                Conversation Trend

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


                <LineChart

                    data={chartData}

                >



                    <CartesianGrid

                        strokeDasharray="3 3"

                    />



                    <XAxis

                        dataKey="date"

                    />



                    <YAxis/>



                    <Tooltip/>




                    <Line

                        type="monotone"

                        dataKey="conversations"

                        stroke="#6366f1"

                        strokeWidth={4}

                        dot={{

                            r:5

                        }}

                    />



                </LineChart>


            </ResponsiveContainer>



            </div>



        </div>


    );


}