import Ticket from "../Models/Ticket.js";


export const createTicket = async(req,res)=>{


    try{

        if(req.user.role !== "customer"){

    return res.status(403).json({

        message:"Access denied"

    });

}


        const {
            subject,
            description
        } = req.body;



        if(!subject || !description){

            return res.status(400).json({

                message:
                "Subject and description are required"

            });

        }



        const ticket =
        await Ticket.create({

            customerId:req.user.id,

            subject,

            description

        });



        return res.status(201).json({

            message:
            "Ticket created successfully",

            ticket

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


export const getMyTickets = async(req,res)=>{


    try{

        if(req.user.role !== "customer"){

    return res.status(403).json({

        message:"Access denied"

    });

}


        const tickets =
        await Ticket.find({

            customerId:req.user.id

        })
        .sort({

            createdAt:-1

        });



        return res.status(200).json({

            tickets

        });


    }
    catch(error){


        return res.status(500).json({

            message:
            "Server error"

        });


    }


};


export const getSingleTicket = async(req,res)=>{


    try{

        if(req.user.role !== "customer"){

    return res.status(403).json({

        message:"Access denied"

    });

}


        const ticket =
        await Ticket.findOne({

            _id:req.params.id,

            customerId:req.user.id

        });



        if(!ticket){

            return res.status(404).json({

                message:
                "Ticket not found"

            });

        }



        return res.status(200).json({

            ticket

        });



    }
    catch(error){

        return res.status(500).json({

            message:
            "Server error"

        });

    }


};

export const updateTicket = async(req,res)=>{


    try{

        if(req.user.role !== "customer"){

    return res.status(403).json({

        message:"Access denied"

    });

}




        const {
            subject,
            description
        } = req.body;



        
        if(!subject || !description){

            return res.status(400).json({

                message:
                "Subject and description are required"

            });

        }

        const ticket =
        await Ticket.findOneAndUpdate(

        {

            _id:req.params.id,

            customerId:req.user.id

        },

        {

            subject,

            description

        },

        {

            new:true

        }

        );



        if(!ticket){

            return res.status(404).json({

                message:
                "Ticket not found"

            });

        }



        return res.status(200).json({

            message:
            "Ticket updated",

            ticket

        });



    }
    catch(error){

        return res.status(500).json({

            message:
            "Server error"

        });

    }


};


export const deleteTicket = async(req,res)=>{


    try{

        if(req.user.role !== "customer"){

    return res.status(403).json({

        message:"Access denied"

    });

}


        const ticket =
        await Ticket.findOneAndDelete({

            _id:req.params.id,

            customerId:req.user.id

        });



        if(!ticket){

            return res.status(404).json({

                message:
                "Ticket not found"

            });

        }



        return res.status(200).json({

            message:
            "Ticket deleted"

        });



    }
    catch(error){

        return res.status(500).json({

            message:
            "Server error"

        });

    }


};