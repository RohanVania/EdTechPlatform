
// Importing Email Templates
const { otpTemplate } = require("../mail/templates/emailVerificationTemplate")


// Reason we, are creating Otp Model is because, when we send otp to email we also have to verify it
// And to do that, we have save otp in database till it expires

const mongoose = require("mongoose");

const mailSender = require("../utils/mailSender")

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        //automatically deletes document from database
        //After Expiry or 5 minutes
        expires: 5 * 60,

    }
})

async function sendEmailVerification(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            "Verification Email from StudyNotion ",
            otpTemplate(otp)
        )
        console.log("Email sent successfully !", mailResponse);
    } catch (error) {
        console.log("Error occured while sending mails :", error)

        // Do not known reason 
        throw error;
    }
}

// we cannot send doc in pre middleware because it is work that we do before saving document 

// and in post middleware we can send doc , because it is work we do after saving doc

otpSchema.pre("save", async function (next) {

    //?? if the document is new only then send email
    if (this.isNew) {
        await sendEmailVerification(this.email, this.otp)
    }

    next();
})

module.exports = mongoose.model("OTP", otpSchema)