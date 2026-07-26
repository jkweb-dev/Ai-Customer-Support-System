"use client";


import {
    FileText,
    Files,
    File,
    BrainCircuit,
    HelpCircle
} from "lucide-react";



export default function KnowledgeStats({

    stats

}) {



    const cards = [

        {
            title:"Total Documents",
            value:stats.totalDocuments,
            icon:Files,
            bg:"bg-indigo-50",
            iconColor:"text-indigo-600"
        },


        {
            title:"PDF Documents",
            value:stats.pdfDocuments,
            icon:FileText,
            bg:"bg-red-50",
            iconColor:"text-red-500"
        },


        {
            title:"TXT Documents",
            value:stats.textDocuments,
            icon:File,
            bg:"bg-blue-50",
            iconColor:"text-blue-500"
        },


        {
            title:"FAQ Documents",
            value:stats.faqDocuments,
            icon:HelpCircle,
            bg:"bg-purple-50",
            iconColor:"text-purple-500"
        },


        {
            title:"AI Indexed Chunks",
            value:stats.totalChunks,
            icon:BrainCircuit,
            bg:"bg-orange-50",
            iconColor:"text-orange-500"
        }


    ];





    return (

        <div
            className="
            mb-8
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            xl:grid-cols-5
            "
        >


            {
                cards.map((card,index)=>{


                    const Icon =
                    card.icon;



                    return (

                        <div

                            key={index}

                            className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-md
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
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    ${card.bg}
                                    `}

                                >

                                    <Icon

                                        className={`
                                        h-6
                                        w-6
                                        ${card.iconColor}
                                        `}

                                    />

                                </div>



                            </div>




                            <div className="mt-5">


                                <h2
                                    className="
                                    text-3xl
                                    font-semibold
                                    text-slate-800
                                    "
                                >

                                    {card.value}


                                </h2>



                                <p
                                    className="
                                    mt-1
                                    text-sm
                                    text-slate-500
                                    "
                                >

                                    {card.title}

                                </p>


                            </div>



                        </div>

                    );


                })
            }


        </div>

    );


}