var express = require("express");
var router = express.Router();

var deckController = require("../controllers/deckController");

router.get("/:idUsuario", function (req, res) {
  deckController.buscarDeckPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  deckController.cadastrar(req, res);
})

router.delete("/deletar/:idDeck", function (req, res) {
  deckController.deletar(req, res);
})

router.put("/atualizar/:idDeck", function (req, res) {
  deckController.atualizar(req, res);
})

module.exports = router;