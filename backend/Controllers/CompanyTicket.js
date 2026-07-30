

import Ticket from "../Models/Ticket.js";


// Get All Tickets

export const getAllTickets = async(req,res)=>{


    try{


        // Role Check

        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }




        const tickets = await Ticket.find({})

        .populate(

            "customerId",

            "name email"

        )

        .sort({

            createdAt:-1

        });






        return res.status(200).json({

            tickets

        });



    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server error"

        });


    }


};

export const getSingleTicket = async(req,res)=>{


    try{


        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }




        const ticket = await Ticket.findById(

            req.params.id

        )

        .populate(

            "customerId",

            "name email"

        );






        if(!ticket){

            return res.status(404).json({

                message:"Ticket not found"

            });

        }




        return res.status(200).json({

            ticket

        });



    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server error"

        });


    }


};

export const updateTicketStatus = async(req,res)=>{


    try{


        if(req.user.role !== "company"){

            return res.status(403).json({

                message:"Access denied"

            });

        }





        const {

            status

        } = req.body;






        if(

            ![

                "open",

                "in_progress",

                "resolved"

            ]

            .includes(status)

        ){

            return res.status(400).json({

                message:"Invalid status"

            });

        }





        const ticket = await Ticket.findByIdAndUpdate(

            req.params.id,

            {

                status

            },

            {

                new:true

            }

        );






        if(!ticket){

            return res.status(404).json({

                message:"Ticket not found"

            });

        }







        return res.status(200).json({

            message:

            "Ticket status updated",


            ticket

        });





    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:"Server error"

        });


    }


};