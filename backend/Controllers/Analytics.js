import Conversation from "../Models/Conversation.js";
import Customer from "../Models/customer.js";
import Ticket from "../Models/Ticket.js";

export const getAnalytics = async(req,res)=>{

    try{

        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }




        const totalCustomers =

        await Customer.countDocuments();




        const totalConversations =

        await Conversation.countDocuments();




        const totalTickets =

        await Ticket.countDocuments();







        const openTickets =

        await Ticket.countDocuments({

            status:"open"

        });





        const inProgressTickets =

        await Ticket.countDocuments({

            status:"in_progress"

        });





        const resolvedTickets =

        await Ticket.countDocuments({

            status:"resolved"

        });








        const conversationTrend =

        await Conversation.aggregate([

            {

                $group:{

                    _id:{

                        $dateToString:{

                            format:"%Y-%m-%d",

                            date:"$createdAt"

                        }

                    },

                    total:{

                        $sum:1

                    }

                }

            },

            {

                $sort:{

                    _id:1

                }

            }

        ]);








        const customerGrowth =

        await Customer.aggregate([

            {

                $group:{

                    _id:{

                        $dateToString:{

                            format:"%Y-%m",

                            date:"$createdAt"

                        }

                    },

                    total:{

                        $sum:1

                    }

                }

            },

            {

                $sort:{

                    _id:1

                }

            }

        ]);








        const topCustomers =

        await Conversation.aggregate([

            {

                $group:{

                    _id:"$customerId",

                    totalConversations:{

                        $sum:1

                    }

                }

            },

            {

                $sort:{

                    totalConversations:-1

                }

            },

            {

                $limit:5

            },

            {

                $lookup:{

                    from:"customers",

                    localField:"_id",

                    foreignField:"_id",

                    as:"customer"

                }

            },

            {

                $unwind:"$customer"

            },

            {

                $project:{

                    _id:0,

                    name:"$customer.name",

                    email:"$customer.email",

                    totalConversations:1

                }

            }

        ]);








        return res.status(200).json({

            totalCustomers,

            totalConversations,

            totalTickets,

            ticketStatus:{

                open:openTickets,

                inProgress:inProgressTickets,

                resolved:resolvedTickets

            },

            conversationTrend,

            customerGrowth,

            topCustomers

        });


    }
    catch(error){

        console.log(error.message);

        return res.status(500).json({

            message:"Server Error"

        });

    }

};