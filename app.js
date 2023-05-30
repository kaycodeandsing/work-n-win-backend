const express = require("express");
const cors = require("cors");
const toDosController = require("./controllers/toDoController.js");

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/toDos", toDosController);

app.get("/", (request, response) => {
    response.send("Welcome to Work-N-Win to-do list app");
  });

  app.get("/:index", (request, response) => {
    response.send("Hello Hard Worker!");
  });  

  //404 page 
  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
 

module.exports = app;