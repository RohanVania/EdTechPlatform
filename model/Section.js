const mongoose = require("mongoose");

// See Figma File to understand Better 
// Example a Javscript secion will have javascript related videos
const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        // required: true,
        trim: true
    },

    subSection: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SubSection",
        }
    ]
},{ strictPopulate: false })

module.exports = mongoose.model("Section", sectionSchema)