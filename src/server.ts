import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

//http://localhost:3001
app.listen(3001, () => console.log("Server is running"));