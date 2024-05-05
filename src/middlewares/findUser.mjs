import { allUsers } from "../utils/Constant.mjs"

const findById = (request,response) => {
    let { params : { id }} = request
    let specificUsers = allUsers.find(users => users.id === String(id))
    if (!specificUsers) response.status(401).send({"msg": "Bad Credtials"})
    response.status(200).send(specificUsers)
}



export { findById }