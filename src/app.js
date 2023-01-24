const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

/* Routers */
const concesionariasRouter = require("./routes/concesionarias");
const marcasRouter = require("./routes/marcas");

app.use(express.static("public"));

/* Template engine */
app.set("view engine", "ejs");
app.set("views", "./src/views");

/* Middlewares Routes */
app.use("/", concesionariasRouter);
app.use("/marcas", marcasRouter);

app.listen(PORT, () => 
    console.log(`Server listen in port ${PORT}\n http://localhost:${PORT}`
));