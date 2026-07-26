"use client";

import { X, Trash2 } from "lucide-react";


export default function DeleteModal({

    knowledge,

    onClose,

    onConfirm,

    loading

}) {


    if(!knowledge)
        return null;



    return (

        <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/30
            px-4
            "
        >


            <div
                className="
                w-full
                max-w-md
                rounded-3xl
                bg-white
                p-6
                shadow-xl
                "
            >


                <div
                    className="
                    flex
                    items-start
                    justify-between
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
                        bg-red-50
                        "
                    >

                        <Trash2
                            className="
                            h-6
                            w-6
                            text-red-500
                            "
                        />

                    </div>


                    <button
                        onClick={onClose}
                    >

                        <X
                            className="
                            h-5
                            w-5
                            text-slate-400
                            "
                        />

                    </button>


                </div>




                <h2
                    className="
                    mt-6
                    text-xl
                    font-semibold
                    text-slate-800
                    "
                >

                    Delete Knowledge?

                </h2>



                <p
                    className="
                    mt-2
                    text-sm
                    text-slate-500
                    "
                >

                    Are you sure you want to delete
                    <span className="font-semibold text-slate-700">
                        {" "}
                        {knowledge.title}
                    </span>
                    ?
                    This action cannot be undone.

                </p>





                <div
                    className="
                    mt-6
                    flex
                    gap-3
                    "
                >

                    <button

                        onClick={onClose}

                        className="
                        flex-1
                        rounded-xl
                        bg-slate-100
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        "

                    >

                        Cancel

                    </button>





                    <button

                        onClick={onConfirm}

                        disabled={loading}

                        className="
                        flex-1
                        rounded-xl
                        bg-red-500
                        py-3
                        text-sm
                        font-medium
                        text-white
                        disabled:opacity-50
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