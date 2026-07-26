import fs from "fs/promises";


const parseFAQFile = async(filePath)=>{


    if(!filePath){

        throw new Error(
            "FAQ file path required"
        );

    }



    const text = await fs.readFile(
        filePath,
        "utf-8"
    );



    return text
        .trim()
        .replace(/\s+/g," ");


};



export default parseFAQFile;