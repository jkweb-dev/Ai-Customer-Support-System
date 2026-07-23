"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/Context/AuthProvider";



const ProtectedRoute = ({

    children,

    allowedRole

}) => {

    const router = useRouter();

    const {

        loading,

        isAuthenticated,

        role

    } = useAuth();



    useEffect(() => {

        if (loading) return;



        if (!isAuthenticated) {

            router.replace("/");

            return;

        }



        if (

            allowedRole &&

            role !== allowedRole

        ) {

            router.replace("/");

        }

    }, [

        loading,

        isAuthenticated,

        role,

        allowedRole,

        router

    ]);



    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                Loading...

            </div>

        );

    }



    if (!isAuthenticated) {

        return null;

    }



    if (

        allowedRole &&

        role !== allowedRole

    ) {

        return null;

    }



    return children;

};

export default ProtectedRoute;