"use client";


import {

    Users,

    MessageCircle,

    Ticket,

    CheckCircle

} from "lucide-react";




export default function StatCard({

    title,

    value,

    type

}){



    const config = {


        customers:{

            icon:Users,

            color:"from-blue-500 to-cyan-500",

            bg:"bg-blue-50"

        },


        conversations:{

            icon:MessageCircle,

            color:"from-indigo-500 to-purple-600",

            bg:"bg-indigo-50"

        },


        tickets:{

            icon:Ticket,

            color:"from-orange-500 to-pink-500",

            bg:"bg-orange-50"

        },


        resolved:{

            icon:CheckCircle,

            color:"from-green-500 to-emerald-600",

            bg:"bg-green-50"

        }


    };





    const Icon = config[type].icon;





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
            hover:shadow-2xl
            "
        >





            <div
                className="
                flex
                items-center
                justify-between
                "
            >



                <div
                    className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${config[type].bg}
                    `}
                >


                    <Icon

                        className="
                        text-slate-700
                        "

                        size={28}

                    />


                </div>





                <div
                    className={`
                    h-2
                    w-16
                    rounded-full
                    bg-gradient-to-r
                    ${config[type].color}
                    `}
                />


            </div>







            <p
                className="
                mt-6
                text-sm
                font-medium
                text-slate-500
                "
            >

                {title}

            </p>




            <h2
                className="
                mt-2
                text-4xl
                font-bold
                text-slate-800
                "
            >

                {value}

            </h2>





        </div>


    );

}