"use client";


import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    ResponsiveContainer

} from "recharts";





export default function CustomerGrowthChart({

    data

}){


    const chartData = data.map(item=>({


        month:item._id,

        customers:item.total


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

                Customer Growth

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


                <BarChart

                    data={chartData}

                >



                    <CartesianGrid

                        strokeDasharray="3 3"

                    />



                    <XAxis

                        dataKey="month"

                    />



                    <YAxis/>




                    <Tooltip/>




                    <Bar

                        dataKey="customers"

                        fill="#8b5cf6"

                        radius={[10,10,0,0]}

                    />



                </BarChart>



            </ResponsiveContainer>



            </div>



        </div>


    );


}