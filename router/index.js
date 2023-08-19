import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { buildingRouter } from "./building.router.js";
import { carRouter } from "./car.router.js";

export const appRouter = new Router().use(
  "/api",
  buildingRouter.routes(),
  carRouter.routes()
);
