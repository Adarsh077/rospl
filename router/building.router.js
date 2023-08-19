import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { buildingController } from "../controller/index.js";

const router = new Router();

router.post("/register", buildingController.create);

export const buildingRouter = new Router().use(
  "/building",
  router.routes(),
  router.allowedMethods()
);
