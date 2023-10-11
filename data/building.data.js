import { cassandraClient } from "../service/index.js";

export const upsert = async ({ name, password }) => {
  const id = cassandraClient.cassandra.types.Uuid.random();

  await cassandraClient.execute(
    "INSERT INTO buildings (id, name, password) VALUES (?, ?, ?)",
    [id, name, password]
  );

  return { buildingId: id };
};

export const findById = async ({ buildingId }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM buildings WHERE id = ?",
    [buildingId]
  );

  return { building: response.rows[0] };
};

export const findOne = async ({ buildingName }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM buildings WHERE name = ? ALLOW FILTERING",
    [buildingName]
  );

  return { building: response.rows[0] };
};

export const findAll = async () => {
  const response = await cassandraClient.execute(
    "SELECT id, name FROM buildings"
  );

  return { buildings: response.rows };
};
