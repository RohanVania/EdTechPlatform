const Course = require("../model/Course")
const Section = require("../model/Section")

// Crud for Section

// create section
// Algo 
// fetch data we, have to add section to course so, will  need course  Id
// validate
// add entry in section database
// Update in courseContent


exports.createSection = async (req, resp) => {
    try {

        //fetch data
        const { sectionName, courseId } = req.body

        // validate
        if (!sectionName || !courseId) {
            return resp.status(200).json({
                status: "Failed",
                msg: "All fields required while creating section ! sectionName or courseId"
            })
        }

        //~ If the courseId is Incorrect we will give that msg
        const courseIdCheck=await Course.findById(courseId);
        if(!courseIdCheck){
            return resp.status(200).json({
                status:"Failed",
                msg:"CourseId passed doesn't exists !"
            })
        }

        //TODO For that Particular Course check whether it has same section name repeated


        // entry in section db
        const newSection = await Section.create({ sectionName })

        // Update in courseContent with section Id

        const updateCourseDetails = await Course.findByIdAndUpdate(
            { _id: courseId },
            {
                $push: {
                    courseContent: newSection._id
                }
            },
            { new: true }
        
            //**  HW: use populate to replace sections/sub-sections both in the updatedCourseDetails
            )
            .populate(
               {
                path:"courseContent"
               }
            )
            // .populate({
            //     path: "courseContent",
            //     populate: {
            //         path: "subSection"
            //     }
            // })
            .exec()

            //

        return resp.status(200).json({
            status: "Success",
            message: "Section created successfully!",
            updatedCourseDetails: updateCourseDetails
        })


    } catch (error) {
        console.log(error)
        return resp.status(302).json({
            status: "Failed",
            msg: "Unable to create Section, please try Again",
            errormsg: error
        })
    }
}


// update Section

exports.updateSection = async (req, resp) => {
    try {
        //data input
        const { sectionName, sectionId } = req.body;
        //data validation
        if (!sectionName || !sectionId) {
            return resp.status(200).json({
                success: "Failed",
                message: 'Missing Properties in updateSection !',
            });
        }

        //~ If the sectionId is Incorrect we will give that msg
        const sectionIdCheck=await Section.findById(sectionId);
        if(!sectionIdCheck){
            return resp.status(200).json({
                status:"Failed",
                msg:"Section Id passed doesn't exists !"
            })
        }


        //update data
        const updatedSection = await Section.findByIdAndUpdate(
            { _id: sectionId },
            { sectionName },
            { new: true }
        );

        //return res
        return resp.status(200).json({
            success: "Success",
            message: 'Section Updated Successfully',
            updatedSection:updatedSection
        });

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            success: "Failed",
            message: "Unable to update Section, please try again",
            error: error.message,
        });
    }
}


// Delete Section

exports.deleteSection = async (req, resp) => {
    try {

        const { courseId, sectionId } = req.body
        const deletedDatafromSection = await Section.findByIdAndDelete({ _id: sectionId })
        if(!deletedDatafromSection){
            return resp.status(200).json({
                success: "Failed",
                message: "Unable to delete Section, or Id not found please try again later",
            });
        }

        //TODO[Testing]: do we need to delete the entry from the course schema ??

        //?? Improved Hw
        // We will need courseId if we want to delete section from course Schema

        //!! check below 

        const updatedCourse=await Course.findByIdAndUpdate(
            { _id: courseId },
            {
                $pull: {
                    courseContent: sectionId
                }
            },
            {
                new:true
            }
        )

        console.log(updatedCourse)

        return resp.status(200).json({
            success: "Success",
            message: "Section Deleted Successfully",
            dataDeleted: deletedDatafromSection
        })

    }
    catch (error) {
        console.log(error);
        return resp.status(200).json({
            success: "Failed",
            message: "Unable to delete Section, please try again",
            error: error.messsage,
        });
    }
}