const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connectes successfully");

    } catch (error) {
        console.log("connection error");

    }
}

module.exports = connectDB