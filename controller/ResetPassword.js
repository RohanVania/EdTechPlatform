const User = require("../model/User")
const crypto = require("crypto")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")

// Reset Password Token

// Algo
// fetch email for which we want to reset password
// Validation
// check if email exists in db
// If yes,create token for reste password
// To make mapping easier and update user model or pass token and resetTokenExpires

exports.resetPasswordToken = async (req, resp) => {
    try {
        const { email } = req.body;
        if (!email) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Email is required to reset Password !"
            })
        }

        // Check if Email exists in DB
        const user = await User.findOne({ email: email });
        if (!user) {
            return resp.status(200).json({
                status: "Failed",
                msg: `This Email: ${email} is not Registered With us, Enter a Valid Email `
            })
        }

        // generate token
        const token = crypto.randomUUID()

        const url = `http://localhost:3000/update-password/${token}`

        // Update in model with token and resetPasswordExpires

        const updatedDetails = await User.findOneAndUpdate(
            { email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + 5 * 60 * 1000
            },
            {
                new: true
            }
        )

        console.log("DETAILS", updatedDetails);

        //  Send email

        const mailResponse = await mailSender(email, "Password Reset",
            `Your Link for email verification is ${url}. Please click this url to reset your password.`
        )

        return resp.status(200).json({
            status: "Success",
            msg: "Email sent successfully, please check email and change Password",
            mail: mailResponse
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success: "Failed",
            message: 'Something went wrong while sending reset password mail',
            errormsg: error
        })
    }
}

// Reset Password page

// When, we click on reset password link we are taken to
// page where we have to enter password which then updates

// We have modified User in reset password token
// with token and resetPasswordExpires
// To find document with given token , we could also
//find with email but babbar bhaiya told this in lecture 2

exports.resetPassword = async (req, resp) => {
    try {
        const { token, password, confirmPassword } = req.body

        if (!password || !token || !confirmPassword) {
            return resp.status(200).json({
                status: "Failed",
                msg: "All Fields are required in Reset Password !"
            })
        }

        // Password Validation
        if (password !== confirmPassword) {
            return resp.json({
                success: false,
                message: 'Password not matching',
            });
        }

        const userDetails = await User.findOne({ token: token })

        // If no entry invalid token
        if (!userDetails) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Invalid Reset token"
            })
        }

        // Token time Check
        if (userDetails.resetPasswordExpires < Date.now()) {
            return resp.json({
                success: "Failed",
                message: 'Token is expired, please regenerate your token',
            });
        }

        // If token not expired and valid
        const hashedPassword = await bcrypt.hash(confirmPassword, 10);

        const updatedData = await User.findOneAndUpdate(
            { token: token },
            //Update following fields
            { password: hashedPassword },
            { new: true }
        )
        console.log("Updated Data :", updatedData)

        return resp.status(200).json({
            status: "Success",
            msg: "Password Reset successfully"
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success: "Failed",
            message: 'Something went wrong while sending reset pwd mail',
            errormsg: error
        })
    }
}