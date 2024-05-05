import { validationResult } from "express-validator"
import { CreateUser } from "../mongoose/schemas/notes-user.mjs"

export const addingUser = async (request,response) => {
    const result = validationResult(request);
    console.log(result)
    if (!result.isEmpty()) return response.status(422).send(result.array())
    var usersProjection = { 
        _id: true,
        _v:false
    };    
    let { body } = request
    let UserExist = await CreateUser.find(body,usersProjection).exec()
    if (UserExist){
        return response.status(409).send({"data":UserExist[0],"msg":"Data Exist!!"})
    }
    let Create = new CreateUser(body)
    try{
        let data = await Create.save()
        if(data){
            return response.status(200).send({"data":data})
        }
    }catch(err){
        return response.status(500).send(err)
    }
    
}