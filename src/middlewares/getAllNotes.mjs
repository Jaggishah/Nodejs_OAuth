import { NotesUser } from "../mongoose/schemas/allNotes.mjs"

export const getAllNotes = async (request,response) => {
    var usersProjection = { 
        _id: true,
        _v:false
    };    
    let { body } = request
    body = body?.id ?  { notes_id : body?.id } : {}
    let notesExist = await NotesUser.find(body,usersProjection).exec()
    if (notesExist){
        return response.status(200).send({"data":notesExist})
    }
    
        return response.status(500).send(err)
}