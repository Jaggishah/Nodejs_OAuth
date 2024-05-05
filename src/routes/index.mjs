import { Router } from "express";
import localRouter from "./getById.mjs";
import authRouter from "./autho.mjs";
const appRouters = Router()

appRouters.use(localRouter)
appRouters.use(authRouter)


export default appRouters;