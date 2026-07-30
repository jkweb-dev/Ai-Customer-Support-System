"use client";


import {

    User,

    MessageCircle

} from "lucide-react";





export default function TopCustomers({

    customers

}){


    return(


        <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-6
            shadow-lg
            backdrop-blur-xl
            "
        >



            <h2
                className="
                mb-6
                text-xl
                font-bold
                text-slate-800
                "
            >

                Most Active Customers

            </h2>







            <div
                className="
                space-y-4
                "
            >




            {

                customers.length===0 &&

                <p
                    className="
                    text-slate-500
                    "
                >

                    No customer activity yet

                </p>

            }





            {

                customers.map(

                    (customer,index)=>(


                        <div
                            key={index}
                            className="
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            bg-slate-50
                            p-4
                            transition
                            hover:bg-indigo-50
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
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-indigo-100
                                    "
                                >

                                    <User
                                        className="
                                        text-indigo-600
                                        "
                                    />

                                </div>






                                <div>


                                    <h3
                                        className="
                                        font-semibold
                                        text-slate-800
                                        "
                                    >

                                        {customer.name}

                                    </h3>



                                    <p
                                        className="
                                        text-sm
                                        text-slate-500
                                        "
                                    >

                                        {customer.email}

                                    </p>


                                </div>



                            </div>









                            <div
                                className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-white
                                px-4
                                py-2
                                text-indigo-600
                                shadow-sm
                                "
                            >

                                <MessageCircle

                                    size={18}

                                />


                                <span
                                    className="
                                    font-bold
                                    "
                                >

                                    {

                                    customer.totalConversations

                                    }

                                </span>


                            </div>






                        </div>


                    )

                )

            }





            </div>



        </div>


    );


}