const mongoose = require("mongoose");

// Database connection function 
// We write this as a promise and not using asyc await because of experience, it was not working properly once 

exports.databaseConnect = async () => {
    mongoose.connect(process.env.DATABASE_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database Connected Successfully !");
    }).catch((error) => {
        console.log("Error connecting to database 💥",error);
    })
}
