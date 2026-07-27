import { GoogleGenAI } from "@google/genai";



export const generateAnswer = async(
    prompt,
    creativity
)=>{


    try{


        const ai = new GoogleGenAI({

            apiKey:
            process.env.GEMINI_API_KEY

        });





        const response =
        await ai.models.generateContent({

            model:
            "gemini-2.5-flash",


            contents:
            prompt,


            config:{

                temperature:
                creativity

            }

        });





        if(
            !response ||
            !response.text
        ){

            throw new Error(
                "Empty AI response"
            );

        }



        return response.text;



    }
    catch(error){


        console.log(
            "Gemini Error:",
            error.message
        );


        throw error;


    }


};