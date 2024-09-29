const express = require("express");
const iniate = express();
const connectDB = require("./config/database")

connectDB().then(() => {
  console.log("DataBase Connection is successfully Established");
  iniate.listen(7777, () => {
    console.log("Server is connected to the port 7777...!");
  });  
}).catch(err =>{
  console.error("DataBase is not connected")
});