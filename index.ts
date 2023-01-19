import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8000;

app.get("/", (req, res) => {

    res.send("Hard Learning Server")
})

app.listen(port, ()=> {

    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});