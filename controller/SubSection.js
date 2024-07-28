const Section = require("../model/Section")
const SubSection = require("../model/SubSection")
// Crud for Subsection

const { imageUploader } = require("../utils/imageUploader");

// create a new sub-section for a given section
exports.createSubSection = async (req, resp) => {
    try {
        //* extract necessary information from request body
        const { sectionId, title, description } = req.body;
        console.log(req.body)
        console.log(req.files);
        const video = req.files.video;

        if (!video) {
            return resp.status(200).json({
                status: 'Failed',
                message: 'video file missing'
            })
        }

        //* Check if necessary fields are provided
        if (!sectionId || !title || !description) {
            return resp.status(200).json(
                {
                    status: "Failed",
                    message: "All Fields are required"
                }
            )
        }


        // Upload video file to cloudinary
        const uploadDetails = await imageUploader(
            video,
            process.env.FOLDER_NAME
        )

        console.log(uploadDetails);

        // Create a new Sub-section with the necessary information

        const subSectionDetails = await SubSection.create(
            {
                title: title,
                timeDuration: `${uploadDetails.duration}`,
                description: description,
                videoUrl: uploadDetails.secure_url
            }
        )

        // Update the Section now
        const updateSection = await Section.findByIdAndUpdate({ _id: sectionId },
            {
                $push: { subSection: subSectionDetails._id }
            },
            {
                new: true
            }
        ).populate("subSection");

        console.log("UpdateSection =>", updateSection);




        return resp.status(200).json(
            {
                status: "Success",
                message: "Sub section created successfully",
                data: updateSection
            }
        )

    } catch (error) {
        console.log("Create Sub section error", error);
        return resp.status(200).json(
            {
                status: "Failed",
                message: "Error while creating sub section",
                error: error
            }
        )
    }
}

// update a  sub-section 
exports.updateSubSection = async (req, resp) => {
    try {

        const { subsectionId, title, description } = req.body;
        const subSection = await SubSection.findById(subsectionId);
        if (!subSection) {
            return resp.status(200).json(
                {
                    status: "Failed",
                    msg: "Sub Section not found !"
                }
            )
        }

        if (title !== undefined) {
            subSection.title = title
        }

        if (description !== undefined) {
            subSection.description = description
        }

        if (req.files && req.files.video !== undefined) {
            const video = req.files.video
            const uploadDetails = await uploadImageToCloudinary(
                video,
                process.env.FOLDER_NAME
            )
            subSection.videoUrl = uploadDetails.secure_url
            subSection.timeDuration = `${uploadDetails.duration}`
        }

        // after updating we just save it 

        await subSection.save()
        return resp.json({
            status: "Success",
            message: "Sub-Section updated successfully",
        })

    } catch (error) {
        console.error(error)
        return resp.status(200).json({
            status: "Failed",
            message: "An error occurred while updating the section",
            errormsg: error
        })
    }
}

//* Delete a sub section
exports.deleteSubSection = async (req, resp) => {
    try {
        const { subSectionId, sectionId } = req.body
        if (!subSectionId || !sectionId) {
            return resp
                .status(200)
                .json({ status: "Failed", message: "Some fields are missing" })
        }

        const sectionUpdate = await Section.findByIdAndUpdate(
            { _id: sectionId },
            {
                $pull: {
                    subSection: subSectionId,
                },
            }, {
            new: true
        }
        )

        if (!sectionUpdate) {
            return resp
                .status(200)
                .json({ status: "Failed", message: "Section is not updated / Sub section missing" })
        }

        const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })

        if (!subSection) {
            return resp
                .status(200)
                .json({ status: "Failed", message: "Sub section not found" })
        }


        return resp.status(200).json({
            status: "Success",
            message: "SubSection deleted successfully",
            updatedSection: sectionUpdate
        })

    } catch (error) {
        console.error(error)
        return resp.status(200).json({
            status: "Failed",
            message: "An error occurred while deleting the SubSection",
            error: error
        })
    }
}