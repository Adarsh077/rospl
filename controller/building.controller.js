import { buildingService } from "../service/index.js";

export const register = async (ctx) => {
  const body = await ctx.request.body().value;

  const response = await buildingService.register({
    name: body.name,
    password: body.password,
  });

  ctx.response.body = response;
};

export const login = async (ctx) => {
  const body = await ctx.request.body().value;

  const response = await buildingService.login({
    buildingId: body.buildingId,
    password: body.password,
  });

  ctx.response.body = response;
};

export const findAll = async (ctx) => {
  const carNumber = ctx.request.url.searchParams.get("carNumber");

  if (carNumber) {
    const response = await buildingService.findBuildingsByCarId({
      carNumber: carNumber,
    });

    ctx.response.body = response;
  } else {
    const response = await buildingService.findAll();

    ctx.response.body = response;
  }
};
