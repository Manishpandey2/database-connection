const express = require("express");
const app = express();
const port = 3000;
require("./model/index.js");
app.get("/", (req, res) => {
  res.send("this is home page");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
