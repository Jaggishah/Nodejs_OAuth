import { validationResult } from "express-validator"
import { NotesUser } from "../mongoose/schemas/allNotes.mjs"


export const addingNotes = async (request,response) => {
    const result = validationResult(request);
    console.log(result)
    if (!result.isEmpty()) return response.status(422).send(result.array())
    let { body } = request
   
    const update = { $push: { notes: body.notes } };

    NotesUser.findOneAndUpdate({ notes_id: body.notes_id }, update, { new: true })
    .then(updatedDocument => {
        if (updatedDocument) {
            console.log("Successfully updated document:", updatedDocument);
            return response.status(200).send(updatedDocument)
        } else {
            console.log("No document found with the specified `notes_id`.");
            return response.status(404).send({"msg":"Not Found!!!"})
        }
    })
    .catch(error => {
        console.error("Error updating document:", error);
        return response.status(500).send({"msg":"Internal Server Error"})
    });
   
}