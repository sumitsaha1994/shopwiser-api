const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./.env") });
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to shopwiser api</h1>");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`listening to port ${process.env.PORT || 5000}`);
});
