import { carDataLayer } from "../data/index.js";

export const upsert = async ({ buildingId, carNumber }) => {
  const { car } = await carDataLayer.upsert({
    buildingId,
    carNumber,
  });
  return { car };
};
