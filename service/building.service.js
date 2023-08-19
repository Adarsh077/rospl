import { buildingDataLayer } from "../data/index.js";

export const register = async ({ buildingId, name, password }) => {
  const { building } = await buildingDataLayer.findById({ buildingId });

  if (building) {
    return { error: "Building Already exists" };
  }

  const { buildingId: createdBuildingId } = await buildingDataLayer.upsert({
    buildingId,
    name,
    password,
  });

  return { buildingId: createdBuildingId };
};

export const login = async ({ buildingId, password }) => {
  const { building } = await buildingDataLayer.findById({
    buildingId,
  });

  if (!building) {
    return { error: "Building not found" };
  }

  if (building.password !== password) {
    return { error: "Incorrect password" };
  }

  return { building };
};
