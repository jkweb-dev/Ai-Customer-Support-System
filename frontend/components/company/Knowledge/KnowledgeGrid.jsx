"use client";

import KnowledgeCard from "./KnowledgeCard";


export default function KnowledgeGrid({

    knowledge,

    onDelete

}) {



    if(!knowledge || knowledge.length === 0){


        return (

            <div
                className="
                flex
                min-h-[300px]
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-slate-200
                bg-white
                "
            >

                <div
                    className="
                    text-center
                    "
                >

                    <h3
                        className="
                        text-lg
                        font-semibold
                        text-slate-700
                        "
                    >

                        No Knowledge Added

                    </h3>


                    <p
                        className="
                        mt-2
                        text-sm
                        text-slate-500
                        "
                    >

                        Upload documents to train your AI assistant.

                    </p>


                </div>


            </div>

        );


    }





    return (

        <div
            className="
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            xl:grid-cols-3
            "
        >


            {
                knowledge.map((item)=>(


                    <KnowledgeCard

                        key={item._id}

                        knowledge={item}

                        onDelete={onDelete}

                    />


                ))
            }


        </div>

    );


}