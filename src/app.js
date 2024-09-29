const express = require("express");
const iniate = express();
const connectDB = require("./config/database");
const User = require("./models/user");

iniate.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Subba",
    middleName: "Reddy",
    lastName: "Goluguri",
    emailId: "subbsg@gmail.com",
    dateOfBirth: "1998-09-22",
    gender: "Male",
  });
  try {
    user.save();
    res.send("User created successfully..!!");
  } catch (err) {
    res.status(400).send("Error is saving user Data" + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("DataBase Connection is successfully Established");
    iniate.listen(7777, () => {
      console.log("Server is connected to the port 7777...!");
    });
  })
  .catch((err) => {
    console.error("DataBase is not connected");
  });
