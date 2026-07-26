import Knowledge from "../Models/Knowledge.js";
import path from "path";

import parseTextFile from "../Services/textParser.js";
import { parsePDF } from "../Services/pdfParser.js";
import parseFAQFile from "../Services/faqParser.js";
import chunkText from "../services/chunkService.js";
import generateEmbedding from "../services/embeddingService.js";
import deleteFile from "../Utils/deleteFile.js"



// CREATE KNOWLEDGE

export const createKnowledge = async(req,res)=>{


    try{


        const {
            title,
            type,
            category,
            tags,
            status
        } = req.body;



        if(!title || !type || !category || !tags){

            return res.status(400).json({

                message:
                "Title, type , tags , and category are required"

            });

        }



        if(!req.file){

            return res.status(400).json({

                message:
                "Knowledge file is required"

            });

        }



        let extractedText;



        // Select Parser

        if(type === "text"){


            extractedText =
            await parseTextFile(
                req.file.path
            );


        }
        else if(type === "faq"){


            extractedText =
            await parseFAQFile(
                req.file.path
            );


        }
        else if(type === "pdf"){


            extractedText =
            await parsePDF(
                req.file.path
            );


        }
        else{


            return res.status(400).json({

                message:
                "Invalid knowledge type"

            });


        }



        if(!extractedText){


            return res.status(400).json({

                message:
                "Unable to extract text"

            });


        }




        // Create Chunks

        const chunks =
        chunkText(
            extractedText
        );



        // Generate Embeddings

        const embeddedChunks =
        await Promise.all(

            chunks.map(
                async(chunk)=>{


                  const embedding =
await generateEmbedding(chunk);


// Validate embedding

if(
    !embedding ||
    !Array.isArray(embedding) ||
    embedding.length === 0
){

    throw new Error(
        "Failed to generate embedding."
    );

}


return {

    text: chunk,

    embedding

};


                }
            )

        );





        const knowledge =
        await Knowledge.create({


            companyId:
            req.user.id,


            title,


            type,


            category,


            tags:
            tags
            ? JSON.parse(tags)
            : [],



            status:
            status || "published",



            file:{


               url: path.posix.join(
        "uploads",
        "knowledge",
        req.file.filename
    ),

                name:
                req.file.originalname,


                size:
                req.file.size,


                mimeType:
                req.file.mimetype

            },


            chunks:
            embeddedChunks


        });





        return res.status(201).json({

            message:
            "Knowledge created successfully",


            knowledge

        });



    }catch(error){


        console.log(
            error.message
        );


        // remove uploaded file if failed

        if(req.file){

            await deleteFile(
                req.file.path
            );

        }



        return res.status(500).json({

            message:
            "Server error"

        });


    }


};





// GET ALL KNOWLEDGE


export const getKnowledge = async(req,res)=>{


    try{



        const knowledge =
        await Knowledge.find({

            companyId:
            req.user.id

        })
        .sort({
            createdAt:-1
        });



        return res.status(200).json({

            knowledge

        });



    }catch(error){


        return res.status(500).json({

            message:
            "Failed to fetch knowledge"

        });


    }


};





// GET SINGLE KNOWLEDGE


export const getSingleKnowledge = async(req,res)=>{


    try{


        const knowledge =
        await Knowledge.findOne({

            _id:req.params.id,

            companyId:req.user.id

        });



        if(!knowledge){


            return res.status(404).json({

                message:
                "Knowledge not found"

            });

        }



        return res.status(200).json({

            knowledge

        });



    }catch(error){


        return res.status(500).json({

            message:
            "Failed to fetch knowledge"

        });


    }


};





// DELETE KNOWLEDGE


export const deleteKnowledge = async(req,res)=>{


    try{


        const knowledge =
        await Knowledge.findOne({

            _id:req.params.id,

            companyId:req.user.id

        });



        if(!knowledge){


            return res.status(404).json({

                message:
                "Knowledge not found"

            });


        }




        await deleteFile(
            knowledge.file.url
        );



        await Knowledge.findByIdAndDelete(
            req.params.id
        );




        return res.status(200).json({

            message:
            "Knowledge deleted successfully"

        });



    }catch(error){


        return res.status(500).json({

            message:
            "Failed to delete knowledge"

        });


    }


};


export const updateKnowledge = async(req,res)=>{


    try{


        const {
            title,
            category,
            tags,
            type
        } = req.body;



        const knowledge =
        await Knowledge.findOne({

            _id:req.params.id,

            companyId:req.user.id

        });



        if(!knowledge){


            return res.status(404).json({

                message:
                "Knowledge not found"

            });


        }




        // Update normal fields

        if(title)
            knowledge.title = title;


        if(category)
            knowledge.category = category;


        if(type)
            knowledge.type = type;



        if(tags){

            knowledge.tags =
            JSON.parse(tags);

        }





        // If new file uploaded

        if(req.file){


            // Delete old file

            if(knowledge.file?.url){

                await deleteFile(
                    knowledge.file.url
                );

            }




            let extractedText;



            if(
                type === "pdf"
            ){

                extractedText =
                await parsePDF(
                    req.file.path
                );


            }
            else if(
                type === "text"
                ||
                type === "faq"
            ){

                extractedText =
                await parseTextFile(
                    req.file.path
                );


            }





            const chunks =
            chunkText(
                extractedText
            );




            const embeddedChunks =
            await Promise.all(

                chunks.map(
                    async(chunk)=>{

const embedding =
await generateEmbedding(chunk);


// Validate embedding

if(
    !embedding ||
    !Array.isArray(embedding) ||
    embedding.length === 0
){

    throw new Error(
        "Failed to generate embedding."
    );

}


return {

    text: chunk,

    embedding

};


                    }

                )

            );





            knowledge.file = {

                url:
                `uploads/knowledge/${req.file.filename}`,

                name:
                req.file.originalname,

                size:
                req.file.size,

                mimeType:
                req.file.mimetype

            };



            knowledge.chunks =
            embeddedChunks;


        }




        await knowledge.save();




        return res.status(200).json({

            message:
            "Knowledge updated successfully",

            knowledge

        });



    }
    catch(error){


        console.log(
            error.message
        );



        if(req.file){

            await deleteFile(
                req.file.path
            );

        }



        return res.status(500).json({

            message:
            "Failed to update knowledge"

        });


    }


};


export const getKnowledgeStats = async(req,res)=>{


    
    try{


        const companyId = req.user.id;



        const totalDocuments =
        await Knowledge.countDocuments({
            companyId
        });




        const pdfDocuments =
        await Knowledge.countDocuments({

            companyId,

            type:"pdf"

        });





        const textDocuments =
        await Knowledge.countDocuments({

            companyId,

            type:"text"

        });






        const faqDocuments =
        await Knowledge.countDocuments({

            companyId,

            type:"faq"

        });







        const chunksResult =
        await Knowledge.aggregate([


            {
                $match:{
                    companyId
                }
            },


            {
                $project:{
                    chunksCount:{
                        $size:"$chunks"
                    }
                }
            },


            {
                $group:{

                    _id:null,

                    totalChunks:{
                        $sum:"$chunksCount"
                    }

                }

            }


        ]);





        const totalChunks =
        chunksResult[0]?.totalChunks || 0;







        return res.status(200).json({

            stats:{

                totalDocuments,

                pdfDocuments,

                textDocuments,

                faqDocuments,

                totalChunks

            }

        });



    }
    catch(error){


        console.log(error.message);


        return res.status(500).json({

            message:
            "Failed to fetch knowledge statistics"

        });


    }


};