const express = require("express");
const routesHandler = require("./routes/handler.js");

const app = express();
// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routesHandler);

const PORT = 8000;

app.listen(8000);
