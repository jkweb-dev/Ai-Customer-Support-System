import AISettings from "../Models/Ai-Controller.js";

import Knowledge from "../Models/Knowledge.js";

import generateEmbedding from "../Services/embeddingService.js";

import { generateAnswer } from "../Services/chatService.js";

import { cosineSimilarity } from "../Services/cosinesimilarity.js";

// GET AI SETTINGS

export const getAISettings = async(req,res)=>{


    try{


        const companyId = req.user.id;



        let settings =
        await AISettings.findOne({
            companyId
        });



        // Create default settings if not exists

        if(!settings){


            settings =
            await AISettings.create({

                companyId

            });


        }



        return res.status(200).json({

            settings

        });



    }
    catch(error){


        console.log(
            "Get AI Settings Error:",
            error.message
        );


        return res.status(500).json({

            message:
            "Server error"

        });


    }


};








// UPDATE AI SETTINGS

export const updateAISettings = async(req,res)=>{


    try{


        const companyId =
        req.user.id;



        const {

            systemPrompt,

            suggestedPrompts,

            behavior,

            fallbackMessage

        } = req.body;





        const settings =
        await AISettings.findOneAndUpdate(


            {
                companyId
            },


            {


                systemPrompt,


                suggestedPrompts,


                behavior,


                fallbackMessage


            },


            {
                new:true,

                upsert:true

            }


        );





        return res.status(200).json({


            message:
            "AI settings updated successfully",


            settings


        });




    }
    catch(error){


        console.log(
            "Update AI Settings Error:",
            error.message
        );



        return res.status(500).json({

            message:
            "Server error"

        });


    }


};






export const testAI = async(req,res)=>{


    try{


        const {
            question
        } = req.body;




        if(!question){


            return res.status(400).json({

                message:
                "Question is required"

            });


        }






        const companyId =
        req.user.id;







        // Get AI settings


        const settings =
        await AISettings.findOne({

            companyId

        });





        if(!settings){


            return res.status(400).json({

                message:
                "AI settings not configured"

            });


        }








        // Question embedding


        const questionEmbedding =
        await generateEmbedding(
            question
        );









        // Get company knowledge


        const knowledge =
        await Knowledge.find({

            companyId

        });




         if(knowledge.length === 0){


            return res.status(400).json({

                message:
                "No Documents Uploaded"

            });


        }



        let matches=[];







        // Compare all chunks


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








        // Sort by similarity


        matches.sort(
            (a,b)=>
            b.score-a.score
        );









        const limit =
        settings.behavior
        ?.retrievedChunks || 5;






        const relevantChunks =
        matches.slice(
            0,
            limit
        );









        // No relevant knowledge


        if(
            relevantChunks.length===0 ||
            relevantChunks[0].score < 0.4
        ){


            return res.status(200).json({

                answer:
                settings.fallbackMessage,


                sources:[]

            });


        }









        // Build context


        const context =

        relevantChunks
        .map(
            item=>item.text
        )
        .join("\n\n");










        // Build dynamic prompt


        const prompt = `


${settings.systemPrompt}



Knowledge Context:

${context}




User Question:

${question}




Instructions:

Answer only from the knowledge context.

Do not create information.

If knowledge is insufficient,
say you don't know.



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









        return res.status(200).json({

            answer,


            sources:

            relevantChunks.map(item=>({

                file:item.source,

                score:
                Number(
                    item.score.toFixed(3)
                )

            }))


        });








    }
    catch(error){


        console.log(
            "AI Playground Error:",
            error.message
        );



        return res.status(500).json({

            message:
            error.message ||
            "AI generation failed"

        });


    }


};