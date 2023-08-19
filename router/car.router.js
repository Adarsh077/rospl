import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { carController } from "../controller/index.js";

const router = new Router();

router
  .post("/", carController.addCar)
  .get("/", carController.findAllCarsByBuildingId)
  .delete("/:carId", carController.deleteCar);

export const carRouter = new Router().use(
  "/buildings/:buildingId/cars",
  router.routes(),
  router.allowedMethods()
);
