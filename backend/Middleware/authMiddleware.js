import jwt from "jsonwebtoken";
import Customer from "../Models/customer.js";
import Company from "../Models/company.js";


const verifyToken = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({
                message: "Unauthorized. Token missing."
            });

        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


         let userExists;


        if (decoded.role === "customer") {

            userExists = await Customer.findById(decoded.id);

        }


        if (decoded.role === "company") {

            userExists = await Company.findById(decoded.id);

        }


        if (!userExists) {

            return res.status(401).json({
                message: "User does not exist."
            });

        }
        

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token."
        });

    }

};

export default verifyToken;