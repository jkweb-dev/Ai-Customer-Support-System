"use client";

import {

    Bot,

    User,

    Mail,

    MessageCircle

} from "lucide-react";

import {

    format

} from "date-fns";



export default function ConversationViewer({

    conversation

}){


    if(!conversation){

        return(

            <div
                className="
                flex
                flex-1
                items-center
                justify-center
                bg-gradient-to-br
                from-indigo-50
                via-white
                to-purple-50
                "
            >

                <div
                    className="
                    text-center
                    "
                >

                    <MessageCircle
                        className="
                        mx-auto
                        h-16
                        w-16
                        text-indigo-300
                        "
                    />

                    <h2
                        className="
                        mt-6
                        text-2xl
                        font-bold
                        text-slate-700
                        "
                    >

                        Select a Conversation

                    </h2>

                    <p
                        className="
                        mt-2
                        text-slate-500
                        "
                    >

                        Choose a conversation from the sidebar.

                    </p>

                </div>

            </div>

        );

    }






    return(


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
            bg-white/80
            p-6
            backdrop-blur-xl
            "
        >



            <div
                className="
                flex
                items-center
                gap-4
                "
            >



                <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-500
                    to-purple-600
                    "
                >

                    <User
                        className="
                        text-white
                        "
                    />

                </div>





                <div>


                    <h2
                        className="
                        text-xl
                        font-bold
                        text-slate-800
                        "
                    >

                        {

                            conversation.customerId?.name ||

                            "Customer"

                        }

                    </h2>




                    <div
                        className="
                        mt-1
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-500
                        "
                    >

                        <Mail size={16}/>

                        {

                            conversation.customerId?.email

                        }

                    </div>



                </div>



            </div>



        </div>










        {/* Messages */}


        <div
            className="
            flex-1
            overflow-y-auto
            px-6
            py-8
            "
        >



            <div
                className="
                mx-auto
                max-w-5xl
                space-y-6
                "
            >




            {

                conversation.messages.map(

                    (message,index)=>(


                        <div

                            key={index}

                            className={`
                            flex
                            gap-4

                            ${

                                message.role==="user"

                                ?

                                "justify-end"

                                :

                                "justify-start"

                            }

                            `}
                        >






                        {

                            message.role==="assistant" &&

                            <div
                                className="
                                flex
                                h-11
                                w-11
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
                            shadow-sm

                            ${

                                message.role==="user"

                                ?

                                "bg-indigo-600 text-white"

                                :

                                "border border-slate-100 bg-white text-slate-700"

                            }

                            `}
                        >



                            <p
                                className="
                                whitespace-pre-wrap
                                leading-7
                                "
                            >

                                {message.text}

                            </p>





                            <p
                                className={`
                                mt-3
                                text-xs

                                ${

                                    message.role==="user"

                                    ?

                                    "text-indigo-100"

                                    :

                                    "text-slate-400"

                                }

                                `}
                            >

                                {

                                    message.createdAt

                                    ?

                                    format(

                                        new Date(

                                            message.createdAt

                                        ),

                                        "dd MMM yyyy • hh:mm a"

                                    )

                                    :

                                    ""

                                }

                            </p>



                        </div>








                        {

                            message.role==="user" &&

                            <div
                                className="
                                flex
                                h-11
                                w-11
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




            </div>



        </div>



        </div>

    );

}