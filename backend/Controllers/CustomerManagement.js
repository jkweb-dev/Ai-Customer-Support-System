import mongoose from "mongoose";

import Customer from "../Models/customer.js";
import Conversation from "../Models/Conversation.js";
import Ticket from "../Models/Ticket.js";



export const getAllCustomers = async (req, res) => {

    try {

        if (req.user.role !== "company") {

            return res.status(403).json({

                message: "Access denied"

            });

        }



        const customers = await Customer.find({})

            .select("name email createdAt")

            .sort({

                createdAt: -1

            });



        const conversationCounts = await Conversation.aggregate([

            {

                $group: {

                    _id: "$customerId",

                    totalConversations: {

                        $sum: 1

                    }

                }

            }

        ]);



        const ticketCounts = await Ticket.aggregate([

            {

                $group: {

                    _id: "$customerId",

                    totalTickets: {

                        $sum: 1

                    }

                }

            }

        ]);



        const conversationMap = {};

        conversationCounts.forEach(item => {

            conversationMap[item._id.toString()] = item.totalConversations;

        });



        const ticketMap = {};

        ticketCounts.forEach(item => {

            ticketMap[item._id.toString()] = item.totalTickets;

        });



        const data = customers.map(customer => ({

            ...customer.toObject(),

            totalConversations:

                conversationMap[customer._id.toString()] || 0,

            totalTickets:

                ticketMap[customer._id.toString()] || 0

        }));



        return res.status(200).json({

            customers: data

        });

    }

    catch (error) {

        console.log(error.message);

        return res.status(500).json({

            message: "Server Error"

        });

    }

};






export const getSingleCustomer = async(req,res)=>{


    try{


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

                message:"Customer not found"

            });

        }






        const customer = await Customer.findById(

            req.params.id

        )

        .select(

            "name email createdAt"

        );






        if(!customer){

            return res.status(404).json({

                message:"Customer not found"

            });

        }






        const totalConversations =

        await Conversation.countDocuments({

            customerId:customer._id

        });






        const totalTickets =

        await Ticket.countDocuments({

            customerId:customer._id

        });







        return res.status(200).json({

            customer:{

                ...customer.toObject(),

                totalConversations,

                totalTickets

            }

        });


    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server Error"

        });


    }


};