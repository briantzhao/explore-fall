import e from "express";
import express from e;

const app = express();

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});