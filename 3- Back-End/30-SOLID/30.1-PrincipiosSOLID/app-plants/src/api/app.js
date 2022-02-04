const express = require("express");
const app = express();
const plantsModule = require("../models/plants.js");
const plants = require("../controllers/plantsController")

app.use(express.json());

app.get("/plants", plants.getPlantsModels);

app.listen(3001, function () {
  console.log("Ouvindo a porta 3001!");
});