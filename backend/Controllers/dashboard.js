import Customer from "../Models/customer.js";
import Conversation from "../Models/Conversation.js";
import Ticket from "../Models/Ticket.js";


export const getDashboardData = async(req,res)=>{


    try{


        // Role Check

        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }



        const companyId = req.user.id;





        // Total Customers

        const totalCustomers =

        await Customer.countDocuments({});







        // Total Conversations

        const totalConversations =

        await Conversation.countDocuments({});








        // Total Tickets

        const totalTickets =

        await Ticket.countDocuments({});








        // Recent Conversations

        const recentConversations =

        await Conversation.find()

        .sort({

            createdAt:-1

        })

        .limit(5)

        .populate(

            "customerId",

            "name email"

        );








        // Recent Tickets

        const recentTickets =

        await Ticket.find()

        .sort({

            createdAt:-1

        })

        .limit(5)

        .populate(

            "customerId",

            "name email"

        );








        // AI Resolution Rate

        /*
        
        Logic:

        If conversation does not create ticket,
        AI solved it.

        Example:

        Total conversations = 100

        Tickets created = 20

        AI solved = 80

        Rate = 80%

        */


        let aiResolution = 0;



        if(totalConversations > 0){


            const aiSolved =

            totalConversations - totalTickets;



            aiResolution = Math.round(

                (

                    aiSolved /

                    totalConversations

                )

                *

                100

            );


        }







        return res.status(200).json({


            totalCustomers,


            totalConversations,


            totalTickets,


            aiResolution,


            recentConversations,


            recentTickets


        });



    }
    catch(error){


        console.log(error.message);



        return res.status(500).json({

            message:
            "Server error"

        });


    }


};