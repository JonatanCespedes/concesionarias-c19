const express = require("express");
const router = express.Router();
const controller = require("../controllers/marcasController");

/* app.js ---- /marcas/ */
router.get("/", controller.marcas);
/* app.js ---- /marcas/:marca */
router.get("/:marca", controller.detalle);

module.exports = router;