import { Router } from "express";
import localRouter from "./getById.mjs";
// import authRouter from "./autho.mjs";
import createUser from "./createUser.mjs"
const appRouters = Router()

appRouters.use(localRouter)
appRouters.use(createUser)
// appRouters.use(authRouter)


export default appRouters;