import { buildingDataLayer } from "../data/index.js";

export const create = ({ buildingId, name, password }) => {
  return buildingDataLayer.create({ buildingId, name, password });
};
