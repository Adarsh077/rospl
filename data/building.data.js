import { cassandraClient } from "../service/index.js";

export const upsert = async ({ buildingId, name, password }) => {
  await cassandraClient.execute(
    "INSERT INTO buildings (id, name, password) VALUES (?, ?, ?)",
    [buildingId, name, password]
  );

  return { buildingId };
};

export const findById = async ({ buildingId }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM buildings WHERE id = ?",
    [buildingId]
  );

  return { building: response.rows[0] };
};
