import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoresRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name)
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategoryDTO): void {
        return null;
    }

}

export { PostgresCategoriesRepository }