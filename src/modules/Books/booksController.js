"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teste = {
    list: (req, res) => {
        res.send("List books");
    },
    create: (req, res) => {
        res.send("book successfully added");
    },
    update: (req, res) => {
        res.send("the book has been updated");
    },
    detail: (req, res) => {
        res.send("book datail");
    },
    delete: (req, res) => {
        res.send("the book has been deleted");
    }
};
exports.default = teste;
