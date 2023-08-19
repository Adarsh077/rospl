import { buildingService } from "../service/index.js";

export const create = async (ctx) => {
  const body = await ctx.request.body().value;

  const response = await buildingService.create({
    buildingId: body.buildingId,
    name: body.name,
    password: body.password,
  });

  ctx.response.body = response;
};
