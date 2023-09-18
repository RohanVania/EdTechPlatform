
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    //Basic course details
    courseName: {
        type: String,
        required: true,
        trim: true,
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true,
    },
    whatYouWillLearn: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        // default: 0,
    },
    thumbnail: {
        type: String,
    },

    // Refer's to other documents of other collection's

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
        }
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview"
        }
    ],
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    // Each course we will put tag for filtering 
    // One course can have only one category
    // and multiple tags

    // Example
    //?? Improvement example lovaebabar video
    //?? Is education category, only one and has multiple tags

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },

    //* Later we choose using tag or filter using tag
    tag: {
        type: [String],
        required:true,
    },

    //??  Additional details will discover
    instructions: {
        type: [String]
    },
    status: {
        type: String,
        enum: ["Draft", "Published"]
    }


})

module.exports = mongoose.model("Course", courseSchema);