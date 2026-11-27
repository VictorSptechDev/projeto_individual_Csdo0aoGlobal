var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post("/cadastrar", function (req, res) {
    partidaController.cadastrar(req, res);
});

router.get("/usuario/:idUsuario", function (req, res) {
    partidaController.listarPorUsuario(req, res);
});

module.exports = router;
