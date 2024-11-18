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

router.delete("/deletar/:idFlashcard", function (req, res) {
  flashcardController.deletar(req, res);
})

router.post("/avaliar/:idFlashcard", function (req, res){
  flashcardController.avaliar(req,res)
})

router.put("/avaliarExistente/:idFlashcard", function (req, res){
  flashcardController.avaliarExistente(req,res)
})

module.exports = router