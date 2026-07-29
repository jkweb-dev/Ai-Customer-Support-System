"use client";


import {
    useState
} from "react";


import {
    Bot,
    Send,
    User,
    Sparkles
} from "lucide-react";

import ChatSidebar from "./chatSidebar";

import api from "@/Services/api";

import handleError from "@/Utils/handleError";




export default function AIChat(){


    const [message,setMessage]=useState("");

    const [messages,setMessages]=useState([]);


    const [loading,setLoading]=useState(false);

    const [conversationId,setConversationId]=useState(null);






    const sendMessage=async()=>{


        if(!message.trim())
            return;




        const userMessage={

            role:"user",

            text:message

        };



        setMessages(prev=>[

            ...prev,

            userMessage

        ]);



        setMessage("");




        try{


            setLoading(true);




            const res =

            await api.post(

                "/Ai/chat",

                {

                    question: userMessage.text ,
                      conversationId


                }

            );



            setConversationId(
    res.data.conversationId
);




            setMessages(prev=>[

                ...prev,


                {

                    role:"assistant",

                    text:
                    res.data.answer

                }


            ]);



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
    flex
    h-screen
    bg-gradient-to-br
    from-indigo-50
    via-white
    to-purple-50
    "
>

    <ChatSidebar

    conversationId={conversationId}

    setConversationId={setConversationId}

    setMessages={setMessages}

     refreshKey={conversationId}

/>

<div
    className="
    flex
    flex-1
    flex-col
    "
>






            {/* Header */}
<div
    className="
    border-b
    border-slate-200
    bg-white/70
    backdrop-blur-xl
    px-5
    py-5
    lg:px-5
    pl-20
    lg:pl-5
    "
>


                <div
                    className="
                    mx-auto
                    flex
                    max-w-5xl
                    items-center
                    gap-4
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
                        bg-gradient-to-br
                        from-indigo-500
                        to-purple-600
                        "
                    >

                        <Sparkles
                            className="
                            text-white
                            "
                        />

                    </div>




                    <div>


                        <h1
                            className="
                            text-xl
                            font-semibold
                            text-slate-800
                            "
                        >

                            AI Assistant

                        </h1>


                        <p
                            className="
                            text-sm
                            text-slate-500
                            "
                        >

                            Ask anything, I'm here to help.

                        </p>


                    </div>



                </div>


            </div>









            {/* Messages */}


            <div
                className="
                flex-1
                overflow-y-auto
                px-5
                py-8
                pb-36
                "
            >


                <div
                    className="
                    mx-auto
                    max-w-4xl
                    space-y-5
                    "
                >



                {
                    messages.length===0 &&

                    <div
                        className="
                        flex
                        min-h-[400px]
                        flex-col
                        items-center
                        justify-center
                        text-center
                        "
                    >


                        <Bot
                            className="
                            h-16
                            w-16
                            text-indigo-400
                            "
                        />


                        <h2
                            className="
                            mt-5
                            text-2xl
                            font-semibold
                            text-slate-700
                            "
                        >

                            How can I help you?

                        </h2>


                        <p
                            className="
                            mt-2
                            text-slate-500
                            "
                        >

                            Ask questions about products,
                            services, or policies.

                        </p>


                    </div>

                }





                {
                    messages.map(
                        (msg,index)=>(


                        <div
                            key={index}
                            className={`
                            flex
                            gap-3
                            ${
                                msg.role==="user"
                                ?
                                "justify-end"
                                :
                                "justify-start"
                            }
                            `}
                        >



                            {
                                msg.role==="assistant" &&

                                <div
                                    className="
                                    flex
                                    h-10
                                    w-10
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

                            }





                            <div
                                className={`
                                max-w-[80%]
                                rounded-3xl
                                px-5
                                py-4
                                text-sm
                                leading-7

                                ${
                                    msg.role==="user"

                                    ?

                                    "bg-indigo-600 text-white"

                                    :

                                    "bg-white text-slate-700 shadow-sm border border-slate-100"

                                }

                                `}
                            >

                                {msg.text}


                            </div>






                            {
                                msg.role==="user" &&

                                <div
                                    className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-slate-200
                                    "
                                >

                                    <User/>

                                </div>

                            }



                        </div>


                        )
                    )
                }





                {
                    loading &&

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <Bot
                            className="
                            animate-pulse
                            text-indigo-600
                            "
                        />


                        <span
                            className="
                            text-slate-500
                            "
                        >

                            AI is thinking...

                        </span>


                    </div>

                }



                </div>


            </div>









            {/* Input */}


            <div
                className="
                border-t
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                p-5
                "
            >


                <div
                    className="
                    mx-auto
                    flex
                    max-w-4xl
                    gap-3
                    "
                >


                    <input

                        value={message}

                        onChange={
                            e=>
                            setMessage(
                                e.target.value
                            )
                        }


                        onKeyDown={
                            e=>{

                                if(
                                    e.key==="Enter"
                                )
                                sendMessage();

                            }
                        }


                        placeholder="
                        Ask your question...
                        "

                        className="
                        flex-1
                        rounded-2xl
                        border
                        border-slate-200
                        px-5
                        py-4
                        outline-none
                        focus:border-indigo-500
                        "

                    />



                    <button

                        onClick={sendMessage}

                        disabled={loading}

                        className="
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        px-5
                        text-white
                        shadow-lg
                        hover:opacity-90
                        "

                    >

                        <Send/>

                    </button>



                </div>


            </div>



</div>


        </div>


    );

}