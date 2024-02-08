const User = require("../model/User");
const Profile = require("../model/Profile")
const { imageUploader } = require("../utils/imageUploader");
// const { default: mongoose } = require("mongoose");

// Profile 
// Update Profile
// Delete Profile
// Update Image
// Profile mai konse konse course enrolled hai 


// Profile we have already created we just have to update it so update profile
// Update Profile

// Algo
// Fetch Data
// Validate
// We have already created profile while signup
// find profile and uodate profile


exports.updateProfile = async (req, resp) => {
    try {
        const { about="", dateOfBirth="", contactNumber=""
            , gender="" // Form Data
        } = req.body;
        const id = req.user.id;

        // Find the Profile by Id
        const userDetails = await User.findById(id);
        //  additional detail ke andar id rakhi hai

        const profile = await Profile.findById(userDetails.additionalDetails);
        profile.dateOfBirth = dateOfBirth;
        profile.about = about;
        profile.contactNumber = contactNumber;
        profile.gender = gender;

        const updatedDocument = await profile.save();
        return resp.status(200).json(
            {
                status: "Success",
                msg: "Profile updated successfully !",
                updatedDocument: updatedDocument
            }
        )


    } catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                msg: "error while updating profile",
                error: error
            }
        )
    }
}


// Delete Profile

exports.deleteAccount = async (req, resp) => {
    try {
        // TODO: Find More on Job Schedule
        // const job = schedule.scheduleJob("10 * * * * *", function () {
        // 	console.log("The answer to life, the universe, and everything!");
        // });
        // console.log(job);

        const id = req.user.id;
        const user = await User.findById(id);
        if (!user) {
            return resp.status(200).json(
                {
                    status: "Failed",
                    msg: "User not found !"
                }
            )
        }

        await Profile.findByIdAndDelete({ _id: user.additionalDetails })
        // TODO: Unenroll User From All the Enrolled Courses
        // Now Delete User
        await User.findByIdAndDelete(id);

        return resp.status(200).json(
            {
                status: "Success",
                msg: "User deleted Successfully !"
            }
        )


    } catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                error: error
            }
        )
    }
}

// Get Individual User Data, the one who is logged in
exports.getUserDetail=async(req,resp)=>{
    try{
    const {id,email}=req.user;
       const userDetail= await User.findOne({
       _id:id,
       email:email
       })
       userDetail.password=null;
    //    console.log("User Individual Detail =>",userDetail);
       return resp.json({
        status:'success',
        userDetail:userDetail
       })
    }
    catch(err){
        console.log(err);
        return resp.status(200).json({
            status:'Failed',
            error:err
        })

    }
}

// If someone wants to see all Users details 

exports.getAlluserDetails = async (req, resp) => {
    try {
        const id = req.user.id;
        const userDetails = await User.findById(id)
            .populate("additionalDetails")
            .exec()

        return resp.status(200).json(
            {
                status: "Success",
                msg: "User details fetched successfully !",
                data: userDetails
            }
        )

    } catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                error: error
            }
        )

    }
}

// Update Image of Profile

exports.updateDisplayPicture = async (req, resp) => {
    try {
        const displayPicture = req.files.displayPicture;
        const userId = req.user.id;

        const image = await imageUploader(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        console.log("Image =>",image);
        const updatedProfile = await User.findByIdAndUpdate(
            userId,
            {
                image: image.secure_url
            },
            {
                new: true
            }
        )

        return resp.status(200).json(
            {
                status: "Success",
                message: "Image Updated successfully !",
                data: updatedProfile
            }
        )


    } catch (error) {
        console.log(error);
        return resp.status(200).json(
            {
                status: "Failed",
                msg: "Error while upload image / updating image ",
                error: error
            }
        )
    }
}

exports.getEnrolledCourses = async (req, resp) => {
    try {
        const userId = req.user.id
        const userDetails = await User.findOne({
            _id: userId,
        })
            .populate("courses")
            .exec()
        if (!userDetails) {
            return resp.status(200).json({
                status: "Failed",
                message: `Could not find user with id: ${userDetails}`,
            })
        }
        return resp.status(200).json({
            status: "Success",
            data: userDetails.courses,
        })
    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            status: "Failed",
            message: error,
        })
    }
};