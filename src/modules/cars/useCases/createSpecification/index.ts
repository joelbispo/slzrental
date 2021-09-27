import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpeficationController";

const specificationsRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpeficiationController = new CreateSpecificationController(createSpecificationUseCase);


export {createSpeficiationController}