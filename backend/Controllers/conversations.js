import Conversation from "../Models/Conversation.js";



export const getConversations = async(req,res)=>{


    try{


        if(
            !req.user ||
            req.user.role !== "customer"
        ){

            return res.status(403).json({

                message:
                "Only customers can view conversations"

            });

        }




        const conversations =

        await Conversation.find({

            customerId:req.user.id

        })

        .select(

            "_id lastMessage updatedAt"

        )

        .sort({

            updatedAt:-1

        });





        return res.status(200).json({

            conversations

        });



    }
    catch(error){


        console.log(
            error.message
        );


        return res.status(500).json({

            message:
            "Server Error"

        });


    }


};

export const getConversation = async(req,res)=>{


    try{


        if(
            !req.user ||
            req.user.role !== "customer"
        ){

            return res.status(403).json({

                message:
                "Only customers can view conversations"

            });

        }





        const conversation =

        await Conversation.findOne({

            _id:req.params.id,

            customerId:req.user.id

        });





        if(!conversation){

            return res.status(404).json({

                message:
                "Conversation not found"

            });

        }





        return res.status(200).json({

            conversation

        });



    }
    catch(error){


        console.log(
            error.message
        );


        return res.status(500).json({

            message:
            "Server Error"

        });


    }


};