const express = require("express");
const iniate = express();
const connectDB = require("./config/database");
const User = require("./models/user");

iniate.use(express.json());

iniate.get("/userByEmailID",async(req,res)=>{
    const email = req.body.emailId
    const user = await User.findOne({emailId:email});
    if(!user){
      res.status(404).send("User Not Found");
    }
    else{
      res.send(user);
    }
})
iniate.post("/signup", async (req, res) => {
  const user = new User(req.body);
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
