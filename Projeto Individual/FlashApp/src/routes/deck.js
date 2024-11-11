var express = require("express");
var router = express.Router();

var deckController = require("../controllers/deckController");

router.get("/:empresaId", function (req, res) {
  deckController.buscarDeckPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;