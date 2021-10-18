import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase

describe("Create Car", () => {
    beforeEach(() => {
        createCarUseCase = new CreateCarUseCase();
    })

    it("should be abele to create a new car", async () => {
        await createCarUseCase.execute({
            name: "Name Car",
            description: "Decription Car",
            daily_rate: 100,
            licence_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category"
        });
    })
})