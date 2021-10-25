import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

import { Router } from "express";
import { ensureAdmin } from "../middllewares/ensureAdmin";
import { ensureAuthenticated } from "../middllewares/ensureAuthenticate";


const carsRoutes = Router();

let createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();



carsRoutes.post(
    "/", 
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticated,
    ensureAdmin,
    createCarSpecificationController.handle
  );

carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes  }