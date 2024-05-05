import { validationResult } from "express-validator"
import { CreateUser } from "../mongoose/schemas/notes-user.mjs"

export const addingUser = async (request,response) => {
    const result = validationResult(request);
    console.log(result)
    if (!result.isEmpty()) return response.status(422).send(result.array())
    let { body } = request
    let Create = new CreateUser(body)
    try{
        let data = await Create.save()
        if(data){
            response.status(200).send(data)
        }
    }catch(err){
        response.status(500).send(err)
    }
    
}