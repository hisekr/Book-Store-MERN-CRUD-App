import express from "express";
import { PORT, mongoDbURl } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//Option: Allow all origins with default of cors(*)
app.use(cors());
//option2: allow costom origins
/*
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);
*/



app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Hemlo Stranger");
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDbURl)
    .then(() => {
        console.log('App Connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
});
    })
    .catch((error) => {
        console.log(error);
    });