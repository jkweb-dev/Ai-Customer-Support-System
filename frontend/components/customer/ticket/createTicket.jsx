"use client";

import {

    Ticket,

    MessageSquare,

    ArrowLeft,

    Send

} from "lucide-react";

import Link from "next/link";



export default function CreateTicketUI({

    formData,

    onChange,

    onSubmit,

    loading

}){

    return(

        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            py-10
            px-4
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
                    flex-wrap
                    items-center
                    justify-between
                    gap-4
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
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-3xl
                            bg-gradient-to-br
                            from-indigo-500
                            to-purple-600
                            shadow-lg
                            "
                        >

                            <Ticket
                                className="
                                h-8
                                w-8
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

                                Create Support Ticket

                            </h1>

                            <p
                                className="
                                mt-2
                                text-slate-500
                                "
                            >

                                Describe your issue and our support team will review it.

                            </p>

                        </div>

                    </div>



                    <Link

                        href="/customerSide/my-tickets"

                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-3
                        font-medium
                        text-slate-700
                        shadow-sm
                        transition
                        hover:bg-slate-50
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
                    backdrop-blur-xl
                    p-8
                    shadow-xl
                    space-y-8
                    "

                >

                    {/* Subject */}

                    <div>

                        <label
                            className="
                            mb-3
                            block
                            font-semibold
                            text-slate-700
                            "
                        >

                            Ticket Subject

                        </label>

                        <input

                            type="text"

                            name="subject"

                            value={formData.subject}

                            onChange={onChange}

                            placeholder="Enter ticket subject"

                            className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-5
                            py-4
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:bg-white
                            "

                        />

                    </div>





                    {/* Description */}

                    <div>

                        <label
                            className="
                            mb-3
                            flex
                            items-center
                            gap-2
                            font-semibold
                            text-slate-700
                            "
                        >

                            <MessageSquare size={18}/>

                            Describe Your Issue

                        </label>

                        <textarea

                            rows={8}

                            name="description"

                            value={formData.description}

                            onChange={onChange}

                            placeholder="Explain your issue in detail..."

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
                            transition
                            focus:border-indigo-500
                            focus:bg-white
                            "

                        />

                    </div>





                    {/* Submit */}

                    <div
                        className="
                        flex
                        justify-end
                        "
                    >

                        <button

                            type="submit"

                            disabled={loading}

                            className="
                            flex
                            items-center
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
                            transition
                            hover:opacity-90
                            disabled:opacity-60
                            "

                        >

                            <Send size={18}/>

                            {

                                loading

                                ?

                                "Creating..."

                                :

                                "Create Ticket"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}