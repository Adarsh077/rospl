import { buildingService } from "../service/index.js";

export const register = async (ctx) => {
  const body = await ctx.request.body().value;

  const response = await buildingService.register({
    buildingId: body.buildingId,
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
  const response = await buildingService.findAll();

  ctx.response.body = response;
};
