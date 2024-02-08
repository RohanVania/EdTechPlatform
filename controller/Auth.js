const User = require("../model/User")
const OTP = require("../model/OTP")
const Profile = require("../model/Profile");
const mailSender = require("../utils/mailSender")

const { passwordUpdated } = require("../mail/templates/passwordUpdate")

const otpGenerator = require('otp-generator')
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");

//Send OTP

// Algo
// we fetch data: email as we have send otp to email
// we validate user exists or not
// we check if otp is unique
// we save it in otp database which automatically gets expired

exports.sendOtp = async (req, resp) => {
    try {
        // fetch data
        const { email } = req.body

        // validate user exist or not
        const checkUserPresent = await User.findOne({ email });

        // If user already exits, then return a response
        if (checkUserPresent) {
            //* Status code we change so we can handle toast properly
            return resp.status(417).json({
                status: "Failed",
                msg: "User already registered",
            })
        }

        // Generate Otp
        let otp = otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        });
        console.log("OTP generated: ", otp);


        // Check if otp is unique
        let result = await OTP.findOne({ otp: otp });
        console.log("Result is Generate OTP Func");
        console.log("OTP", otp);
        console.log("Result", result);

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                specialChars: false,
            })
            result = await OTP.findOne({ otp: otp });
        }
        
        
        // Before this we call the pre save hook in Otp model to send email with otp

        // Save it Db
        const otpPayload = { email, otp }


        const otpBody = await OTP.create(otpPayload);
        console.log("OTP Body:", otpBody);

        // return resp successfully
        return resp.status(206).json({
            status: "Success",
            msg: "OTP sent successfully",
            otp: otp,
            data: otpBody
        })
    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "Error in OTP Handler",
            errormsg: error.message
        })
    }
}

// SignUp

// Algo 
// fetch data
// validate 
// email exist or not
// fetch latest otp value from otp database to verify
// check if the entered otp from front end is valid with most recent otp
// If valid otp we create entry in User with hashed password 


//?? Signup will happen in verify and register page in front end and from there we get the otp

exports.signUp = async (req, resp) => {
    try {
        // fetch all data
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword, // front end
            accountType,
            contactNumber, // front end
            otp,           // front end
        } = req.body

        // validate if all field exists
        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !contactNumber || !otp) {
            return resp.status(400).json({
                status: "Failed",
                msg: "All fields are required for signup"
            })
        }

        // Check if password and confirmPassword matches

        if (password !== confirmPassword) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Password and ConfirmPassword don't match !, please try again"
            })
        }

        // Check if Email already registered 
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            //* Status code for conflict
            return resp.status(200).json({
                status: "Failed",
                msg: "User already exists, Sign In"
            })
        }

        // fetch Latest Otp to verify

        const recentOtp = await OTP.find({ email: email })
            .sort({ createdAt: -1 }) //fetchin descending order
            .limit(1);
        // Only one entry, we fetch
        console.log(recentOtp)
        if (recentOtp.length == 0) {
            return resp.status(200).json({
                status: "Failed",
                msg: "The Otp is not valid!"
            })
        }
        //?? recentotp return array ["{email,otp,createdAt}"]
        else if (otp !== recentOtp[0].otp) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Otp entered is not valid"
            })
        }

        // If valid we create entry in User 

        // We first hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // We have to create additional details as we have kept it required in User model
        // Create the user

        // let approved = "";
        // approved === "Instructor" ? (approved = false) : (approved = true);

        // We do this so, in profile handler we dont need to create additionaldetails and then save 

        // Instead we just update

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null
        })

        // !! LEFT to do approve
        // Then we save the entry in User
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            // API for Generating Image as per full name
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`

        })

        return resp.status(200).json({
            status: "Success",
            user:user,
            msg: "User is registered successfully"
        })


    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "Error in SignUp Handler !",
            errormsg: error.message
        })
    }

}

//Login

// Algo
// fetch data email and password
// validation for fields required
// check if for given email do we have entry in user
// check if password matches with hashed password
// If yes we, generate token
// in token data we send user id,email and accountType
// We modify user object 
// generate cookie and send it in response.
// In cookie we store jwt token
// In response we send token, modified user object,

exports.login = async (req, resp) => {
    try {
        // fetch data
        const { email, password } = req.body

        // validation for fields required
        if (!email || !password) {
            return resp.status(200).json({
                status: "Failed",
                msg: "All fields are required in login !",
            })
        }

        // check if email exists in database
        // We also populate additionDetails
        const user = await User.findOne({ email: email })
            .populate("additionalDetails")
            .exec()

        console.log("Data fetched about User from Db:", user)
        // If user not found with provided email

        if (!user) {
            return resp.status(200).json({
                status: "Failed",
                msg: "User with given email dont exists. try again !"
            })
        }

        // user exists check password with hashed password

        const checkHashedPassword = await bcrypt.compare(password, user.password)


        // password is correct generate Token
        if (checkHashedPassword) {

            // In token we send user id, email and accountType

            const payload = {
                id: user._id,
                email: user.email,
                accountType: user.accountType,
            }

            const tokenOptions = {
                expiresIn: "1d"
            }

             
            //Token Expires in 2 hours
            const token = jwtToken.sign(payload, process.env.JWT_SECRET, tokenOptions)

            // we update the object
            // send token and password 
            user.password = undefined;
            // user.token = token;
            console.log("User Logged", user)

            // generate cookie

            const cookieOptions = {
                // expires in 3days
                // expiresIn:"24hr", Expires in 24hr from the current time
                expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
                httpOnly: true,
            }

            resp.cookie("token", token, cookieOptions).
                // Req body
                status(200).json({
                    success: "Success",
                    token,
                    user,
                    message: 'User Logged in successfully !',
                })

        }
        else {
            return resp.status(200).json({
                status: "Failed",
                msg: "Password dont match ! Try Again !"
            })
        }

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            message: 'Login Failure, please try again',
            errormsg: error
        });
    }
}

// ChangePassword
// Algo
// get data from req body
// get oldPassword, newPassword, confirmNewPassowrd
// validation

// update pwd in DB
// send mail - Password updated
// return response

//TODO: HOMEWORK


exports.changePassword = async (req, resp) => {
    try {

        // Since we are changing it means we are already logged in, to change we first have to check is old password corect or not

        const token = req.cookies.token || req.body.token || req.headers("Authorization").replace("Bearer ", "");
        console.log(token);

        // We have sent in auth middleware to next with req.user and user has {token} 
        const userDetails = await User.findById(req.user.id);

        // Get old password, new password, and confirm new password from req.body
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword ) {
            return resp.status(200).json({
                status: "Failed",
                msg: "All Fields are required in changepassword !"
            })
        }

        // we do this because in token user object we have set password to undefined


        const decode = await bcrypt.compare(oldPassword, userDetails.password);

        if (!decode) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Old Password dont match ! please try again"
            })
        }
        //verify old password matches one in database
        // If passsword matches 

        // Verify newPassword and confirmPassword Matches

        // if (newPassword !== confirmNewPassword) {
        //     return resp.status(200).json({
        //         status: "Failed",
        //         msg: "New Password and Confirm Password don't match ! Try Again"
        //     })
        // }

        const newHashedPassword = await bcrypt.hash(newPassword, 10);

        // Everything matches update Db entry
        const updatedUserDetails = await User.findByIdAndUpdate({ _id: req.user.id },
            {
                password: newHashedPassword
            },
            // This Parameter is used so, we get the updated object and not the old object
            {
                new: true
            })

        // Send Email that Password is Updated
        let mailResponse;
        try {
            mailResponse = await mailSender(
                updatedUserDetails.email,
              //Change to Password Update Template Later
                "Password Update",
                "Your Password is Updated Successfully"
            )
            console.log("Email sent successfully:", mailResponse);

        } catch (error) {
            // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
            console.error("Error occurred while sending email:", error);

            return resp.status(200).json(
                {
                    status: "Failed",
                    msg: "Error sending Email !",
                    error: error
                }
            )
        }
        
        return resp.status(200).json({
            status: "Success",
            msg: "Password Updated Successfully !",
            data: updatedUserDetails,
            mail: mailResponse
        })

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: " Error in changing password",
            error: error
        })
    }
}



exports.checkAlreadyLoggedIn=async (req,resp)=>{
    try{
        const token = req.cookies.token;
        // console.log("Auth Token Check =>",token);
        if(!token){
            return resp.status(200).json({
                status:'Failed',
                msg:"Token is missing"
            })
        }

        try{
            const decode=jwtToken.verify(token,process.env.JWT_SECRET);
            return resp.status(200).json({
                status:'Success',
                msg:'User is authenticated',
                data:decode
            })
        }catch(err){
            return resp.status(200).json({
                status:'Failed',
                msg:"Token is Invalid.",
                tokenError:err
            })
        }


    }catch(error){
        console.log(error);
        return resp.status(200).json({
            status:'Failed',
            msg:'Something went wrong while checking already logged in the function',
            errormsg:error
        })

    }
}