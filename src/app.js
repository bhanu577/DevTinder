const express = require("express");

const iniate = express();
iniate.use("/getData",(req,res)=>{
    res.send("Hi bhanu I am from getData");
});

iniate.use("/getUser",(req,res)=>{
    res.send("User : Bhanu Age:25")
});

iniate.use((req,res)=>{
    res.send("Hi Bhanu")
    console.log("Inside Hi Bhanu")
})
iniate.listen(7777,()=>{
    console.log("Server is connected to the port 7777...!")
});

