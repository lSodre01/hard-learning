"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const booksController_1 = __importDefault(require("./booksController"));
router.get("/books", booksController_1.default.list);
router.post("/books/:id", booksController_1.default.create);
router.patch("/books/:id", booksController_1.default.update);
router.get("/books/id:", booksController_1.default.detail);
router.delete("/books/:id", booksController_1.default.delete);
exports.default = router;
