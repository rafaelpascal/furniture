const express = require("express");
const nodemailer = require("nodemailer");
const User = require("../model/User");
require("dotenv").config();

const html = `${
  "<p><b>Your Login Details for Xpress Riders Management System</b><br><b>Email:</b>" +
  User.email +
  "<br><b>Password: </b> " +
  User.password +
  ' <br><a href="http://localhost:4200/">Click here to login</a> </p>'
}
`;

async function main() {
  let transporter = nodemailer.createTransport({
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
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
main();

module.exports = nodemailer;
