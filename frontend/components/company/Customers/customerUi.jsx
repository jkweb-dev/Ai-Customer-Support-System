"use client";


import {

    useMemo,

    useState

} from "react";


import {

    Users,

    Search,

    UserRound

} from "lucide-react";


import CustomerCard from "./customerCard";




export default function CustomersUI({

    customers,

    loading

}){



    const [search,setSearch]=useState("");







    const filteredCustomers = useMemo(()=>{


        return customers.filter(customer=>{


            return customer.name

            .toLowerCase()

            .includes(

                search.toLowerCase()

            )

            ||

            customer.email

            .toLowerCase()

            .includes(

                search.toLowerCase()

            );



        });


    },[

        customers,

        search

    ]);







    return(


        <div
            className="
            min-h-screen
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-purple-50
            px-5
            py-10
            "
        >



        <div
            className="
            mx-auto
            max-w-7xl
            "
        >







        {/* Header */}


        <div
            className="
            mb-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
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
                    from-indigo-600
                    to-purple-600
                    shadow-xl
                    "
                >

                    <Users
                        className="
                        text-white
                        "
                    />

                </div>





                <div>


                    <h1
                        className="
                        text-4xl
                        font-bold
                        text-slate-800
                        "
                    >

                        Customers

                    </h1>



                    <p
                        className="
                        mt-2
                        text-slate-500
                        "
                    >

                        Manage your AI support customers.

                    </p>


                </div>



            </div>




        </div>









        {/* Search */}


        <div
            className="
            mb-8
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-5
            shadow-lg
            backdrop-blur-xl
            "
        >



            <div
                className="
                relative
                "
            >


                <Search

                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    "

                />



                <input

                    value={search}

                    onChange={

                        e=>

                        setSearch(

                            e.target.value

                        )

                    }


                    placeholder="Search customers..."

                    className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-4
                    pl-12
                    pr-5
                    outline-none
                    focus:border-indigo-500
                    "

                />



            </div>



        </div>









        {

            loading &&

            <div
                className="
                py-20
                text-center
                text-slate-500
                "
            >

                Loading customers...

            </div>

        }







        {

            !loading &&

            filteredCustomers.length===0 &&

            <div
                className="
                rounded-3xl
                bg-white
                p-16
                text-center
                shadow-xl
                "
            >

                <UserRound
                    className="
                    mx-auto
                    h-16
                    w-16
                    text-indigo-300
                    "
                />

                <h2
                    className="
                    mt-5
                    text-2xl
                    font-bold
                    text-slate-700
                    "
                >

                    No Customers Found

                </h2>


            </div>

        }









        {

            !loading &&

            filteredCustomers.length>0 &&


            <div
                className="
                grid
                gap-7
                md:grid-cols-2
                xl:grid-cols-3
                "
            >


            {

                filteredCustomers.map(customer=>(


                    <CustomerCard

                        key={customer._id}

                        customer={customer}

                    />


                ))

            }


            </div>


        }






        </div>


        </div>


    );

}