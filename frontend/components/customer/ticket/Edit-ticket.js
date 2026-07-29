"use client";


import Link from "next/link";


import {

    Ticket,

    ArrowLeft,

    Save

} from "lucide-react";



export default function EditTicketUI({

    formData,

    loading,

    saving,

    onChange,

    onSubmit

}){


    if(loading){

        return(

            <div
                className="
                min-h-screen
                flex
                items-center
                justify-center
                text-slate-500
                "
            >

                Loading ticket...

            </div>

        );

    }





    return(

        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            px-4
            py-10
            "
        >


            <div
                className="
                mx-auto
                max-w-4xl
                "
            >



                {/* Header */}

                <div
                    className="
                    mb-8
                    flex
                    items-center
                    justify-between
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
                            from-indigo-600
                            to-purple-600
                            "
                        >

                            <Ticket
                                className="
                                text-white
                                "
                            />

                        </div>



                        <div>

                            <h1
                                className="
                                text-3xl
                                font-bold
                                text-slate-800
                                "
                            >

                                Edit Ticket

                            </h1>


                            <p
                                className="
                                text-slate-500
                                "
                            >

                                Update your support request details.

                            </p>

                        </div>


                    </div>



                    <Link

                        href="/customer/tickets"

                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-white
                        px-5
                        py-3
                        shadow
                        text-slate-700
                        "

                    >

                        <ArrowLeft size={18}/>

                        Back

                    </Link>


                </div>









                {/* Form */}


                <form

                    onSubmit={onSubmit}

                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/80
                    p-8
                    shadow-xl
                    backdrop-blur-xl
                    space-y-7
                    "

                >



                    <div>


                        <label
                            className="
                            mb-3
                            block
                            font-semibold
                            text-slate-700
                            "
                        >

                            Subject

                        </label>


                        <input

                            name="subject"

                            value={formData.subject}

                            onChange={onChange}


                            className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-5
                            py-4
                            outline-none
                            focus:border-indigo-500
                            "

                        />

                    </div>









                    <div>


                        <label
                            className="
                            mb-3
                            block
                            font-semibold
                            text-slate-700
                            "
                        >

                            Description

                        </label>


                        <textarea

                            rows={8}

                            name="description"

                            value={formData.description}

                            onChange={onChange}


                            className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-5
                            py-4
                            outline-none
                            focus:border-indigo-500
                            "

                        />


                    </div>









                    <button

                        disabled={saving}

                        className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        px-8
                        py-4
                        font-semibold
                        text-white
                        shadow-lg
                        "

                    >

                        <Save size={18}/>


                        {

                            saving

                            ?

                            "Saving..."

                            :

                            "Save Changes"

                        }


                    </button>



                </form>



            </div>


        </div>

    );

}