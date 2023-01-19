const fs = require("fs");

const dbConcesionarias = JSON.parse(
    fs.readFileSync("./src/database/concesionarias.json", "utf-8")
);

module.exports = dbConcesionarias;