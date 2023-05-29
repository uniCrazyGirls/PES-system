//call the packages
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const nodemon = require("nodemon");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const { authenticateJWT } = require("./middleware/authMiddleware");



mongoose.connect(
  "mongodb+srv://admin_imalsha:imalsha@cluster0.o9hpbok.mongodb.net/pes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//create app for server.js
const app = express();

//declare the port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
// Serve static files
app.use(express.static(path.join(__dirname, "views")));
app.use("/student", express.static(path.join(__dirname, "views")));
app.use("/admin", express.static(path.join(__dirname, "views")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

//connect to routers
const loginRoute = require("./routers/registerRoute");
const studentRoute = require("./routers/studentRoute");
const adminRoute = require("./routers/adminRoute");

//nevigate to routes
app.use("/",loginRoute);
app.use("/student",authenticateJWT, studentRoute);
app.use("/admin",authenticateJWT, adminRoute);
