import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload"
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticate";

const usersRouters = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);

usersRouters.patch("/avatar", ensureAuthenticated, updateUserAvatarController.handle);

export { usersRouters }