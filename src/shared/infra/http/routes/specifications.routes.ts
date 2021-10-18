import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpeficationController";
import { ensureAuthenticated } from "@shared/infra/http/middllewares/ensureAuthenticate";
import { Router } from "express";


const specificationRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpeficiationController.handle);


export { specificationRoutes }