import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpeficationController";


const specificationRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpeficiationController.handle);


export { specificationRoutes }