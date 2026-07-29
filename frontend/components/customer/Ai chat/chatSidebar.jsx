"use client";

import { useEffect, useState } from "react";

import {
    Menu,
    MessageSquare,
    Plus,
    X
} from "lucide-react";

import api from "@/Services/api";
import handleError from "@/Utils/handleError";



export default function ChatSidebar({

    conversationId,

    setConversationId,

    setMessages,

    refreshKey

}){

    const [conversations,setConversations]=useState([]);

    const [loading,setLoading]=useState(false);

    const [open,setOpen]=useState(false);




    useEffect(()=>{

        fetchConversations();

    },[refreshKey]);






    const fetchConversations=async()=>{

        try{

            setLoading(true);

            const res=
            await api.get("/conversations");

            setConversations(
                res.data.conversations
            );

        }
        catch(error){

            handleError(error);

        }
        finally{

            setLoading(false);

        }

    };






    const loadConversation=async(id)=>{

        try{

            const res=
            await api.get(

                `/conversations/${id}`

            );

            setConversationId(id);

            setMessages(

                res.data.conversation.messages
            );

            setOpen(false);

        }
        catch(error){

            handleError(error);

        }

    };






    const newChat=()=>{

        setConversationId(null);

        setMessages([]);

        setOpen(false);

    };





    return(

        <>

            {/* Mobile Menu */}

            <button

                onClick={()=>setOpen(true)}

                className="
                fixed
                left-4
                top-4
                z-40
                rounded-xl
                bg-white
                p-3
                shadow-lg
                lg:hidden
                "

            >

                <Menu/>

            </button>






            {/* Overlay */}

            {

                open &&

                <div

                    onClick={()=>setOpen(false)}

                    className="
                    fixed
                    inset-0
                    z-40
                    bg-black/30
                    lg:hidden
                    "

                />

            }







            <aside

                className={`

                fixed

                left-0

                top-0

                z-50

                flex

                h-screen

                w-80

                flex-col

                border-r

                border-slate-200

                bg-white

                shadow-xl

                transition-transform

                duration-300

                lg:static

                lg:translate-x-0

                ${
                    open
                    ?
                    "translate-x-0"
                    :
                    "-translate-x-full"
                }

                `}

            >




                {/* Header */}

                <div

                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    p-5
                    "

                >

                    <div>

                        <h2
                            className="
                            text-xl
                            font-bold
                            text-slate-800
                            "
                        >

                            Conversations

                        </h2>

                        <p
                            className="
                            text-sm
                            text-slate-500
                            "
                        >

                            Your chat history

                        </p>

                    </div>




                    <button

                        onClick={()=>setOpen(false)}

                        className="lg:hidden"

                    >

                        <X/>

                    </button>

                </div>







                {/* New Chat */}

                <div className="p-5">

                    <button

                        onClick={newChat}

                        className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        px-5
                        py-3
                        font-medium
                        text-white
                        shadow-lg
                        transition
                        hover:opacity-90
                        "

                    >

                        <Plus
                            className="h-5 w-5"
                        />

                        New Chat

                    </button>

                </div>







                {/* Conversation List */}

               {/* Conversation List */}

<div
    className="
    flex-1
    overflow-y-auto
    px-4
    pb-5
    "
>

    {
        loading ? (

            <p className="text-center text-slate-500 mt-8">
                Loading...
            </p>

        ) : conversations.length === 0 ? (

            <div
                className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                text-center
                px-6
                "
            >

                <MessageSquare
                    className="
                    h-14
                    w-14
                    text-slate-300
                    "
                />

                <h3
                    className="
                    mt-4
                    text-lg
                    font-semibold
                    text-slate-700
                    "
                >
                    No conversations yet
                </h3>

                <p
                    className="
                    mt-2
                    text-sm
                    text-slate-500
                    "
                >
                    Start a new chat to begin talking with the AI assistant.
                </p>

            </div>

        ) : (

            <div className="space-y-2">

                {
                    conversations.map(

                        (conversation)=>(

                            <button

                                key={conversation._id}

                                onClick={()=>
                                    loadConversation(
                                        conversation._id
                                    )
                                }

                                className={`
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-2xl
                                p-4
                                text-left
                                transition
                                hover:bg-indigo-50

                                ${
                                    conversationId===conversation._id
                                    ?
                                    "border border-indigo-300 bg-indigo-100"
                                    :
                                    "bg-white"
                                }
                                `}
                            >

                                <MessageSquare
                                    className="
                                    h-5
                                    w-5
                                    shrink-0
                                    text-indigo-600
                                    "
                                />

                                <div className="min-w-0">

                                    <p
                                        className="
                                        truncate
                                        font-medium
                                        text-slate-700
                                        "
                                    >
                                        {
                                            conversation.lastMessage ||
                                            "New Conversation"
                                        }
                                    </p>

                                    <p
                                        className="
                                        mt-1
                                        text-xs
                                        text-slate-400
                                        "
                                    >
                                        {
                                            new Date(
                                                conversation.updatedAt
                                            ).toLocaleDateString()
                                        }
                                    </p>

                                </div>

                            </button>

                        )

                    )
                }

            </div>

        )
    }

</div>
            </aside>

        </>

    );

}