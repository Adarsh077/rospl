import { carService } from "../service/index.js";

export const addCar = async (ctx) => {
  const body = await ctx.request.body().value;
  const { buildingId } = await ctx.params;

  const response = await carService.addCar({
    buildingId: buildingId,
    carNumber: body.carNumber,
  });

  ctx.response.body = response;
};

export const findAllCarsByBuildingId = async (ctx) => {
  const { buildingId } = await ctx.params;

  const response = await carService.findAllCarsByBuildingId({
    buildingId: buildingId,
  });

  ctx.response.body = response;
};

export const deleteCar = async (ctx) => {
  const { carId } = await ctx.params;

  await carService.deleteCar({
    carId,
  });

  ctx.response.body = { status: "success" };
};
