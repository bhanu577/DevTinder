const express = require("express");

const iniate = express();

iniate.get("/user", (req, res) => {
  res.send({ firstname: "Bhanu", lastname: "Prakash" });
});
iniate.post("/user", (req, res) => {
  res.send("Data Saved to DB successfully");
});

iniate.delete("/user", (req, res) => {
  res.send("Data has been deleted successfully");
});

iniate.get("/abc/:userid/:name/:lastName", (req, res) => {
    console.log(req.params)
  res.send("API Worked");
});
iniate.listen(7777, () => {
  console.log("Server is connected to the port 7777...!");
});
