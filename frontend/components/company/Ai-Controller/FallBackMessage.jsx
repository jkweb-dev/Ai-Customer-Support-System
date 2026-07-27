"use client";


export default function FallbackMessage({

    value,

    onChange,

    onSave,

    saving

}){


    return (

        <div className="space-y-6">


            <div>

                <h2
                    className="
                    text-2xl
                    font-semibold
                    text-slate-800
                    "
                >

                    Fallback Message

                </h2>


                <p
                    className="
                    mt-2
                    text-slate-500
                    "
                >

                    Message shown when AI cannot find a relevant answer.

                </p>


            </div>





            <textarea

                rows={6}

                value={value}

                onChange={(e)=>
                    onChange(e.target.value)
                }

                placeholder="
                Example:
                Sorry, I couldn't find information about this.
                Please contact support.
                "

                className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                text-slate-700
                outline-none
                focus:border-indigo-500
                "

            />






            <button

                onClick={onSave}

                disabled={saving}

                className="
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                text-white
                hover:bg-indigo-700
                disabled:opacity-50
                "

            >

                {
                    saving
                    ?
                    "Saving..."
                    :
                    "Save Message"
                }


            </button>



        </div>

    );

}