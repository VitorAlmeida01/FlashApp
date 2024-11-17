var express = require("express");
var router = express.Router();

var flashcardController = require("../controllers/flashcardController");

// router.get("/deck/:idDeck", function (req, res) {
//   flashcardController.buscarCardPorUsuario(req, res);
// });

router.post("/cadastrar", function (req, res) {
  flashcardController.cadastrar(req, res);
})

router.get("/deck/:idDeck", function (req, res) {
  flashcardController.buscarFlashcardsPorDeck(req, res);
});


module.exports = router