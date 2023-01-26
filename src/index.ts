import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// importando as rotas

import booksRouter from "./modules/Books/route"

dotenv.config();

const app = express();
const port = process.env.PORT



/*
 *  Rotas
 */
app.use("/books", booksRouter)


// Instancia Server

app.listen(port, ()=> {

    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});