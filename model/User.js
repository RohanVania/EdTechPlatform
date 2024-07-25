
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        // unique:true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    // To identify type of User, In our Project user can either be Student or Instructor or Admin
    accountType: {
        type: String,
        enum: ["Student", "Instructor", "Admin"],
        required: true,
    },

    // Refer's to other document of other collection's

    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    courseProgress: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseProgress"
        }
    ],

    // adding for better mapping for Reset Password logic

    token: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },

    //?? For Improvement
    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },


},
    // Add timestamps for when the document is created and modified
    {
        timestamps: true,
        strictPopulate: false 
    }
)


// creating user model

module.exports = mongoose.model("User", userSchema);







