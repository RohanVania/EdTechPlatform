const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.model({
    // Each user can give one review and rating
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    review: {
        type: String,
        required: true,
        trim: true
    }
    ,
    //?? Additional Details 
    //?? Which course we have put rating
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
        //For better performance we give this option to true
        index: true
    }
})

module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);