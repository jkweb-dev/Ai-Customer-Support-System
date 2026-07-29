import mongoose from "mongoose";


const ticketSchema = new mongoose.Schema(

{

    customerId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Customer",

        required:true

    },


    subject:{

        type:String,

        required:true,

        trim:true

    },


    description:{

        type:String,

        required:true,

        trim:true

    },


    status:{

        type:String,

        enum:[

            "open",

            "in_progress",

            "resolved"

        ],

        default:"open"

    }


},

{

    timestamps:true

}

);



const Ticket =
mongoose.model(
    "Ticket",
    ticketSchema
);


export default Ticket;