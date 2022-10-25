require("dotenv").config();
const express = require("express");
const app = express();

const { API_PORT } = process.env;

app.listen(API_PORT, () => {
  console.log("API listening on port :", API_PORT);
});
