"use client";


import {

    Trash2,

    X

} from "lucide-react";



export default function DeleteTicketModal({

    open,

    onClose,

    onConfirm,

    loading

}){


    if(!open)
        return null;



    return(

        <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            px-4
            backdrop-blur-sm
            "
        >


            <div
                className="
                w-full
                max-w-md
                rounded-3xl
                bg-white
                p-8
                shadow-2xl
                "
            >



                {/* Icon */}

                <div
                    className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-red-100
                    "
                >

                    <Trash2
                        className="
                        h-8
                        w-8
                        text-red-600
                        "
                    />

                </div>





                <h2
                    className="
                    mt-6
                    text-center
                    text-2xl
                    font-bold
                    text-slate-800
                    "
                >

                    Delete Ticket?

                </h2>




                <p
                    className="
                    mt-3
                    text-center
                    text-slate-500
                    "
                >

                    Are you sure you want to delete this ticket?
                    This action cannot be undone.

                </p>






                <div
                    className="
                    mt-8
                    flex
                    gap-4
                    "
                >


                    <button

                        onClick={onClose}

                        disabled={loading}

                        className="
                        flex-1
                        rounded-2xl
                        border
                        border-slate-200
                        py-3
                        font-semibold
                        text-slate-700
                        transition
                        hover:bg-slate-50
                        "

                    >

                        Cancel

                    </button>






                    <button

                        onClick={onConfirm}

                        disabled={loading}

                        className="
                        flex-1
                        rounded-2xl
                        bg-red-600
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-red-700
                        disabled:opacity-60
                        "

                    >

                        {

                            loading

                            ?

                            "Deleting..."

                            :

                            "Delete"

                        }

                    </button>



                </div>



            </div>


        </div>

    );

}