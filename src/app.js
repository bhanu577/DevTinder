const express = require("express");

const iniate = express();

iniate.use(
  "/getUser",
  (req, res, next) => {
    console.log("I am in 1st Route");
    next();
  },
  (req, re, next) => {
    console.log("I am in 2nd Route");
    next();
  },
  [(req, res, next) => {
    console.log("I am in 3rd Route");
    next();
  },
  (req,res)=>{
    res.send("Response 4 !!!");
  }]
);
iniate.listen(7777, () => {
  console.log("Server is connected to the port 7777...!");
});
