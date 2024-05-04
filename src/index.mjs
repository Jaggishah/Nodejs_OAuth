import express, { request } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send("hello, World!!")
})

// app.get('/api/users/:id',(request,response) => {
//     const data = request.params.id
//     response.send({"data":data})
// })

// app.get('/api/users',(request,response) => {
//     const data = request.query
//     response.send({"data":data})
// })


app.listen(PORT , () => {
    console.log( `Running on ${PORT}`)
});

