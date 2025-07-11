const express = require("express");
const path = require("path");

const app = express();

const student = {
  name: "Aditya",
  college: "LPU"
};

app.get("/", (req, res) => {
  res.status(200).header({ "Content-Type": "application/json" }).json(student).end();
});
app.get("/about", (req, res) => {
  res.status(200).header({ "Content-Type": "text/html" }).send("<h1>About</h1>").end();
});
app.get("/contact", (req, res) => {
  res
    .status(200)
    .header({ "Content-Type": "text/html" })
    .sendFile(path.join(__dirname, "contact.html"));
});

app.listen(3001, () => console.log("Server is running on 3001"));
