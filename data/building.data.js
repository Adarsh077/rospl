import { cassandraClient } from "../service/index.js";

export const create = async ({ buildingId, name, password }) => {
  const response = await cassandraClient.execute(
    "INSERT INTO buildings (id, name, password) VALUES (?, ?, ?)",
    [buildingId, name, password]
  );

  console.log(response);
  return response;
};

export const findById = async (buildingId) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM buildings WHERE id=?",
    [buildingId]
  );

  console.log(response.rows);
  return response.rows;
};
