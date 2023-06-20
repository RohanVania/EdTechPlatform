
const User = require("../model/User");
const Course = require("../model/Course");
const mongoose = require("mongoose");

const { instance } = require("../config/razorpay");
const mailSender = require("../utils/mailSender");

// If we want to buy somthing we create order or capture payment


// Capture Payment
// Algo
// fetch courseId and userId course we get from body and userId through auth middleware that we passed in next concept
// Validation course exists or not 
// validation user already enmrolled for given course

// Create order
// pass order options  
// return response with order details


exports.capturePayment = async (req, resp) => {


    const { courseId } = req.body;
    const userId = req.user.id;

    // Course id should be present
    if (!courseId) {
        return resp.status(200).json({
            status: "Failed",
            msg: "Course Id required !"
        })
    }

    try {
        var course = await Course.findById(courseId);
        if (!course) {
            return resp.status(200).json({
                status: "Failed",
                msg: "Course is Invalid !"
            })
        }

        // We check if for given course userId already exists or not in studentEnrolled

        // Inside student enrolled we have ObjectID of user
        // So convert user.id to Object Id
        let uid = new mongoose.Types.ObjectId(userId);

        if (course.studentsEnrolled.includes(uid)) {
            return resp.status(200).json({
                status: "Failed",
                msg: "User already enrolled for the course !",
            })
        }

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            message: error.message
        })
    }

    // Everything is Good lets create a order
    let amount = course.price;
    let currency = "INR";

    const orderoptions = {
        amount: amount * 100,
        currency,
        receipt: Math.random(Date.now().toString()),
        notes: {
            courseId: courseId,
            userId: userId,
        }
    }

    try {
        const paymentResponse = await instance.orders.create(orderoptions)
        console.log(paymentResponse)
        return resp.status(200).json({
            status: "Success",
            courseName: course.coursenName,
            courseDescription: course.courseDescription,
            thumbnail: course.thumbnail,
            orderId: paymentResponse.id,
            amount: paymentResponse.amount,
            currency: paymentResponse.currency,

        })
    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "could not initiate order !",
            error: error
        })
    }

}


// Verify Payment that the webhook passes 

exports.verifySignature = async (req, resp) => {

    // Verifying signature from razorpay request and webhooksecret

    const webhookSecret = "12345";
    const signature = req.headers["x-razorpay-signature"];

    // IMPORTANT
    const shasum = crypto.createHmac("sha256", webhookSecret);
    shasum.update(json.stringify(req.body));
    const digest = shasum.digest("hex")

    if (signature === digest) {
        console.log("Payment is authorized");


        // After payment is authorized
        // We need to perform some action
        // for that we need courseId and userId which we have sent in notes while capturing payments

        const { courseId, userId } = req.body.payload.payment.entity.notes;

        // Fulfill action
        // Affter user paid money he should have that course

        try {
            const enrolledCourse = await Course.findOneAndUpdate(
                {
                    _id: courseId
                },
                {
                    $push: {
                        studentsEnrolled: userId
                    }
                },
                {
                    new: true
                }
            )

            if (!enrolledCourse) {
                return resp.status(200).json({
                    status: "Failed",
                    message: "Unable to enroll student"
                })
            }

            console.log(enrolledCourse);

            // Now, find student in user and push course so he can accesss it

            const enrolledStudent = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: {
                        courses: courseId
                    }
                },
                { new: true }
            )

            console.log(enrolledStudent);

            if (!enrolledStudent) {
                return resp.status(200).json({
                    status: "Failed",
                    message: "Unable to enroll Course in User"
                })
            }

            // Mail send kardo confirmation wala

            const emailResponse = await mailSender(
                enrolledStudent.email,
                "Congratulations from CodeHelp",
                "Congratulations, you are onboarded into new CodeHelp Course",
            )


            return resp.status(200).json({
                success: true,
                message: "Signature Verified and Course Added",
            });

        } catch (error) {
            console.log(error);
            return resp.status(200).json({
                status: "Failed",
                errormsg: error
            })

        }

    }
    else {
        return resp.status(400).json({
            status: 'Fail',
            message: "Invalid Request || secret dont match"
        })
    }
}
