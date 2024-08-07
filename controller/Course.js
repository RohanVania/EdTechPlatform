const User = require("../model/User");
const Course = require("../model/Course")
const Section=require("../model/Section");
const SubSection=require("../model/SubSection");
const Category = require("../model/Category");
const { imageUploader } = require("../utils/imageUploader");
const { default: mongoose } = require("mongoose");


//* Create Course
exports.createCourse = async (req, resp) => {
    try {

        // const userId = req.user.id;
        const userid = req?.user?.id;

        let {
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            tag,
            category,
            //? Improvement 
            status,
            instructions } = req.body;

        // Parsingg back to object
        tag = JSON.parse(tag);
        instructions = JSON.parse(instructions);

        // file for thumbnail

        const thumbnail = req.files?.thumbnailImage;

        // validation
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !thumbnail || !tag || !instructions) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Some fields that are missing are required while creating course !"
            })
        }


        // Course not yet published
        if (!status || status === undefined) {
            status = "Draft";
        }

        // Check for Instructor
        // the query, filtering the results to only return users with an account type of "Instructor".
        const instructorDetails = await User.findById(userid,
            {
                accountType: "Instructor"
            }
        );


        //TODO: Verify that userId and instructorDetails._id  are same or different ? (both are same)

        if (!instructorDetails) {
            return resp.status(200).json({
                status: "Failed",
                message: 'Instructor Details not found !',
            });
        }
        // validate Category also

        const categoryData = await Category.findOne({ name: category });
        if (!categoryData) {
            return resp.status(200).json({
                status: "Failed",
                message: "Given Category doesn't exists"
            })
        }

        const categoryDetails = await Category.findById(categoryData._id);
        if (!categoryDetails) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Category details not found or is Invalid!"
            })
        }

        // If the instructor already has a course with same name inform him

        const alreadyCourseWithSameName = await Course.findOne({
            courseName: courseName,
            instructor: userid
        })

        if (alreadyCourseWithSameName) {
            return resp.status(200).json({
                status: "Failed",
                message: "Instructor has course, with same name"
            })
        }

        // If all good upload file to cloudinary 
        const thumbnailImage = await imageUploader(thumbnail, process.env.FOLDER_NAME)

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
        const updatedUserDetails = await User.findByIdAndUpdate(
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
        const updateCategoryDetails = await Category.findByIdAndUpdate({ _id: categoryData._id },
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
            status: "Success",
            message: "Course Created Successfully",
            data: newCourse,
            updatedUserDetails: updatedUserDetails
        });

    } catch (error) {
        console.error(error);
        return resp.status(200).json({
            status: "Failed",
            message: 'Failed to create Course',
            error: error.message,
        })
    }
}

//* Get All Courses
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


//* GetCourseDetails
//* Using course Id we fetche details and populate

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

//* Get MyCourses
exports.getMyCourses = async (req, resp) => {
    try {
        const { id } = req.user;
        const mycoursesResult = await User.findById(id, { courses: 1, courseProgress: 1 }).populate({
            path: 'courses',
            populate: {
                path: 'courseContent',
                populate: {
                    path: 'subSection',
                    model: 'SubSection' // Ensure 'SubSection' is the correct model name
                }
            }
        })
            .exec();

        // console.log("Course Details =>", mycoursesResult);

        return resp.status(200).json({
            status: "Success",
            message: 'Data for all my courses fetched successfully',
            data: mycoursesResult
        })
    }
    catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                msg: "Error in Fetching my courses for Instructor",
                errormsg: error
            }
        )
    }
}

//* Delete Course by Id
exports.deleteParticularCourse = async (req, res) => {
    try {
        const courseId = req.params?.id;
        const userid = req?.user?.id;

        //* Checking user id provided in delete function call and server side auth or instructor id go to route for understanding
        const validId = userid === req.body?.userid ? true : false;
        if (validId) {

            //* lets find the course first
            const particularCourse = await Course.findById(courseId).populate(
                {
                    path: 'courseContent',
                    populate: {
                        path: "subSection",
                        model: 'SubSection'
                    }
                }
            ).exec();

            console.log("particular course =>", particularCourse);

            if (!particularCourse) {
                return response.status(200).json({
                    status: 'Success',
                    message: 'Course does not exist'
                })
            }

            //* Cleaning Database

            const allSectionIdArray = particularCourse.courseContent.map((el)=>el._id);
            const allSubSectionIdArray = particularCourse.courseContent.flatMap((el)=>el.subSection.map(el=>el._id));

            const deleteAllRelatedSection=await Section.deleteMany({
                _id:{
                    $in:allSectionIdArray
                }
            })

            const deleteAllRelatedSubSection=await SubSection.deleteMany({
                _id:{
                    $in:allSubSectionIdArray
                }
            }
            )

            // console.log(allSubSectionIdArray);


            // return res.status(200).json({
            //     particularCourse:particularCourse
            // })

            const deleteCourseResult = await Course.findByIdAndDelete(courseId);

            if (deleteCourseResult === null) {
                return response.status(200).json({
                    status: "Success",
                    data: "Nothing",
                    msg: 'Given course is already deleted'
                })
            }


            //* Also delete it course from user table entry in courses

            // const userDetails=await User.findById(userid).populate("courses").exec();


            // console.log("hello",userDetails.courses[0]._id);
            // console.log("hello 1",courseId);

            // const coursesDelete=userDetails?.courses.filter((el)=>console.log(el._id===courseId));
            // console.log(coursesDelete)

            //* Converting String id to object Id
            const courseobjectId = new mongoose.Types.ObjectId(courseId);

            const userDetailupdate = await User.findByIdAndUpdate(userid,
                {
                    $pull: { courses: courseobjectId }
                },
                {
                    new: true
                }
            )

            console.log(userDetailupdate);

            //TODO We also have to clean all section and subsections while deleting a course *IMP

            return res.status(200).json({
                status: "Success",
                msg: "Course deleted successfully",
            })
        }

        return res.status(200).json({
            status: "Failed",
            data: "User id and server id dont match",
            msg: 'Something wrong in delete a course'
        })
    }
    catch (err) {
        console.log(err);
        return res.status(200).json({
            status: "Failed",
            msg: "Error while deleting a course",
            errmsg: err
        })
    }
}

//* Update Course by Id

exports.editParticularCourse = async (req, resp) => {
    try {

        // const userId = req.user.id;
        // console.log("User", req.user);
        // console.log("Body ", req.body)
        // console.log("Files", req.files)
        const userid = req?.user?.id;

        let {
            tag,
            instructions,
            courseName,
            courseDescription,
            price,
            category,
            whatYouWillLearn,
            courseIdToEdit,

        } = req.body;

        // Parsingg back to object
        tag = JSON.parse(tag);
        instructions = JSON.parse(instructions);

        // file for thumbnail
        const thumbnail = req.files?.thumbnailImage;

        if (!courseIdToEdit) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Id missing for course editing!"
            })
        }

        // validation
        if (!tag || !instructions || !courseName || !courseDescription || !price || !category || !whatYouWillLearn) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Some fields that are missing are required while Edit course !"
            })
        }

        // Check for Instructor
        // the query, filtering the results to only return users with an account type of "Instructor".
        const instructorDetails = await User.findById(userid,
            {
                accountType: "Instructor"
            }
        );

        //TODO: Verify that userId and instructorDetails._id  are same or different ? (both are same)

        if (!instructorDetails) {
            return resp.status(200).json({
                success: "Failed",
                message: 'Instructor Details not found !',
            });
        }
        // validate Category also
        const categoryData = await Category.findOne({ name: category });
        if (!categoryData) {
            return resp.status(200).json({
                status: "Failed",
                message: "Given Category doesn't exists"
            })
        }
        const categoryDetails = await Category.findById(categoryData._id);
        if (!categoryDetails) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Category details not found or is Invalid!"
            })
        }

        let updateCourseById;
        // If all good upload file to cloudinary
        if (req.files !== null) {
            const thumbnailImage = await imageUploader(thumbnail, process.env.FOLDER_NAME);
            updateCourseById = await Course.findByIdAndUpdate(
                { _id: courseIdToEdit },
                {
                    tag,
                    instructions,
                    courseName,
                    courseDescription,
                    price,
                    category: categoryDetails._id,
                    whatYouWillLearn,
                    thumbnail: thumbnailImage?.url,
                },
                {
                    new: true
                }
            )
        }
        else {

            updateCourseById = await Course.findByIdAndUpdate(
                { _id: courseIdToEdit },
                {
                    tag,
                    instructions,
                    courseName,
                    courseDescription,
                    price,
                    category: categoryDetails._id,
                    whatYouWillLearn,
                },
                {
                    new: true
                }
            ).populate("courseContent").exec()
        }
        console.log(updateCourseById)
        return resp.status(200).json({
            status: "Success",
            message: "Course Edited Successfully",
            updatedCourseData: updateCourseById,
        });

    } catch (error) {
        console.error(error);
        return resp.status(200).json({
            status: "Failed",
            message: 'Failed to Edit Course',
            error: error.message,
        })
    }

}