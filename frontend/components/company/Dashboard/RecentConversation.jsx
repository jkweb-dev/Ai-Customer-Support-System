"use client";


import {

    MessageCircle,

    User

} from "lucide-react";



export default function RecentConversations({

    conversations

}){


    return(

        <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-7
            shadow-xl
            backdrop-blur-xl
            "
        >


            <div
                className="
                mb-6
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    rounded-2xl
                    bg-purple-100
                    p-3
                    "
                >

                    <MessageCircle
                        className="
                        text-purple-600
                        "
                    />

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-slate-800
                    "
                >

                    Recent Conversations

                </h2>


            </div>







            <div
                className="
                space-y-4
                "
            >


            {

                conversations.length === 0 ?

                (

                    <p
                        className="
                        text-center
                        text-slate-500
                        py-8
                        "
                    >

                        No conversations yet

                    </p>

                )

                :

                conversations.map((item)=>(


                    <div

                        key={item._id}

                        className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        bg-slate-50
                        p-4
                        transition
                        hover:bg-purple-50
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
                            bg-white
                            shadow-sm
                            "
                        >

                            <User
                                className="
                                text-purple-600
                                "
                            />

                        </div>





                        <div
                            className="
                            min-w-0
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
                                    item.customerId?.name ||
                                    "Customer"
                                }

                            </h3>


                            <p
                                className="
                                truncate
                                text-sm
                                text-slate-500
                                "
                            >

                                Latest AI conversation

                            </p>


                        </div>


                    </div>


                ))

            }


            </div>


        </div>

    );

}