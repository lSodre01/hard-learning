import express from "express";
import booksRouter from "./modules/Books/route"
const router = express.Router();

router.use(booksRouter);

export default router;