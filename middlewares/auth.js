const jwtToken = require("jsonwebtoken")


// auth
// Algo
// get token from either cookie or req body or req header
// verify token with jwt method


exports.auth = async (req, resp, next) => {
    try {

        // const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        // const token = req.cookies.token||req.header("Authorization").replace("Bearer ", "");
        
        const token = req.cookies.token;
        // console.log("Auth Middleware with token =>", token);

        if (!token) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Token is Missing"
            })
        }

        // Verifying the token received is proper or not

        try {
            const decode = jwtToken.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            // sending for authorization for next middleware

            // user:{
            //     id:_id,
            //     accounType:user.accountType,
            //     email:user.email
            // }

            // console.log("Auth Token Data =>", decode)
            req.user = decode;

        } catch (error) {

            // If token is not verifed return response
            return resp.status(200).json({
                status: "Failed",
                msg: "Token is Invalid !",
                tokenError: error,
            })

        }

        next();

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "Something went wrong while validating the token",
            errormsg: error.message
        })
    }
}

// isStudent

exports.isStudent = async (req, resp, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return resp.status(401).json({
                success: false,
                message: 'This is a protected route for Students only',
            });
        }
        next();
    }
    catch (error) {
        return resp.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}

// isInstructor

exports.isInstructor = async (req, resp, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return resp.status(401).json({
                success: false,
                message: 'This is a protected route for Instructors only',
            });
        }
        next();
    }
    catch (error) {
        return resp.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}

// isAdmin

exports.isAdmin = async (req, resp, next) => {
    try {
        if (req.user.accountType !== "Admin") {
            return resp.status(401).json({
                success: false,
                message: 'This is a protected route for Admin only !',
            });
        }
        next();
    }
    catch (error) {
        return resp.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again !'
        })
    }
}


// export const loggedInBefore=()=>{

// }