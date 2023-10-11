import { buildingDataLayer, carDataLayer } from "../data/index.js";

export const register = async ({ name, password }) => {
  const { buildingId } = await buildingDataLayer.upsert({
    name,
    password,
  });

  return { buildingId };
};

export const login = async ({ buildingName, password }) => {
  const { building } = await buildingDataLayer.findOne({
    buildingName,
  });

  if (!building) {
    return { error: "Building not found" };
  }

  if (building.password !== password) {
    return { error: "Incorrect password" };
  }

  return { building };
};

export const findAll = async () => {
  const { buildings } = await buildingDataLayer.findAll();

  return { buildings };
};

export const findBuildingsByCarId = async ({ carNumber }) => {
  const { car } = await carDataLayer.findOne({
    carNumber,
  });

  if (!car || !car.buildingid) return { message: "No building found!" };

  const { building } = await buildingDataLayer.findById({
    buildingId: car.buildingid,
  });

  if (!building) return { message: "No building found!" };

  return { building };
};
