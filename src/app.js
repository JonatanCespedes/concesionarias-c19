const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const concesionariasRouter = require("./routes/concesionarias");

app.use("/", concesionariasRouter);

app.listen(PORT, () => 
    console.log(`Server listen in port ${PORT}\n http://localhost: ${PORT}`
));