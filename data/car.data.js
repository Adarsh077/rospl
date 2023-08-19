import { cassandraClient } from "../service/index.js";

export const upsert = async ({ carNumber, buildingId }) => {
  const id = cassandraClient.cassandra.types.Uuid.random();

  await cassandraClient.execute(
    "INSERT INTO cars (id, carNumber, buildingId) VALUES (?, ?, ?)",
    [id, carNumber, buildingId]
  );

  const response = await cassandraClient.execute(
    "SELECT * FROM cars WHERE id=?",
    [id]
  );

  return { car: response.rows[0] };
};
