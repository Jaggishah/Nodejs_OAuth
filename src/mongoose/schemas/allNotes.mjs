import mongoose from "mongoose";

const Notes = new mongoose.Schema({
    notes_id : {
        type : String
    },
    notes : [
        {
            type: String
        }
    ]
})

export const NotesUser = mongoose.model("Notes",Notes)