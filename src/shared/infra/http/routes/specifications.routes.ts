import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpeficationController";
import { ensureAuthenticated } from "@shared/infra/http/middllewares/ensureAuthenticate";
import { Router } from "express";
import { ensureAdmin } from "../middllewares/ensureAdmin";


const specificationRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createSpeficiationController.handle
);


export { specificationRoutes }