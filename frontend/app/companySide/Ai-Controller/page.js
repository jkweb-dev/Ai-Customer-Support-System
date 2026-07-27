"use client";


import { 
    useEffect,
    useState
} from "react";


import {
    Sparkles,
    Bot,
    MessageSquare,
    Settings2,
    ShieldCheck,
    SlidersHorizontal
} from "lucide-react";

import AIPlayground from "@/components/company/Ai-Controller/AiPlayground";

import SystemPrompt from "@/components/company/Ai-Controller/systemPrompt";

import SuggestedPrompts from "@/components/company/Ai-Controller/suggestedPrompt";

import AIBehavior from "@/components/company/Ai-Controller/aiBehavior";

import FallbackMessage from "@/components/company/Ai-Controller/FallBackMessage";


import api from "@/Services/api";
import handleError from "@/Utils/handleError";



export default function AIControlCenterPage(){


    const [activeTab,setActiveTab]=useState(
        "system"
    );


    const [settings,setSettings]=useState(null);

    const [saving,setSaving]=useState(false);


    const [loading,setLoading]=useState(true);




    const tabs=[

        {
            id:"playground",
            label:"AI Playground",
            icon:MessageSquare
        },


        {
            id:"system",
            label:"System Prompt",
            icon:Bot
        },


        {
            id:"suggested",
            label:"Suggested Prompts",
            icon:Sparkles
        },


        {
            id:"behavior",
            label:"AI Behavior",
            icon:SlidersHorizontal
        },


        {
            id:"fallback",
            label:"Fallback",
            icon:ShieldCheck
        }

    ];






    useEffect(()=>{


        const fetchSettings=async()=>{


            try{


                const res =
                await api.get(
                    "/Ai-settings/settings"
                );


                setSettings(
                    res.data.settings
                );


            }
            catch(error){

                handleError(error);

            }
            finally{

                setLoading(false);

            }


        };



        fetchSettings();



    },[]);



const updateSettings = (field,value)=>{


    setSettings(prev=>({

        ...prev,

        [field]:value

    }));

};

const updateBehavior=(behavior)=>{


    setSettings(prev=>({

        ...prev,

        behavior

    }));

};

const saveSettings = async()=>{


    try{


        setSaving(true);


        await api.put(

            "/Ai-settings/settings",

            settings

        );


        alert(
            "AI settings updated"
        );


    }
    catch(error){


        handleError(error);


    }
    finally{


        setSaving(false);


    }


};



    if(loading)

    return (

        <div className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-50
        via-indigo-50
        to-purple-50
        ">

            <p className="text-slate-500">

                Loading AI Control Center...

            </p>

        </div>

    );






    return (

        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-slate-50
            via-indigo-50/40
            to-purple-50
            px-4
            py-8
            md:px-8
            "
        >



            <div
                className="
                mx-auto
                max-w-7xl
                "
            >






                {/* Header Card */}

                <div
                    className="
                    mb-8
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/60
                    bg-white/70
                    p-6
                    shadow-xl
                    backdrop-blur-xl
                    md:p-10
                    "
                >



                    <div className="
                    flex
                    items-start
                    gap-4
                    ">


                        <div
                            className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-indigo-500
                            to-purple-600
                            shadow-lg
                            "
                        >

                            <Sparkles
                                className="
                                h-7
                                w-7
                                text-white
                                "
                            />

                        </div>



                        <div>


                            <h1
                                className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-slate-800
                                md:text-4xl
                                "
                            >

                                AI Control Center

                            </h1>



                            <p
                                className="
                                mt-2
                                max-w-2xl
                                text-slate-500
                                "
                            >

                                Configure, test, and control how your AI assistant
                                responds to customers.

                            </p>


                        </div>


                    </div>


                </div>









                {/* Main Layout */}


                <div
                    className="
                    rounded-3xl
                    border
                    border-white/60
                    bg-white/70
                    p-4
                    shadow-xl
                    backdrop-blur-xl
                    md:p-6
                    "
                >






                    {/* Tabs */}


                    <div
                        className="
                        flex
                        gap-3
                        overflow-x-auto
                        pb-3
                        scrollbar-hide
                        "
                    >


                    {
                        tabs.map((tab)=>{


                            const Icon =
                            tab.icon;



                            return (

                            <button

                                key={tab.id}

                                onClick={()=>
                                    setActiveTab(tab.id)
                                }

className={`
    group
    flex
    min-w-fit
    items-center
    gap-2
    rounded-2xl
    px-5
    py-3
    text-sm
    font-medium
    transition-all

    ${
        activeTab === tab.id
        ? 
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
        :
        "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
    }
`}
                            >

                                <Icon
                                    className="
                                    h-4
                                    w-4
                                    "
                                />


                                {tab.label}


                            </button>

                            )

                        })
                    }


                    </div>









                    {/* Content */}


                    <div
                        className="
                        mt-6
                        min-h-[450px]
                        rounded-3xl
                        border
                        border-slate-100
                        bg-white
                        p-6
                        shadow-inner
                        md:p-10
                        "
                    >


                        {
activeTab==="playground" && (

    <AIPlayground/>

)
}





{
activeTab==="system" && (

<SystemPrompt

    value={
        settings.systemPrompt
    }


    onChange={(value)=>
        updateSettings(
            "systemPrompt",
            value
        )
    }


    onSave={saveSettings}


    saving={saving}


/>

)
}






{
activeTab==="suggested" && (

<SuggestedPrompts


    prompts={
        settings.suggestedPrompts
    }


    setPrompts={(value)=>

        updateSettings(
            "suggestedPrompts",
            value
        )

    }


    onSave={saveSettings}


    saving={saving}


/>

)
}







{
activeTab==="behavior" && (

<AIBehavior


    behavior={
        settings.behavior
    }


    onChange={updateBehavior}


    onSave={saveSettings}


    saving={saving}


/>

)
}







{
activeTab==="fallback" && (

<FallbackMessage


    value={
        settings.fallbackMessage
    }


    onChange={(value)=>

        updateSettings(
            "fallbackMessage",
            value
        )

    }


    onSave={saveSettings}


    saving={saving}


/>

)
}

                    </div>


                </div>


            </div>


        </div>

    );

                                }








function Placeholder({

    title,

    text

}){


    return (

        <div
            className="
            flex
            h-full
            flex-col
            items-center
            justify-center
            text-center
            "
        >

            <div
                className="
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-indigo-50
                "
            >

                <Settings2
                    className="
                    h-8
                    w-8
                    text-indigo-600
                    "
                />

            </div>


            <h2
                className="
                text-2xl
                font-semibold
                text-slate-800
                "
            >

                {title}

            </h2>


            <p
                className="
                mt-2
                max-w-md
                text-slate-500
                "
            >

                {text}

            </p>


        </div>

    );

}