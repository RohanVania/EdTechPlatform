const express = require("express");
const router = express.Router();

//Importing Middleware
const { auth } = require("../middlewares/auth");


// Importing Handler Functions
const {
    updateProfile, deleteAccount, updateDisplayPicture, getAlluserDetails, getEnrolledCourses
} = require("../controller/Profile")

//^  User can Edit Profile Info, delete Account, Update Profile Photo and see all Details

router.put("/updateProfile", auth, updateProfile);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);

router.get("/getUserDetails", auth, getAlluserDetails);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);

router.delete("/deleteProfile", auth, deleteAccount)



module.exports = router;