import { Router } from "express";
import { findById } from "../middlewares/findUser.mjs"

const localRouter = Router()


localRouter.get('/api/users/:id',findById)


export  default localRouter 