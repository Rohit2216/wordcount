const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors")
require("dotenv").config()
const {connection}=require("./config/db")
const {urlRoutes}=require("./routes/url.routes")
const app = express();
app.use(cors())

app.use(bodyParser.json());


app.use("/api",urlRoutes)

app.listen(process.env.port, async(req,res) => {
    try {
        await connection
        console.log("Database connected!")
    } catch (error) {
        console.log(erroo)
        console.log("Database not connected!")
    }
    console.log(`Server is running on port ${process.env.port}`);
});