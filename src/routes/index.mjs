import { Router } from "express";
import localRouter from "./getById.mjs";
import authRouter from "./autho.mjs";
import createUser from "./createUser.mjs"
import createNotes from "./createNotes.mjs"
import getAllNotes from "../routes/getNotes.mjs"
const appRouters = Router()

appRouters.use(localRouter)
appRouters.use(createUser)
appRouters.use(createNotes)
appRouters.use(getAllNotes)
appRouters.use(authRouter)


export default appRouters;