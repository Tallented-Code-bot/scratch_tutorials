//initialize variables
const express = require("express");
const mongoose = require("mongoose");
const Tutorial = require("./models/tutorials.js");
const path = require("path");
const PORT = process.env.PORT || 3000;

//connect to mongodb
mongoose.connect("mongodb://localhost/scratch_tutorials");
mongoose.connection
  .once("open", () => {
    console.log("Connection has been made");
    //mongoose.connection.collections.tutorials.drop();
  })
  .on("error", (error) => {
    console.log("Connection error:" + error);
  });
const app = express();

//host static files from the build directory
app.use(express.static(path.resolve(__dirname, "../build")));

//return hello world in json
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//create a new tutorial
app.post("/api/tutorials/", async (req, res) => {
  console.log(`Incoming Post request /api/tutorials/`);
  console.log(
    `Creating new tutorial:\n{\t"author":${req.query.author},\n\t"body":${req.query.body}\n}`
  );
  const tutorial = new Tutorial({
    author: req.query.author,
    body: req.query.body,
    title: req.query.title,
  });
  try {
    const newTutorial = await tutorial.save();
    res.status(201).json(newTutorial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get all tutorials
app.get("/api/tutorials/all/", async (req, res) => {
  console.log(`Incoming Get request /api/tutorials/all/`);
  console.log(`Returning all tutorials`);
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get one tutorial
app.get("/api/tutorials/:id", async (req, res) => {
  console.log(`Incoming Get request /api/tutorials/${req.params.id}`);
  try {
    const tutorials = await Tutorial.find({ _id: req.params.id });
    res.json(tutorials);
    console.log(`Returning:`);
    console.log(tutorials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//serve the react application from /
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/", "index.html"));
});

//listen on port 3000 by default
app.listen(PORT, () => {
  console.log(`Server listening on https://localhost:${PORT}`);
});
