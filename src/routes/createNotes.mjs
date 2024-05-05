import { Router } from "express";
import { notesVaidators } from "../validators/notesChecker.mjs"
import { addingNotes } from "../middlewares/addingNotes.mjs"
import { checkSchema } from "express-validator";

const localRouter = Router()


localRouter.post('/api/v1/create/notes', checkSchema(notesVaidators), addingNotes)


export  default localRouter