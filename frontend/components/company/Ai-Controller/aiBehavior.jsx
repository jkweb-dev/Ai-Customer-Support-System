"use client";


export default function AIBehavior({

    behavior,

    onChange,

    onSave,

    saving

}){



    const updateField=(field,value)=>{


        onChange({

            ...behavior,

            [field]:value

        });


    };






    return (

        <div className="space-y-8">



            <div>

                <h2
                    className="
                    text-2xl
                    font-semibold
                    text-slate-800
                    "
                >

                    AI Behavior

                </h2>


                <p
                    className="
                    mt-2
                    text-slate-500
                    "
                >

                    Control how your AI assistant responds.

                </p>


            </div>








            {/* Response Style */}

            <div className="space-y-2">


                <label className="
                text-sm
                font-medium
                text-slate-700
                ">

                    Response Style

                </label>



                <select

                    value={
                        behavior.responseStyle
                    }

                    onChange={(e)=>
                    updateField(
                        "responseStyle",
                        e.target.value
                    )}

                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    outline-none
                    focus:border-indigo-500
                    "

                >

                    <option value="professional">
                        Professional
                    </option>


                    <option value="friendly">
                        Friendly
                    </option>


                    <option value="formal">
                        Formal
                    </option>


                    <option value="casual">
                        Casual
                    </option>


                </select>


            </div>









            {/* Response Length */}

            <div className="space-y-2">


                <label className="
                text-sm
                font-medium
                text-slate-700
                ">

                    Response Length

                </label>



                <select

                    value={
                        behavior.responseLength
                    }

                    onChange={(e)=>
                    updateField(
                        "responseLength",
                        e.target.value
                    )}

                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    "

                >


                    <option value="short">
                        Short
                    </option>


                    <option value="medium">
                        Medium
                    </option>


                    <option value="detailed">
                        Detailed
                    </option>


                </select>


            </div>









            {/* Creativity */}


            <div className="space-y-3">


                <div className="
                flex
                justify-between
                ">


                    <label className="
                    text-sm
                    font-medium
                    text-slate-700
                    ">

                        Creativity

                    </label>


                    <span className="
                    text-sm
                    text-indigo-600
                    font-medium
                    ">

                        {
                            behavior.creativity
                        }

                    </span>


                </div>



                <input

                    type="range"

                    min="0"

                    max="1"

                    step="0.1"

                    value={
                        behavior.creativity
                    }

                    onChange={(e)=>
                    updateField(
                        "creativity",
                        Number(e.target.value)
                    )}

                    className="
                    w-full
                    accent-indigo-600
                    "

                />


            </div>









            {/* Language */}

            <div className="space-y-2">


                <label className="
                text-sm
                font-medium
                text-slate-700
                ">

                    Language

                </label>



                <select

                    value={
                        behavior.language
                    }

                    onChange={(e)=>
                    updateField(
                        "language",
                        e.target.value
                    )}

                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    "

                >

                    <option>
                        English
                    </option>


                    <option>
                        Urdu
                    </option>


                    <option>
                        Auto Detect
                    </option>


                </select>


            </div>









            {/* Retrieved Chunks */}

            <div className="space-y-2">


                <label className="
                text-sm
                font-medium
                text-slate-700
                ">

                    Knowledge Chunks Used

                </label>



                <input

                    type="number"

                    min="1"

                    max="10"

                    value={
                        behavior.retrievedChunks
                    }

                    onChange={(e)=>
                    updateField(
                        "retrievedChunks",
                        Number(e.target.value)
                    )}

                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    "

                />



                <p className="
                text-xs
                text-slate-500
                ">

                    Number of relevant knowledge sections
                    provided to AI.

                </p>


            </div>









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
                    "Save Behavior"
                }


            </button>




        </div>

    );

}