"use client";


export default function StatCard({

    title,

    value,

    icon:Icon,

    color

}){



    const colors = {

        indigo:
        "from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600",

        purple:
        "from-purple-500 to-purple-600 bg-purple-100 text-purple-600",

        pink:
        "from-pink-500 to-pink-600 bg-pink-100 text-pink-600",

        emerald:
        "from-emerald-500 to-emerald-600 bg-emerald-100 text-emerald-600"

    };



    return(

        <div
            className="
            group
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-6
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            "
        >


            <div
                className="
                flex
                items-center
                justify-between
                "
            >



                <div
                    className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${colors[color].split(" ").slice(2).join(" ")}
                    `}
                >

                    <Icon
                        size={28}
                    />

                </div>



                <div
                    className="
                    text-right
                    "
                >

                    <h3
                        className="
                        text-3xl
                        font-bold
                        text-slate-800
                        "
                    >

                        {value}

                    </h3>


                    <p
                        className="
                        mt-1
                        text-sm
                        text-slate-500
                        "
                    >

                        {title}

                    </p>


                </div>


            </div>





            <div
                className={`
                mt-6
                h-1
                w-0
                rounded-full
                bg-gradient-to-r
                transition-all
                duration-500
                group-hover:w-full
                ${colors[color].split(" ").slice(0,2).join(" ")}
                `}
            />


        </div>

    );

}