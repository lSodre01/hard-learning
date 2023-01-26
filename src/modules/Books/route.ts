import express from "express";
const router = express.Router();
import booksController from "./booksController";

 router.get("/books", booksController.list);
 router.post("/books/:id", booksController.create);
 router.patch("/books/:id", booksController.update);
 router.get("/books/id:", booksController.detail);   
 router.delete("/books/:id", booksController.delete);

 export default router