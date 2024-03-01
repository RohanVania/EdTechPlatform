const express = require("express")
const router = express.Router();

// Importing Handler functions
const { signUp, login, changePassword, sendOtp,checkAlreadyLoggedIn,logout } = require("../controller/Auth")
const { resetPassword, resetPasswordToken,resetPasswordTokenValid } = require("../controller/ResetPassword");


// Importing Middleware
const { auth } = require("../middlewares/auth")

// User can login,signup and In front end we have Send OTP Page

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

router.post("/login", login);
router.post("/signup", signUp);
router.post("/sendotp", sendOtp);

// Change Password Route

router.post("/changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************


// User can also reset password

router.post("/reset-password-token", resetPasswordToken);
router.get("/reset-password/:resetToken",resetPasswordTokenValid)
router.post("/reset-password", resetPassword);
router.get("/logout",logout)

router.get("/checkalreadyLoggedIn",checkAlreadyLoggedIn);


module.exports = router;