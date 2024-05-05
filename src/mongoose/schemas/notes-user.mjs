import mongoose from "mongoose";

const notesUser = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.String,
        require: true,
        unique: true,
    },
    password:{
        type:mongoose.Schema.Types.String,
        require: true,
    }
})

export const CreateUser = mongoose.model("Users",notesUser)