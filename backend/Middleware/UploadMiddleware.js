import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



const storage = multer.diskStorage({


    destination:(req,file,cb)=>{


        cb(
            null,
            path.join(
                __dirname,
                "../uploads/knowledge"
            )
        );


    },


    filename:(req,file,cb)=>{


        const uniqueName =
            Date.now() +
            "-" +
            file.originalname
                .replace(/\s+/g,"-");


        cb(
            null,
            uniqueName
        );


    }


});




const fileFilter = (req,file,cb)=>{


    const allowedTypes = [

        "application/pdf",

        "text/plain"

    ];



    if(
        allowedTypes.includes(
            file.mimetype
        )
    ){

        cb(null,true);


    }else{


        cb(
            new Error(
                "Only PDF and TXT files are allowed"
            ),
            false
        );


    }


};




const upload = multer({

    storage,

    fileFilter,

    limits:{
        fileSize:
        10 * 1024 * 1024
    }

});



export default upload;