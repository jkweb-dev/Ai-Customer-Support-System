"use client";


import {
    Plus,
    X
} from "lucide-react";


export default function SuggestedPrompts({

    prompts,

    setPrompts,

    onSave,

    saving

}){


    const addPrompt=()=>{

        setPrompts([
            ...prompts,
            ""
        ]);

    };





    const updatePrompt=(index,value)=>{


        const updated=[...prompts];

        updated[index]=value;

        setPrompts(updated);


    };






    const removePrompt=(index)=>{


        setPrompts(
            prompts.filter(
                (_,i)=>i!==index
            )
        );


    };






    return (

        <div className="space-y-6">


            <h2 className="
            text-2xl
            font-semibold
            text-slate-800
            ">
                Suggested Prompts
            </h2>




            <div className="space-y-3">


            {
                prompts.map((prompt,index)=>(


                    <div
                        key={index}
                        className="
                        flex
                        gap-3
                        "
                    >


                        <input

                            value={prompt}

                            onChange={(e)=>
                            updatePrompt(
                                index,
                                e.target.value
                            )}

                            className="
                            flex-1
                            rounded-xl
                            border
                            border-slate-200
                            px-4
                            py-3
                            "

                        />



                        <button

                            onClick={()=>
                            removePrompt(index)}

                            className="
                            rounded-xl
                            bg-red-50
                            px-3
                            text-red-500
                            "

                        >

                            <X/>

                        </button>


                    </div>


                ))
            }


            </div>




            <button

                onClick={addPrompt}

                className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-indigo-50
                px-5
                py-3
                text-indigo-600
                "

            >

                <Plus size={18}/>

                Add Prompt

            </button>



            <button

                onClick={onSave}

                disabled={saving}

                className="
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                text-white
                "

            >

                Save

            </button>


        </div>

    );

}