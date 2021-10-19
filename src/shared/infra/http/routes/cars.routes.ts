import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { Router } from "express";


const carsRoutes = Router();

let ceateCarController = new CreateCarController();

carsRoutes.post("/", ceateCarController.handle);

export { carsRoutes  }
