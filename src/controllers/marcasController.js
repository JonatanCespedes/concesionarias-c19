const db = require("../database");

module.exports = {
    marcas: (req, res) => {
        // 1 - Obtener los autos de la db
        // 2 - Obtener las marcas de todos los autos
      /*   let marcas = [];
        
        db.forEach(sucursal => {
            sucursal.autos.forEach((auto) => {
                marcas.push(auto.marca)
            })
        }); */
        // 3 - Obtener valores unicos de las marcas

      /*   let marcasUnicas = marcas.filter((marca, index, elements) => {
            return elements.indexOf(marca) == index;
        }) */
        // 4 - Enviar al cliente
        /* res.send(marcasUnicas) */
        let marcas = [];

        db.forEach(sucursal => {
            sucursal.autos.forEach((auto) => {
                marcas.push(auto.marca)
            })
        });
        let marcasUnicas = new Set(marcas);
        let result = [...marcasUnicas];
        res.send(result)
    },
    detalle: (req, res) => {
        let marca = req.params.marca;

        let autos = [];

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => autos.push(auto))
        })

        let autosFiltradosPorMarca = autos.filter(auto => auto.marca === marca);
        let autosParaLaVista = autosFiltradosPorMarca.map(auto => {
            return {
                marca: auto.marca,
                modelo: auto.modelo,
                anio: auto.anio
            }
        });

        res.send(autosParaLaVista)
    }
}