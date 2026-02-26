import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from 'cors';
import connectDB from "./db/connectDB.js";
import patientRouter from './routers/patientRoute.js'
import userRouter from './routers/userRouter.js'
import morgan from "morgan";
import dashboardRoute from "./routers/dashboardRoute.js";

//connection of mongodb
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

//Express Middlewares
app.use(express.json());

app.use(cors())
app.use(morgan('dev'))


//Routes
app.use('/patient', patientRouter)
app.use('/user', userRouter)
app.use('/mmh', dashboardRoute)



app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
}) 
