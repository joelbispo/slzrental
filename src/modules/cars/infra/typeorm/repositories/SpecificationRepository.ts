import { ICreateSpecificationDTO, ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name,
        })
        return specification;
    }


    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            description,
            name
        });
        const specifications = await this.repository.save(specification);
        return specifications;

    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);
        return specifications;
      }

}

export {SpecificationRepository}