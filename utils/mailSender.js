const nodemailer = require("nodemailer");

// Mail sending Configuration
// Which we are defining in Function

// whom to send, title and what body we have to pass

const mailSender = async (email, title, body) => {
    try {

        // Node Mailer Config 
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        // Send Email function or Syntax

        const info = await transporter.sendMail({
            from: "StudyNotion || CodeHelp - by Rohan 👻", // sender address we have defined in MAIL_USER
            to: `${email}`, // list of receivers
            subject: `${title}`, // Subject line
            html: `${body}`, // html body
        })
        console.log("E-Mail sending info : ", info);
        return info;

    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}


module.exports = mailSender