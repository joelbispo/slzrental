import { Router } from "express";
import { createSpeficiationController } from "../modules/cars/useCases/createSpecification";


const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {

    return createSpeficiationController.handle(request, response);

})


export { specificationRoutes }