"use client";


import {
    useState
} from "react";


import {
    Send,
    Bot,
    User,
    FileText,
    Sparkles
} from "lucide-react";


import api from "@/Services/api";

import handleError from "@/Utils/handleError";





export default function AIPlayground(){


    const [question,setQuestion]=useState("");

    const [answer,setAnswer]=useState("");

    const [sources,setSources]=useState([]);

    const [loading,setLoading]=useState(false);







    const askAI = async()=>{


        if(!question.trim())
            return;




        try{


            setLoading(true);


            setAnswer("");

            setSources([]);





            const res =

            await api.post(

                "/Ai-settings/test",

                {
                    question
                }

            );





            setAnswer(

                res.data.answer

            );



            setSources(

                res.data.sources || []

            );





        }
        catch(error){


            handleError(error);


        }
        finally{


            setLoading(false);


        }



    };









    return (


        <div
            className="
            space-y-8
            "
        >





            {/* Header */}


            <div>


                <div className="
                flex
                items-center
                gap-3
                "
                >

                    <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-indigo-50
                        "
                    >

                        <Sparkles
                            className="
                            text-indigo-600
                            "
                        />

                    </div>



                    <div>

                        <h2
                            className="
                            text-2xl
                            font-semibold
                            text-slate-800
                            "
                        >

                            AI Playground

                        </h2>


                        <p
                            className="
                            text-slate-500
                            "
                        >

                            Test your AI assistant before customers use it.

                        </p>


                    </div>


                </div>


            </div>









            {/* Chat Area */}


            <div
                className="
                min-h-[350px]
                rounded-3xl
                border
                border-slate-100
                bg-slate-50
                p-5
                md:p-8
                "
            >



                {
                    !answer && !loading &&

                    <div
                        className="
                        flex
                        h-full
                        min-h-[280px]
                        flex-col
                        items-center
                        justify-center
                        text-center
                        "
                    >

                        <Bot
                            className="
                            h-14
                            w-14
                            text-indigo-400
                            "
                        />


                        <h3
                            className="
                            mt-4
                            text-lg
                            font-medium
                            text-slate-700
                            "
                        >

                            Ask something about your company

                        </h3>


                        <p
                            className="
                            mt-2
                            max-w-md
                            text-sm
                            text-slate-500
                            "
                        >

                            The AI will search your uploaded knowledge
                            and generate an answer.

                        </p>


                    </div>

                }







                {
                    loading &&

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-white
                        p-5
                        shadow-sm
                        "
                    >

                        <Bot
                            className="
                            animate-pulse
                            text-indigo-600
                            "
                        />


                        <p className="text-slate-500">

                            AI is thinking...

                        </p>


                    </div>

                }









                {
                    answer && !loading &&

                    <div className="space-y-5">



                        {/* AI Response */}


                        <div
                            className="
                            flex
                            gap-3
                            "
                        >

                            <div
                                className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-indigo-100
                                "
                            >

                                <Bot
                                    className="
                                    text-indigo-600
                                    "
                                />

                            </div>




                            <div
                                className="
                                rounded-2xl
                                bg-white
                                p-5
                                shadow-sm
                                "
                            >

                                <p
                                    className="
                                    leading-7
                                    text-slate-700
                                    "
                                >

                                    {answer}

                                </p>


                            </div>


                        </div>







                        {/* Sources */}


                        {
                            sources.length>0 &&

                            <div>


                                <h4
                                    className="
                                    mb-3
                                    flex
                                    items-center
                                    gap-2
                                    font-semibold
                                    text-slate-700
                                    "
                                >

                                    <FileText
                                        size={18}
                                    />

                                    Knowledge Sources

                                </h4>




                                <div
                                    className="
                                    grid
                                    gap-3
                                    md:grid-cols-2
                                    "
                                >


                                {
                                    sources.map(
                                        (source,index)=>(

                                        <div
                                            key={index}
                                            className="
                                            rounded-2xl
                                            bg-white
                                            p-4
                                            shadow-sm
                                            "
                                        >

                                            <p
                                                className="
                                                text-sm
                                                font-medium
                                                text-slate-700
                                                "
                                            >

                                                {source.file}

                                            </p>



                                            <p
                                                className="
                                                mt-1
                                                text-xs
                                                text-indigo-600
                                                "
                                            >

                                                Similarity:
                                                {" "}
                                                {source.score}


                                            </p>


                                        </div>


                                        )
                                    )
                                }


                                </div>


                            </div>

                        }



                    </div>

                }





            </div>









            {/* Input */}


            <div
                className="
                flex
                flex-col
                gap-3
                sm:flex-row
                "
            >



                <input

                    value={question}

                    onChange={
                        (e)=>
                        setQuestion(
                            e.target.value
                        )
                    }


                    onKeyDown={
                        (e)=>{

                            if(e.key==="Enter")
                                askAI();

                        }
                    }


                    placeholder="
                    Ask your AI assistant...
                    "

                    className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    text-slate-700
                    outline-none
                    focus:border-indigo-500
                    "

                />




                <button

                    onClick={askAI}

                    disabled={loading}

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    px-7
                    py-4
                    font-medium
                    text-white
                    shadow-lg
                    transition
                    hover:opacity-90
                    disabled:opacity-50
                    "

                >

                    <Send
                        size={18}
                    />

                    Ask AI


                </button>



            </div>





        </div>

    );

}