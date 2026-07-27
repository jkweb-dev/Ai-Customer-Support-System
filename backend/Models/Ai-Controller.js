import mongoose from "mongoose";


const aiSettingsSchema = new mongoose.Schema(

    {

        companyId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Company",

            required: true,

            unique: true,

        },


        systemPrompt: {

            type: String,

            default: "",

            trim: true,

        },


        suggestedPrompts: [

            {

                type: String,

                trim: true,

            }

        ],



        behavior: {


            responseStyle: {

                type: String,

                enum: [
                    "professional",
                    "friendly",
                    "formal",
                    "casual"
                ],

                default: "professional",

            },



            responseLength: {

                type: String,

                enum: [
                    "short",
                    "medium",
                    "detailed"
                ],

                default: "medium",

            },



            creativity: {

                type: Number,

                default: 0.3,

                min: 0,

                max: 1,

            },



            language: {

                type: String,

                default: "English",

            },



            retrievedChunks: {

                type: Number,

                default: 5,

                min: 1,

                max: 10,

            }


        },



        fallbackMessage: {

            type: String,

            default:
            "I'm sorry, I couldn't find any relevant information.",

            trim: true,

        },


    },

    {

        timestamps:true

    }

);



const AISettings =
mongoose.model(
    "AISettings",
    aiSettingsSchema
);


export default AISettings;