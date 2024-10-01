const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 50,
    },
    middleName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender Data is not Valid");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: "I am a software Engineer in Dev Tinder",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
