"use client";

import {
    FileText,
    CalendarDays,
    BrainCircuit,
    Tag,
    FolderOpen
} from "lucide-react";


export default function KnowledgeDetails({
    knowledge
}) {


    return (

        <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">


            <div className="mx-auto max-w-5xl">


                <div
                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    md:p-10
                    "
                >


                    {/* Header */}

                    <div className="flex items-start gap-4">


                        <div
                            className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-50
                            "
                        >

                            <FileText
                                className="h-7 w-7 text-indigo-600"
                            />

                        </div>



                        <div>

                            <h1
                                className="
                                text-3xl
                                font-semibold
                                text-slate-800
                                "
                            >
                                {knowledge.title}
                            </h1>


                            <p className="mt-1 text-slate-500 uppercase">
                                {knowledge.type}
                            </p>

                        </div>


                    </div>




                    {/* Information */}


                    <div
                        className="
                        mt-8
                        grid
                        gap-5
                        md:grid-cols-2
                        "
                    >


 <InfoCard
    icon={FolderOpen}
    title="Category"
    value={knowledge.category || "No category"}
/>


<InfoCard
    icon={BrainCircuit}
    title="AI Chunks"
    value={knowledge.chunks?.length || 0}
/>


<InfoCard
    icon={FileText}
    title="File"
    value={knowledge.file?.name || "No file"}
/>


<InfoCard
    icon={CalendarDays}
    title="Created"
    value={
        new Date(
            knowledge.createdAt
        ).toLocaleDateString()
    }
/>


                    </div>





                    {/* Tags */}

                    <div className="mt-8">


                        <div className="mb-3 flex items-center gap-2">

                            <Tag className="h-5 w-5 text-slate-500"/>

                            <h2 className="font-semibold text-slate-700">
                                Tags
                            </h2>

                        </div>



                        <div className="flex flex-wrap gap-2">

                            {
                                knowledge.tags?.map((tag,index)=>(

                                    <span
                                        key={index}
                                        className="
                                        rounded-full
                                        bg-indigo-50
                                        px-4
                                        py-2
                                        text-sm
                                        text-indigo-600
                                        "
                                    >

                                        #{tag}

                                    </span>

                                ))
                            }


                        </div>


                    </div>







                    {/* Content */}

                    <div className="mt-8">


                        <h2
                            className="
                            mb-3
                            font-semibold
                            text-slate-700
                            "
                        >
                            Extracted Content
                        </h2>


                        <div
                            className="
                            max-h-[400px]
                            overflow-y-auto
                            rounded-2xl
                            bg-slate-50
                            p-5
                            text-sm
                            leading-7
                            text-slate-600
                            "
                        >

                            {
                                knowledge.chunks?.map(
                                    (chunk,index)=>(

                                        <p
                                            key={index}
                                            className="mb-4"
                                        >

                                            {chunk.text}

                                        </p>

                                    )
                                )
                            }

                        </div>


                    </div>



                </div>


            </div>


        </div>

    );

}





function InfoCard({
    icon,
    title,
    value
}){

    const Icon = icon;


    return (

        <div
            className="
            rounded-2xl
            bg-slate-50
            p-5
            "
        >

            <div className="flex items-center gap-3">

                <Icon
                    className="
                    h-5
                    w-5
                    text-indigo-500
                    "
                />


                <p className="text-sm text-slate-500">
                    {title}
                </p>

            </div>



            <p
                className="
                mt-3
                font-medium
                text-slate-800
                "
            >
                {value}
            </p>


        </div>

    );

}