import express, { request } from "express";
import AppRouter from "./routes/index.mjs"

const app = express()
app.use(express.json())
// sesssion
// cookies
// validator
// passport-local
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send("hello, World!!")
})

app.use(AppRouter)


// app.get('/api/users',(request,response) => {
//     const data = request.query
//     response.send({"data":data})
// })
// put,patch,delete

app.listen(PORT , () => {
    console.log( `Running on ${PORT}`)
});

