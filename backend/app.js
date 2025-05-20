//create the server
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config(); //to load the environment variables

//create the express app
const app = express();
//middleware to parse the JSON
app.use(express.json());

connectDB();

//middleware to handle the cors origin
app.use(cors());

//use the user routes
app.use("/api/users", userRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server is running at the port number 5004");

})