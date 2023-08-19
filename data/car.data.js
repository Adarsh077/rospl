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

export const findAll = async ({ buildingId }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM cars WHERE buildingId = ? ALLOW FILTERING",
    [buildingId]
  );

  return { cars: response.rows };
};

export const findOne = async ({ carId }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM cars WHERE id = ?",
    [carId]
  );

  return { car: response.rows[0] };
};

export const deleteCar = async ({ carId }) => {
  await cassandraClient.execute("DELETE FROM cars WHERE id = ?", [carId]);
};
