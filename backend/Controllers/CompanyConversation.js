import Conversation from "../Models/Conversation.js";
import mongoose from "mongoose";

export const getAllConversations = async(req,res)=>{


    try{


        // Role Check

        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }




        const conversations = await Conversation.find({})

        .populate(

            "customerId",

            "name email"

        )

        .sort({

            updatedAt:-1

        });






        return res.status(200).json({

            conversations

        });


    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server error"

        });


    }


};

export const getSingleConversation = async(req,res)=>{


    try{


        // Role Check

        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }




        if(

            !mongoose.Types.ObjectId.isValid(

                req.params.id

            )

        ){

            return res.status(404).json({

                message:"Conversation not found"

            });

        }





        const conversation = await Conversation.findById(

            req.params.id

        )

        .populate(

            "customerId",

            "name email"

        );






        if(!conversation){

            return res.status(404).json({

                message:"Conversation not found"

            });

        }






        return res.status(200).json({

            conversation

        });


    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server error"

        });


    }


};