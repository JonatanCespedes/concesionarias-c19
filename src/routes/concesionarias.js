const express = require("express");
const router = express.Router();
const controller = require("../controllers/concesionariasController");

router.get("/", controller.index);
router.get("/sucursales", controller.sucursales);
router.get("/sucursales/:sucursal", controller.sucursal);

module.exports = router;