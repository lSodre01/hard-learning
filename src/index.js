"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// importando as rotas
const route_1 = __importDefault(require("./modules/Books/route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
/*
 *  Rotas
 */
app.use("/books", route_1.default);
// Instancia Server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
