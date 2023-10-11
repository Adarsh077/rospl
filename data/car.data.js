import { cassandraClient } from "../service/index.js";

export const upsert = async ({ carNumber, buildingId, isCar }) => {
  const id = cassandraClient.cassandra.types.Uuid.random();

  await cassandraClient.execute(
    "INSERT INTO cars (id, carNumber, buildingId, isCar) VALUES (?, ?, ?, ?)",
    [id, carNumber, buildingId, isCar]
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

export const findById = async ({ carId }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM cars WHERE id = ?",
    [carId]
  );

  return { car: response.rows[0] };
};

export const findOne = async ({ carNumber }) => {
  const response = await cassandraClient.execute(
    "SELECT * FROM cars WHERE carNumber = ? ALLOW FILTERING",
    [carNumber]
  );

  return { car: response.rows[0] };
};

export const deleteCar = async ({ carId }) => {
  await cassandraClient.execute("DELETE FROM cars WHERE id = ?", [carId]);
};
