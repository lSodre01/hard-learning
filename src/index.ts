import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// importando as rotas

import router from "./routes"

dotenv.config();

const app = express();
const port = process.env.PORT



/*
 *  Rotas
 */
app.use("/", router)


// Instancia Server

app.listen(port, ()=> {

    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});