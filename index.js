

// Importing Packages from Node Modules

const express = require("express");
const dotenv = require("dotenv");
const fileuploader = require("express-fileupload")
const cookieparser = require("cookie-parser")

// // Import our packages
const { databaseConnect } = require("./config/database");
const mediacloud = require("./config/cloudinary");

dotenv.config();

const PORT = process.env.PORT || 4000
const app = express();

// Routes
const userRoutes = require("./routes/User")
const userProfileRoutes = require("./routes/Profile")

// Middlewares
app.use(express.json())
app.use(cookieparser())
app.use(fileuploader({
    useTempFiles: true,
    tempFileDir: "/tmp"
}))



// Router Middleware
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/profile", userProfileRoutes)


// Dummy Router
app.get("/", (req, resp) => {
    return resp.status(200).json({
        status: "Success",
        msg: "Dummy Route working"
    })
})


// Database connection function
databaseConnect();

// cloudinary connection function
mediacloud();

app.listen(PORT, () => {
    console.log(`Server Started Running on Port : ${PORT}`)
})