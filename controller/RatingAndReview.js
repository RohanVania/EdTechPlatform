const { default: mongoose } = require("mongoose");
const Course = require("../model/Course")
const RatingAndReview = require("../model/RatingAndReview");

// Create Rating
exports.createRating = async (req, resp) => {
    try {
        // Get userId
        const userId = req.user.id;

        // fetch data from req body

        const { rating, review, courseId } = req.body;

        // Check if the User is enrolled or not
        const courseDetails = await Course.findOne(
            { _id: courseId },
            { studentsEnrolled: { $elemMatch: { $eq: userId } } }
        )

        if (!courseDetails) {
            return resp.status(200).json({
                status: "Failed",
                message: 'Student is not enrolled in the course',
            });
        }

        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            course: courseId,
        });
        if (alreadyReviewed) {
            return resp.status(200).json({
                status: "Failed",
                message: 'Course is already reviewed by the user',
            });
        }

        //create rating and review
        const ratingReview = await RatingAndReview.create({
            rating, review,
            course: courseId,
            user: userId,
        });

        //update course with this rating/review
        const updatedCourseDetails = await Course.findByIdAndUpdate({ _id: courseId },
            {
                $push: {
                    ratingAndReviews: ratingReview._id,
                }
            },
            { new: true });
        console.log(updatedCourseDetails);
        //return response
        return resp.status(200).json({
            status: "Success",
            message: "Rating and Review created Successfully",
            ratingReview,
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}



// Get Average rating

exports.getAverageRating = async (req, res) => {
    try {
        //get course ID
        const courseId = req.body.courseId;
        //calculate avg rating

        const result = await RatingAndReview.aggregate([
            {
                $match: {
                    // courseid into object id
                    course: mongoose.Schema.Types.ObjectId(courseId)
                },
            },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" },
                }
            }
        ])

        //return rating
        if (result.length > 0) {

            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            })

        }

        //if no rating/Review exist
        return res.status(200).json({
            success: true,
            message: 'Average Rating is 0, no ratings given till now',
            averageRating: 0,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


// Get All Rating

exports.getAllRating = async (req, resp) => {
    try {
        const allReviews = await RatingAndReview.find({})
            .sort({ rating: "desc" })
            .populate({
                path: "user",
                select: "firstName lastName email image",
            })
            .populate({
                path: "course",
                select: "courseName",
            })
            .exec();
        return resp.status(200).json({
            success: true,
            message: "All reviews fetched successfully",
            data: allReviews,
        });
    }
    catch (error) {
        console.log(error);
        return resp.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
