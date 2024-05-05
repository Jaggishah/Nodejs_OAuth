import { Router } from "express";
import { getAllNotes } from "../middlewares/getAllNotes.mjs"

const localRouter = Router()


localRouter.get('/api/v1/get/notes', getAllNotes)


export  default localRouter