const express = require("express");
const iniate = express();
const connectDB = require("./config/database");
const User = require("./models/user");

iniate.use(express.json());

iniate.get("/userByEmailID", async (req, res) => {
  try {
    const email = req.body.emailId;
    const user = await User.findOne({ emailId: email });
    if (!user) {
      res.status(404).send("User Not Found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Error in fetching feed Data" + err.message);
  }
});

//updating user details api
iniate.patch("/user/:userId",async(req,res)=>{
  const userId = req.params?.userId;
  const data = req.body;

  try{
    const ALLOWED_UPDATED_FIELDS = ["firstName","lastName","middleName","gender","password","about","skills"];
    const IS_UPDATED_ALLOWED = Object.keys(data).every((k)=>
      ALLOWED_UPDATED_FIELDS.includes(k)
    );
    if(!IS_UPDATED_ALLOWED){
      throw new Error("Update is not allowed");
    }
    console.log(data?.skills.length)
    if(data?.skills.length >=10){
      throw new Error("Skills should not be added more than 10")
    }
    const result = await User.findByIdAndUpdate(userId,data,{runValidators:true});
    if(!result){
      res.status(404).send("User is not present to update");
    }
    else{
    res.send("User data is updated successfully");
    }
  }
  catch(err){
    res.status(400).send("Error in updating the user Data " + err.message);
  }
})

// delete api to delete a specific user from the db

iniate.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const result = await User.findByIdAndDelete({ _id: userId });

    console.log(result);
    if (!result) {
      res.status(404).send("User is not enrolled with Dev Tinder to delete");
    } else {
      res.send("user is been delete");
    }
  } catch (err) {
    res.status(400).send("Error in Deleting the user Data" + err.message);
  }
});

// get api call to get all the users data into feed
iniate.get("/feed", async (req, res) => {
  try {
    const feedData = await User.find();
    if (!feedData) {
      res.status(404).send("Currently There are no users in Dev Tinder");
    } else {
      res.send(feedData);
    }
  } catch (err) {
    res.status(400).send("Error in fetching feed Data" + err.message);
  }
});

// post api call to enroll or sigup the user
iniate.post("/signup", async (req, res) => {
  const user = new User(req.body);
  const data = req.body
  try {
    const ALLOWED_UPDATED_FIELDS = ["firstName","lastName","middleName","emailId","dateOfBirth","gender","password","about","skills"];
    const IS_UPDATED_ALLOWED = Object.keys(data).every((k)=>
      ALLOWED_UPDATED_FIELDS.includes(k)
    );
    if(!IS_UPDATED_ALLOWED){
      throw new Error("Failed to create new user");
    }
    await user.save();
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
