import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

import uploadConfig from "@config/upload";

import { Router } from "express";
import { ensureAdmin } from "../middllewares/ensureAdmin";
import { ensureAuthenticated } from "../middllewares/ensureAuthenticate";
import multer from "multer";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";


const carsRoutes = Router();

let createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);



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

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export { carsRoutes  }