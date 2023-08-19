import { carService } from "../service/index.js";

export const upsert = async (ctx) => {
  const body = await ctx.request.body().value;
  const { buildingId } = await ctx.params;

  const response = await carService.upsert({
    buildingId: buildingId,
    carNumber: body.carNumber,
  });

  ctx.response.body = response;
};
