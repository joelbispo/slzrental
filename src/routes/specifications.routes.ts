import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpeficationController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticate";


const specificationRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpeficiationController.handle);


export { specificationRoutes }