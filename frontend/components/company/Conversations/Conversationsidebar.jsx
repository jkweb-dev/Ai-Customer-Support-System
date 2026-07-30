"use client";

import {

    useMemo,

    useState

} from "react";

import {

    Search,

    X,

    MessageCircle,

    User

} from "lucide-react";

import {

    formatDistanceToNow

} from "date-fns";



export default function ConversationSidebar({

    conversations,

    conversationId,

    setConversationId,

    sidebarOpen,

    setSidebarOpen

}){


    const [search,setSearch]=useState("");






    const filteredConversations = useMemo(()=>{


        return conversations.filter(conversation=>{


            const customer =

            conversation.customerId?.name || "";


            return customer

            .toLowerCase()

            .includes(

                search.toLowerCase()

            );


        });


    },[

        conversations,

        search

    ]);







    const SidebarContent=(


        <div
            className="
            flex
            h-full
            w-full
            flex-col
            "
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


                <h2
                    className="
                    text-lg
                    font-bold
                    text-slate-800
                    "
                >

                    Chats

                </h2>



                <button

                    onClick={()=>

                        setSidebarOpen(false)

                    }

                    className="
                    rounded-xl
                    p-2
                    hover:bg-slate-100
                    lg:hidden
                    "

                >

                    <X/>

                </button>


            </div>








            {/* Search */}


            <div
                className="
                p-5
                "
            >


                <div
                    className="
                    relative
                    "
                >


                    <Search

                        size={18}

                        className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        "

                    />



                    <input

                        value={search}

                        onChange={

                            e=>

                            setSearch(

                                e.target.value

                            )

                        }

                        placeholder="Search customer..."

                        className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3
                        pl-11
                        pr-4
                        outline-none
                        focus:border-indigo-500
                        "

                    />


                </div>


            </div>









            {/* Conversation List */}


            <div
                className="
                flex-1
                space-y-2
                overflow-y-auto
                px-3
                pb-4
                "
            >




            {

                filteredConversations.length===0 &&

                (

                    <div
                        className="
                        mt-20
                        text-center
                        "
                    >

                        <MessageCircle
                            className="
                            mx-auto
                            h-12
                            w-12
                            text-slate-300
                            "
                        />

                        <p
                            className="
                            mt-4
                            text-slate-500
                            "
                        >

                            No conversations

                        </p>

                    </div>

                )

            }







            {

                filteredConversations.map(

                    conversation=>{


                        const active =

                        conversationId===conversation._id;



                        return(


                            <button

                                key={conversation._id}

                                onClick={()=>{

                                    setConversationId(

                                        conversation._id

                                    );

                                    setSidebarOpen(false);

                                }}

                                className={`
                                w-full
                                rounded-2xl
                                border
                                p-4
                                text-left
                                transition-all

                                ${
                                    active

                                    ?

                                    "border-indigo-200 bg-indigo-50 shadow-md"

                                    :

                                    "border-transparent bg-white hover:border-slate-200 hover:bg-slate-50"

                                }
                                `}
                            >





                                <div
                                    className="
                                    flex
                                    items-start
                                    gap-3
                                    "
                                >




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

                                        <User
                                            size={20}
                                            className="
                                            text-indigo-600
                                            "
                                        />

                                    </div>





                                    <div
                                        className="
                                        min-w-0
                                        flex-1
                                        "
                                    >



                                        <h3
                                            className="
                                            truncate
                                            font-semibold
                                            text-slate-800
                                            "
                                        >

                                            {

                                                conversation.customerId?.name ||

                                                "Customer"

                                            }

                                        </h3>




                                        <p
                                            className="
                                            mt-1
                                            truncate
                                            text-sm
                                            text-slate-500
                                            "
                                        >

                                            {

                                                conversation.lastMessage ||

                                                "No messages"

                                            }

                                        </p>





                                        <p
                                            className="
                                            mt-2
                                            text-xs
                                            text-slate-400
                                            "
                                        >

                                            {

                                                formatDistanceToNow(

                                                    new Date(

                                                        conversation.updatedAt

                                                    ),

                                                    {

                                                        addSuffix:true

                                                    }

                                                )

                                            }

                                        </p>



                                    </div>




                                </div>





                            </button>

                        );


                    }

                )

            }



            </div>




        </div>

    );







    return(


        <>


            {/* Desktop */}


            <div
                className="
                hidden
                w-96
                border-r
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                lg:block
                "
            >

                {SidebarContent}

            </div>






            {/* Mobile Overlay */}


            {

                sidebarOpen &&

                <div
                    className="
                    fixed
                    inset-0
                    z-50
                    bg-black/40
                    lg:hidden
                    "
                    onClick={()=>

                        setSidebarOpen(false)

                    }
                />

            }








            {/* Mobile Drawer */}


            <div
                className={`
                fixed
                left-0
                top-0
                z-50
                h-full
                w-80
                bg-white
                shadow-2xl
                transition-transform
                duration-300
                lg:hidden

                ${

                    sidebarOpen

                    ?

                    "translate-x-0"

                    :

                    "-translate-x-full"

                }

                `}
            >

                {SidebarContent}

            </div>


        </>


    );

}