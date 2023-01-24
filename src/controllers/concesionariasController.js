const db = require("../database");

module.exports = {
    index: (req, res) => {
        return res.render("index", {
            sucursales: db,
        })
    },
    sucursales: (req, res) => {
        let concesionarias = db.map(({sucursal, telefono, direccion})=> {
            return {
                sucursal,
                telefono,
                direccion,
            }
        })

        return res.send(concesionarias)
    },
    sucursal: (req, res) => {
        const nombreDeSucursal = req.params.sucursal.toLowerCase().trim();

        const sucursal = db.find(concesionaria => 
            concesionaria.sucursal.toLowerCase() === nombreDeSucursal
        );

        if(typeof sucursal === "undefined") {
            return res.send("Sucursal no existe")
        }

        return res.render("detalleSucursal", {
            sucursal
        });
    },
}