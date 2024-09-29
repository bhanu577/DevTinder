const express = require("express");
const iniate = express();

iniate.listen(7777, () => {
  console.log("Server is connected to the port 7777...!");
});
