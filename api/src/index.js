require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");

const { API_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.connect((error) => {
  if (error) {
    console.log(
      "A error has been occurred " + "while connecting to database.",
      error
    );
    throw error;
  }

  //If Everything goes correct, Then start Express Server
  app.listen(API_PORT, () => {
    console.log(
      "Database connection is Ready and " + "Server is Listening on Port ",
      API_PORT
    );
  });
});
