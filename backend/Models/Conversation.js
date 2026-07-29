import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({

    role:{
        type:String,
        enum:[
            "user",
            "assistant"
        ],
        required:true
    },


    text:{
        type:String,
        required:true
    },


    createdAt:{
        type:Date,
        default:Date.now
    }

});





const conversationSchema = new mongoose.Schema({


    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    messages:[
        messageSchema
    ],



    lastMessage:{
        type:String
    }



},{
    timestamps:true
});


 const Conversation =  mongoose.model(
    "Conversation",
    conversationSchema
);


export default Conversation