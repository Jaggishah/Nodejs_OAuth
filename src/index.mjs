import express, { request } from "express";
import AppRouter from "./routes/index.mjs"
import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import session from "express-session";
// import passport from "passport";
// import MongoStore from "connect-mongo";



mongoose
	.connect("mongodb://localhost:27017")
	.then(() => console.log("Connected to Database"))
	.catch((err) => console.log(`Error: ${err}`));

const app = express()
app.use(express.json());

// app.use(cookieParser("helloworld"));
// app.use(
// 	session({
// 		secret: "anson the dev",
// 		saveUninitialized: true,
// 		resave: false,
// 		cookie: {
// 			maxAge: 60000 * 60,
// 		},
// 		store: MongoStore.create({
// 			client: mongoose.connection.getClient(),
// 		}),
// 	})
// );

// app.use(passport.initialize());
// app.use(passport.session());


const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send("hello, World!!")
})

app.use(AppRouter)




app.listen(PORT , () => {
    console.log( `Running on ${PORT}`)
});

