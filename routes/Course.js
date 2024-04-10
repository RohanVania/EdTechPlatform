const express=require("express");
const router=express.Router();



// Middlewares for Authentication
const{auth,isInstructor, isAdmin}=require("../middlewares/auth");

//* Course Controller
const {createCourse,getAllCourses, getCourseDetails,getMyCourses}=require("../controller/Course");

//* Category Controller
const {createCategory,showAllCategories,categoryPageDetails}=require("../controller/Category");

//* Section Controller
const {createSection,updateSection,deleteSection}=require("../controller/Section");
const {createSubSection,deleteSubSection,updateSubSection} = require("../controller/SubSection")
// const {createRating,getAllRating,getAverageRating}=require("../controller/RatingAndReview");



// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can only be created by Instructor
router.post("/createCourse",auth,isInstructor,createCourse);
router.get("/getAllCourses",getAllCourses);
router.post("/getCourseDetails",getCourseDetails)

//Instructor can Add Section
router.post('/addSection',auth,isInstructor,createSection);
//Instructor can Update Section
router.post("/updateSection",auth,isInstructor,updateSection);
router.delete("/deleteSection",auth,isInstructor,deleteSection)

router.post("/addSubSection",auth,isInstructor,createSubSection)
router.delete("/deleteSubSection",auth,isInstructor,deleteSubSection)
router.post("/updateSubSection",auth,isInstructor,updateSubSection)

router.get("/mycourses",auth,isInstructor,getMyCourses)

// ********************************************************************************************************
//                                     Category routes (Only by Admin)
// ********************************************************************************************************

//~ Only Admin can create a category
router.post("/createCategory",auth,isAdmin,createCategory)

//* Anyone can use this route to see all categories and page details in study Notion
router.get("/showAllCategories",showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
// router.post("/createRating", auth, isStudent, createRating)
// router.get("/getAverageRating", getAverageRating)
// router.get("/getReviews", getAllRating)

module.exports=router;





