const User = require("../model/User");
const Course = require("../model/Course")
const { imageUploader } = require("../utils/imageUploader")


// Create Course

exports.createCourse = async (req, resp) => {
    try {

        const userId = req.user.id;

        const {
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            tag,
            category,
            //? Improvement 
            status,
            instructions

        } = req.body

        // file for thumbnail
        const thumbnail = req.files.thumbnailImage;

        // validation
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail || !category) {
            return resp.status(200).json({
                status: "Failed",
                msg: "All fields are required while creating course !"
            })
        }

        // Course not yet published
        if (!status || status === undefined) {
            status = "Draft";
        }

        // Check for Instructor
        // the query, filtering the results to only return users with an account type of "Instructor".
        const instructorDetails = await User.findById(userId,
            {
                accountType: "Instructor"
            });

        console.log("Instructor Details: ", instructorDetails);

        //TODO: Verify that userId and instructorDetails._id  are same or different ? (both are same)

        if (!instructorDetails) {
            return resp.status(200).json({
                success: "Failed",
                message: 'Instructor Details not found !',
            });
        }

        // validate Category also
        const categoryDetails = await Category.findById(category);
        if (!categoryDetails) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Category details not found !"
            })
        }

        // If all good upload file to cloudinary
        const thumbnailImage = await imageUploader(thumbnail, process.env.FOLDER_NAME)
        console.log(thumbnailImage);

        // add Entry in course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            tag: tag,
            instructor: instructorDetails._id,
            category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
            status: status,
            instructions: instructions


        })

        // add course in userSchema of instructor as well

        const updateUserDetails = await User.findByIdAndUpdate(
            { _id: instructorDetails._id },
            {
                $push: {
                    courses: newCourse._id
                }
            },
            {
                new: true
            }
        )

        //update the TAG ka schema 

        const updateCategoryDetails = await Category.findByIdAndUpdate({ _id: category },
            {
                $push: {
                    courses: newCourse._id
                }
            },
            {
                new: true
            }
        )


        return resp.status(200).json({
            success: "Success",
            message: "Course Created Successfully",
            data: newCourse,
        });

    } catch (error) {
        console.error(error);
        return resp.status(200).json({
            success: "Failed",
            message: 'Failed to create Course',
            error: error.message,
        })
    }
}

// Get All Courses

exports.getAllCourses = async (req, resp) => {
    try {
        //TODO: change the below statement incrementally

        // We want to show this when course is opened by user to buy
        const allCourses = await Course.find(
            {},
            {
                courseName: true,
                price: true,
                thumbnail: true,
                instructor: true,
                ratingAndReviews: true,
                studentsEnrolled: true
            }
        ).populate("instructor").exec()


        return resp.status(200).json({
            success: "Success",
            message: 'Data for all courses fetched successfully',
            data: allCourses,
        })

    }
    catch (error) {
        console.log(error);
        return resp.status(200).json({
            success: "Failed",
            message: 'Cannot Fetch course data',
            error: error.message,
        })
    }
}


// getCourseDetails
// using course Id we fetche details and populate

exports.getCourseDetails = async (req, resp) => {
    try {

        const { courseId } = req.body;
        if (!courseId) {
            return resp.status(200).json(
                {
                    status: "Failed",
                    msg: "Course Id not found !"
                }
            )
        }

        // TODO:
        //?? While Testing also populate section and inside section populate sub section

        const courseDetails = await Course.find({ _id: courseId })
            .populate({
                path: "instructor",
                populate: {
                    path: "additionalDetails"
                }
            })
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection"
                }
            })
            .populate("ratingAndReviews")
            .populate("category")


        //!! it should be courseDetails.length ==0
        if (!courseDetails) {
            return resp.status(200).json({
                status: "Failed",
                msg: `Could not find course with id: ${courseId}`
            })
        }

        return resp.status(200).json(
            {
                status: "Success",
                message: "Course details fetched successfully",
                data: courseDetails
            }
        )

    }

    catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                msg: "error in fetchting all detials of course",
                errormsg: error
            }
        )
    }
}