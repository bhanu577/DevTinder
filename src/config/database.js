const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bhanuCustom:bkJooL7Xjk22G6Kk@customlearn.zkvc4.mongodb.net/devTinder"
  );
};

module.exports = connectDB;