import fs from "fs/promises";


const parseTextFile = async(filePath)=>{


    if(!filePath){

        throw new Error(
            "Text file path required"
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


export default parseTextFile;