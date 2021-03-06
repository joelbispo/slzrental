import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("Should be abele to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name Car",
            description: "Decription Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category"
        });
        expect(car).toHaveProperty("id");
    })

    it("Should not be able to create a car with existent license plate", () => {
         
        expect(async () => {
            await createCarUseCase.execute({
                name: "Car 1",
                description: "Decription Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category"
            });

            await createCarUseCase.execute({
                name: "Car 2",
                description: "Decription Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category"
            });
        }).rejects.toBeInstanceOf(AppError);
            
    })
    it("Should not be able to create a car with available true by default", async () => {
         
        const car = await createCarUseCase.execute({
            name: "Car Available",
            description: "Decription Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category"
        });

        expect(car.available).toBe(true);
            
    })
})