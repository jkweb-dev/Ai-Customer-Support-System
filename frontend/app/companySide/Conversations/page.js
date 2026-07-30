"use client";

import {

    useEffect,

    useState

} from "react";

import api from "@/Services/api";

import handleError from "@/Utils/handleError";

import ProtectedRoute from "@/components/Auth/Protetected";

import ConversationsUI from "@/components/company/Conversations/conversationUi";



export default function CompanyConversationsPage(){


    const [conversations,setConversations]=useState([]);

    const [conversation,setConversation]=useState(null);

    const [conversationId,setConversationId]=useState(null);

    const [loading,setLoading]=useState(true);






    const fetchConversations = async()=>{


        try{


            const res = await api.get(

                "/company/conversations"

            );


            setConversations(

                res.data.conversations

            );



            if(

                res.data.conversations.length>0

            ){

                setConversationId(

                    res.data.conversations[0]._id

                );

            }


        }
        catch(error){

            handleError(error);

        }
        finally{

            setLoading(false);

        }


    };








    const fetchConversation = async(id)=>{


        if(!id) return;



        try{


            const res = await api.get(

                `/company/conversations/${id}`

            );


            setConversation(

                res.data.conversation

            );


        }
        catch(error){

            handleError(error);

        }


    };








    useEffect(()=>{

        fetchConversations();

    },[]);






    useEffect(()=>{

        fetchConversation(

            conversationId

        );

    },[conversationId]);







    return(

        <ProtectedRoute allowedRole="company">

            <ConversationsUI

                loading={loading}

                conversations={conversations}

                conversation={conversation}

                conversationId={conversationId}

                setConversationId={setConversationId}

            />

        </ProtectedRoute>

    );

}