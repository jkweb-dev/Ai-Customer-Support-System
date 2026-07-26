import fs from "fs/promises";
import path from "path";


const deleteFile = async (filePath) => {

    try {

        let absolutePath;


        // If already absolute path
        if (path.isAbsolute(filePath)) {

            absolutePath = filePath;

        } 
        // If relative path
        else {

            absolutePath = path.join(
                process.cwd(),
                filePath
            );

        }


        await fs.unlink(absolutePath);


    } catch(error) {

        console.log(
            "File Delete Error:",
            error.message
        );

    }

};


export default deleteFile;