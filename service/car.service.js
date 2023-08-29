import { carDataLayer, buildingDataLayer } from "../data/index.js";

export const addCar = async ({ buildingId, carNumber }) => {
  const { building } = await buildingDataLayer.findById({ buildingId });
  if (!building) {
    return { error: "Building not found!" };
  }

  const { cars } = await carDataLayer.findAll({
    buildingId,
  });

  const doesExists = cars.find((car) => car.carnumber === carNumber);
  if (doesExists) {
    return { error: "Car already added to the building!" };
  }

  const { car } = await carDataLayer.upsert({
    buildingId,
    carNumber,
  });

  return { car };
};

export const findAllCarsByBuildingId = async ({ buildingId }) => {
  const { cars } = await carDataLayer.findAll({
    buildingId,
  });
  return { cars };
};

export const deleteCar = async ({ carId }) => {
  await carDataLayer.deleteCar({
    carId,
  });
};
