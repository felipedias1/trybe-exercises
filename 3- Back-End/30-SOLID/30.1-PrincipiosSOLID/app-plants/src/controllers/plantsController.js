const plants = require('../services/plantsService');

const getPlantsModels = async (_req, res, _next) => {
  try {
    const allPlants = await plants.getPlantsService();
    return res.status(200).json(allPlants);
  } catch (e) {
    console.log(e.message);
    return e.message
  }
}

module.exports = {
  getPlantsModels,
}