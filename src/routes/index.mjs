import { Router } from "express";
import localRouter from "./getById.mjs";

const appRouters = Router()

appRouters.use(localRouter)


export default appRouters;