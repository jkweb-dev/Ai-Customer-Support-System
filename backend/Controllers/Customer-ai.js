import AISettings from "../Models/Ai-Controller.js";

import Knowledge from "../Models/Knowledge.js";

import generateEmbedding from "../Services/embeddingService.js";

import { generateAnswer } from "../Services/chatService.js";

import { cosineSimilarity } from "../Services/cosinesimilarity.js";

import Conversation from "../Models/Conversation.js";


export const customerChat = async(req,res)=>{


    try{

        if (
    !req.user ||
    req.user.role !== "customer"
){

    return res.status(403).json({

        message:
        "Only customers can use AI chat"

    });

}

        const {
    question,
    conversationId
} = req.body;



        if(!question){


            return res.status(400).json({

                message:
                "Question is required"

            });

        }



        let conversation;

        if(conversationId){


    conversation =
    await Conversation.findOne({

        _id:conversationId,

        customerId:req.user.id

    });


}

if(!conversation){


    conversation =
    await Conversation.create({

        customerId:req.user.id,

        messages:[]

    });


}





        // Get AI settings

        // Since not multi tenant,
        // get first settings document


        const settings =

        await AISettings.findOne();





        if(!settings){


            return res.status(400).json({

                message:
                "AI configuration not found"

            });


        }



conversation.messages.push({

    role:"user",

    text:question

});


await conversation.save();




        // Create question embedding


        const questionEmbedding =

        await generateEmbedding(

            question

        );









        // Get ALL knowledge documents


        const knowledge =

        await Knowledge.find();










        let matches=[];








        knowledge.forEach((doc)=>{


            doc.chunks.forEach((chunk)=>{



                const score =

                cosineSimilarity(

                    questionEmbedding,

                    chunk.embedding

                );





                matches.push({

                    text:
                    chunk.text,


                    score,


                    source:
                    doc.file.name

                });



            });



        });










        // Sort best matches


        matches.sort(

            (a,b)=>

            b.score-a.score

        );








        const retrievedChunks =

        matches.slice(

            0,

            settings.behavior.retrievedChunks || 5

        );










        // If nothing relevant


        if(

            retrievedChunks.length===0 ||

            retrievedChunks[0].score < 0.4

        ){


            conversation.messages.push({

    role:"assistant",

    text:settings.fallbackMessage

});


conversation.lastMessage = settings.fallbackMessage;


await conversation.save();


            return res.status(200).json({

                answer:
                settings.fallbackMessage,

                sources:[]

            });



        }









        const context =

        retrievedChunks

        .map(

            item=>item.text

        )

        .join("\n\n");









        // Dynamic Prompt


        const prompt = `


${settings.systemPrompt}



Knowledge Context:


${context}



Customer Question:


${question}



Instructions:

Answer only from provided knowledge.

Do not create information.



Response Style:

${settings.behavior.responseStyle}



Response Length:

${settings.behavior.responseLength}



Language:

${settings.behavior.language}



`;










        const answer =

        await generateAnswer(

            prompt,

            settings.behavior.creativity

        );


        conversation.messages.push({

    role:"assistant",

    text:answer

});


conversation.lastMessage = answer;


await conversation.save();







        return res.status(200).json({

            conversationId:
    conversation._id,

            answer,


            sources:

            retrievedChunks.map(item=>({


                file:
                item.source,


                score:
                Number(
                    item.score.toFixed(3)
                )


            }))


        });








    }
    catch(error){



        console.log(

            "Customer AI Error:",

            error.message

        );




        return res.status(500).json({

            message:
            "AI response failed"

        });


    }


};