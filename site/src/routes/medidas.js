var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/respostas", function (req, res) {
    medidaController.respostas(req, res);
});

router.get("/acertos", function (req, res) {
    medidaController.pct_acertos(req, res);
});

router.get("/acertosus/:id_usuario", function (req, res) {
    medidaController.acertosus(req, res);
});


module.exports = router;