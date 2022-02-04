const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.lenght;

const verifyOrigin = (origin) => {
  const originValue = origin === 'Brazil' ? 8 : 7;
  return originValue;
}

const calculateWater = (origin, needsSun, size) => {
  const verifyOrigin = verifyOrigin(origin);
  return needsSun ? size * 0.77 + verifyOrigin
    : (size / 2) * 1.33 + verifyOrigin
}


const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = calculateWater(origin, needsSun, size);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = () => {
 return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  localStorage.setItem("plants", JSON.stringify(newPlants));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  return defaultPlants;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
  savePlants
};