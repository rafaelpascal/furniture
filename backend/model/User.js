const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Requires"],
      min: [10, "First Name Must not be less than 10 characters"],
      max: [100, "First Name Must not exceed 100 characters"],
    },
    otherName: {
      type: String,
      required: [true, "Other Name is Requires"],
      min: [10, "Other Name Must not be less than 10 characters"],
      max: [100, "Other Name Must not exceed 100 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Requires"],
      min: [10, "Last Name Must not be less than 10 characters"],
      max: [100, "Last Name Must not exceed 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone is Requires"],
    },
    email: {
      type: String,
      required: [true, "Email is Requires"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: [true, "Email Already Exist"],
    },
    password: {
      type: String,
      required: [true, "must provide Password"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      lastName: this.lastName,
    },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
