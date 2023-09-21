const asyncHandler = require("../utils/asyncHandler");
const errorHandler = require("../utils/customErrorHandler");
const nodemailer = require("nodemailer");
require("dotenv").config();
const User = require("../model/User");

const createAccount = asyncHandler(async (req, res, next) => {
  // CHECK IF EMAIL ALREADY EXIST
  const checkEmail = await User.findOne({ email: req.body.email });
  if (checkEmail) {
    return next(new errorHandler("Email Already exist", 409));
  }

  // CHECK IF PHONE ALREADY EXIST
  const checkPhone = await User.findOne({ phone: req.body.phone });
  if (checkPhone) {
    return next(new errorHandler("Phone Number Already exist", 409));
  }

  const newUser = new User({
    firstName: req.body.firstName,
    otherName: req.body.otherName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });

  const user = await newUser.save();
  let transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: User.email,
    subject: "OTP",
    html:
      "<p><b>Your Login Details for Xpress Riders Management System</b><br><b>Email:</b>" +
      User.email +
      "<br><b>Password: </b> " +
      User.password +
      ' <br><a href="http://localhost:4200/">Click here to login</a> </p>',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  const { password, ...otherInfo } = user._doc;
  res.status(201).json({ success: true, ...otherInfo });
});

module.exports = {
  createAccount,
};
