const express = require("express");

const iniate = express();
const { adminAuth, userAuth } = require("./middlewares/admin-auth");

iniate.use("/admin", adminAuth);

iniate.post("/user/login", (req, res) => {
  res.send("User Logged in Successfully");
});

iniate.get("/user", userAuth, (req, res) => {
  res.send("Get All User Data");
});
iniate.get("/admin/allUsers", (req, res) => {
  res.send("GetAll User API is called");
});

iniate.delete("/admin/deleteUser", (req, res) => {
  res.send("DeleteUser API called");
});
iniate.listen(7777, () => {
  console.log("Server is connected to the port 7777...!");
});
