import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Cars";

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>;

    findbyLicensePlate(license_plate: string): Promise<Car>;

}

export { ICarsRepository }