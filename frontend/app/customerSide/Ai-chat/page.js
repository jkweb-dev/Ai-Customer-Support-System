"use client";


import ProtectedRoute from "@/components/Auth/Protetected";

import AIChat from "@/components/customer/Ai chat/Ai_Chat_ui";



export default function ChatPage(){


    return (

        <ProtectedRoute allowedRole="customer">


            <AIChat/>


        </ProtectedRoute>

    );

}