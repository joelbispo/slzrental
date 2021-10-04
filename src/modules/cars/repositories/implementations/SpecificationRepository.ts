import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = []
    }

    findByName(name: string): Specification {
        return this.specifications.find((specification) => specification.name === name);
    }


    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name, 
            description,
            created_at: new Date(),
        })
        
        this.specifications.push(specification);

    }

}

export {SpecificationRepository}