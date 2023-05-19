//connect to mongodb
const User = require("../models/signupModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "elrkgbekrbgaskjdbgaksdjbg;aelsrjdbg;asljdgba;dslfgb;asdjfgb";
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

//nevigate to signup page
const signupView = async (req, res, next) => {
  res.render("signup");
};

//create the user and store the data in database
const signup = async (req, res, next) => {
  const {
    first_name,
    last_name,
    registration_number,
    index_number,
    email,
    phone,
    password: plainTextPasswordA,
    re_enter_password: plainTextPasswordB,
  } = req.body;

  if (plainTextPasswordA !== plainTextPasswordB) {
    return res.json({ status: "error", message: "Passwords do not match" });
  }

  if (plainTextPasswordA.length < 8) {
    return res.json({
      status: "error",
      message:
        "Passwords length is too small.It should be al least 8 charactters",
    });
  }

  if (phone.length < 10) {
    return res.json({
      status: "error",
      message:
        "Phone number length is too small.It should be al least 10 charactters",
    });
  }

  if (!first_name || typeof first_name !== "string") {
    return res.json({ status: "error", message: "invalied first name" });
  }

  if (!last_name || typeof last_name !== "string") {
    return res.json({ status: "error", message: "invalied last name" });
  }

  if (!registration_number || typeof registration_number !== "string") {
    return res.json({
      status: "error",
      message: "invalied registration number",
    });
  }

  if (!index_number || typeof index_number !== "string") {
    return res.json({ status: "error", message: "invalied index number" });
  }

  const hashPassword1 = await bcrypt.hash(plainTextPasswordA, 10);

  try {
    const response = await User.create({
      first_name,
      last_name,
      registration_number,
      index_number,
      email,
      phone,
      password: hashPassword1,
    });
    console.log("User created successfully", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", message: "Username Already in use" });
    }
    throw error;
  }
  return res.json({ status: "ok" });
};
//...........................................................................................

//nevigate to login page
const loginView = async (req, res, next) => {
  res.render("login");
};

//login to the user account using JWT
const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({
      status: "error",
      message: "Invalid username or password",
    });
  }

  if (!password || typeof password !== "string") {
    return res.json({
      status: "error",
      message: "Invalid password",
    });
  }

  if (await bcrypt.compareSync(password, user.password)) {
    // Username password combination is successful
    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      JWT_SECRET
    );
    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", message: "Invalid username or password" });
};
//................................................................................................

//nevigate to forget password page
const forgotpasswordView = async (req, res, next) => {
  res.render("forgotPassword");
};

//create link to enteres email
const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid E-Mail",
      });
    }

    const secret = JWT_SECRET + user.password;

    //create one time link and valied for 15 minuits
    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `http://localhost:8000/resetpassword/${user._id}/${token}`;
    console.log(link);

    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail, Yahoo, etc.
      auth: {
        user: "faspesdemo@gmail.com",
        pass: "otknrxvanyqutowm",
      },
    });

    const mailOptions = {
      from: "99imalsharathnayake@gmail.com",
      to: user.email,
      subject: "Password Reset",
      text: `Click the link below to reset your password:\n${link}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          status: "error",
          message: "Failed to send password reset email",
        });
      }

      console.log("Email sent:", info.response);

      res.json({
        status: "success",
        message: "Password reset initiated",
      });
    });

    res.json({
      status: "success",
      message: "Password reset initiated",
    });
  } catch (error) {
    // Handle any errors that occurred during the execution
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
//..........................................................................................

// Navigate to reset password page
const resetpasswordView = async (req, res, next) => {
  const { id, token } = req.params;

  const user = await User.findOne({ _id: id }).lean();

  if (!user) {
    return res.send("Invalid ID");
  }

  const secret = JWT_SECRET + user.password;

  try {
    const payload = jwt.verify(token, secret);
    res.render("resetPassword", { email: user.email });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

// Update the new password
const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const { password1, password2 } = req.body;

  const user = await User.findOne({ _id: id }).lean();

  if (!user) {
    return res.send("Invalid user ID");
  }

  const secret = JWT_SECRET + user.password;

  try {
    const payload = jwt.verify(token, secret);

    if (password1 !== password2) {
      return res.json({ status: "error", message: "Passwords do not match" });
    }

    if (password1.length < 8) {
      return res.json({
        status: "error",
        message:
          "Password length is too short. It should be at least 8 characters",
      });
    }

    const hashPassword = await bcrypt.hash(password1, 10);

    const response = await User.updateOne(
      { _id: id },
      { password: hashPassword }
    );
    
    res.send(user);
    console.log("User updated successfully", response);

    return res.json({
      status: "success",
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error.message);
    return res.send(error.message);
  }
};

module.exports = {
  loginView,
  signupView,
  forgotpasswordView,
  resetpasswordView,
  signup,
  login,
  forgetPassword,
  resetPassword,
};
