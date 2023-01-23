const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const concesionariasRouter = require("./routes/concesionarias");
const marcasRouter = require("./routes/marcas")

app.use("/", concesionariasRouter);
app.use("/marcas", marcasRouter);

app.listen(PORT, () => 
    console.log(`Server listen in port ${PORT}\n http://localhost: ${PORT}`
));