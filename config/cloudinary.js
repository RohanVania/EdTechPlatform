// COMMENT TESTING
const cloudinary = require("cloudinary").v2

const cloudinaryConfig = async (file="") => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET,
            // secure: true
        });
        console.log("Connected to Cloudinary !")
        console.log(file)
        if(file){
            const result=await cloudinary.uploader.upload(file.tempFilePath,{resource_type:'video'})
            console.log(result)
        }
    } catch (error) {
        console.log("Cloudinary Connection Error ! 💥");
        console.log(error);
    }
}



module.exports = cloudinaryConfig;