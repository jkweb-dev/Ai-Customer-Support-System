import Company from "../Models/company.js";
import Customer from "../Models/customer.js"

const getCurrentUser = async (req, res) => {

    try {

        if (req.user.role === "company") {

            const company = await Company.findById(req.user.id)
                .select("-password");

            if (!company) {

                return res.status(404).json({
                    message: "Company not found"
                });

            }

            return res.status(200).json({

                authenticated: true,

                role: "company",

                user: company

            });

        }



        if (req.user.role === "customer") {

            const customer = await Customer.findById(req.user.id)
                .select("-password");

            if (!customer) {

                return res.status(404).json({
                    message: "Customer not found"
                });

            }

            return res.status(200).json({

                authenticated: true,

                role: "customer",

                user: customer

            });

        }



        return res.status(401).json({

            message: "Unauthorized"

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

};


export {
    getCurrentUser
};