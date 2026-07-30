"use client";

import {

    MessageCircle,

    Menu

} from "lucide-react";

import {

    useState

} from "react";

import ConversationSidebar from "./Conversationsidebar";

import ConversationViewer from "./ConversationViewer";



export default function ConversationsUI({

    loading,

    conversations,

    conversation,

    conversationId,

    setConversationId

}){



    const [sidebarOpen,setSidebarOpen]=useState(false);




    if(loading){

        return(

            <div
                className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-gradient-to-br
                from-indigo-50
                via-white
                to-purple-50
                "
            >

                Loading...

            </div>

        );

    }





    return(


        <div
            className="
            h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            "
        >





        {/* Header */}


        <div
            className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-slate-200
            bg-white/80
            px-6
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


                <button

                    onClick={()=>setSidebarOpen(true)}

                    className="
                    rounded-xl
                    p-2
                    hover:bg-slate-100
                    lg:hidden
                    "

                >

                    <Menu/>

                </button>





                <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-600
                    to-purple-600
                    shadow-lg
                    "
                >

                    <MessageCircle
                        className="
                        text-white
                        "
                    />

                </div>





                <div>


                    <h1
                        className="
                        text-2xl
                        font-bold
                        text-slate-800
                        "
                    >

                        Conversations

                    </h1>


                    <p
                        className="
                        text-sm
                        text-slate-500
                        "
                    >

                        Monitor customer AI conversations

                    </p>


                </div>


            </div>



        </div>









        {/* Body */}


        <div
            className="
            flex
            h-[calc(100vh-80px)]
            "
        >





            <ConversationSidebar

                conversations={conversations}

                conversationId={conversationId}

                setConversationId={setConversationId}

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />






            <ConversationViewer

                conversation={conversation}

            />



        </div>



        </div>

    );

}