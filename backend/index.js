const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config()


const app = express();
const port = process.env.PORT || 5000;
console.log("Server started");



connectDB();
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)


app.get("/", (req, res) => {res.send("Hello World")})




app.listen(port, ()=>{
    console.log(`Port running at  http://localhost:${port}`);
})