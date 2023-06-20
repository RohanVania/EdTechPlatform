// For connection with cloudinary we have already defined cloudinary config

const cloudinary = require("cloudinary").v2

exports.imageUploader = async (file, folder, height, quality) => {
    try {
        const options = {
            folder: folder,
        }

        // If height is given, include in options
        if (height) {
            options.height = height;
        }
        // If quality is given, include in options
        if (quality) {
            options.quality = quality;
        }
        // Always include resource_type for any type of file to be accepted 
        options.resoure_type = "auto";


        return await cloudinary.uploader.upload(file.tempFilePath, options);

    } catch (error) {
        console.log("Error while uploading file to cloudinary")
        console.log(error);

    }
}
