//connect to mongodb
const User = require("../models/signupModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "elrkgbekrbgaskjdbgaksdjbg;aelsrjdbg;asljdgba;dslfgb;asdjfgb";
const nodemailer = require("nodemailer");

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
  const hashPassword2 = await bcrypt.hash(plainTextPasswordB, 10);

  try {
    const response = await User.create({
      first_name,
      last_name,
      registration_number,
      index_number,
      email,
      phone,
      password: hashPassword1,
      re_enter_password: hashPassword2,
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
      id: user.id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `http://localhost:8000/resetpassword/${user.id}/${token}`;
    console.log(link);
/*
    // Create a transporter with your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "99imalsharathnayake@gmail.com",
        pass: "Imalsha@123",
      },
    });

    // Construct the email content
    const mailOptions = {
      from: "99imalsharathnayake@gmail.com",
      to: user.email,
      subject: "Reset Password",
      text: `Click the link to reset your password: ${link}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
*/
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

//nevigate to reset password page
const resetpasswordView = async (req, res, next) => {
  const { id, token } = req.params;
  try {
    const user = await User.findOne({ _id: id }).lean();

    if (!user) {
      res.send("Invalid ID");
      return;
    }

    const secret = JWT_SECRET + user.password;
    const payload = jwt.verify(token, secret);
    res.render("resetPassword");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

//update the new password
const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const { password1: plaintext1, password2: plaintext2 } = req.body;

  if (plaintext1 !== plaintext2) {
    return res.json({ status: "error", message: "Passwords do not match" });
  }

  if (plaintext1.length < 8) {
    return res.json({
      status: "error",
      message:
        "Passwords length is too small.It should be al least 8 charactters",
    });
  }

  const hashPassword11 = await bcrypt.hash(plaintext1, 10);
  const hashPassword12 = await bcrypt.hash(plaintext2, 10);

  try {
    const user = await User.findOne({ id }).lean();

    if (id !== user.id) {
      res.send("invalied id");
      return;
    }

    const secret = JWT_SECRET + user.password;

    const payload = jwt.verify(token, secret);
    res.render("resetPassword", { emai: user.email });

    const response = await User.updateOne(
      { _id: id },
      { password: hashPassword11, re_enter_password: hashPassword12 }
    );

    console.log("User updated successfully", response);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
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
