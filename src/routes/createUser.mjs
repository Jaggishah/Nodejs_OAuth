import { Router } from "express";
import { userVaidators } from "../validators/userChecker.mjs"
import { addingUser } from "../middlewares/addUser.mjs"
import { checkSchema } from "express-validator";

const localRouter = Router()


localRouter.post('/api/v1/create', checkSchema(userVaidators), addingUser)


export  default localRouter 