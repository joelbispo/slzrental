import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create ({description, name}: ICreateSpecificationDTO): void;

    findBynName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }