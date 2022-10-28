require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/users.routes");

const { API_PORT } = process.env;

app.use("/user", userRoutes);

app.listen(API_PORT, () => console.log("App listening on port:", API_PORT));
