"use client";


export default function SystemPrompt({

    value,

    onChange,

    onSave,

    saving

}){


    return (

        <div className="space-y-6">


            <div>

                <h2 className="
                text-2xl
                font-semibold
                text-slate-800
                ">
                    System Prompt
                </h2>


                <p className="
                mt-2
                text-slate-500
                ">
                    Define how your AI assistant should behave.
                </p>

            </div>





            <textarea

                value={value}

                onChange={(e)=>onChange(e.target.value)}

                rows={8}

                placeholder="
                Example:
                You are a helpful customer support assistant...
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
                    "Save Prompt"
                }

            </button>


        </div>

    );

}