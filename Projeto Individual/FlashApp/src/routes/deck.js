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


router.get("/contagemDecks/:idUsuario", function (req, res) {
  deckController.contarDecks(req, res);
});

// Rota para buscar a contagem de flashcards por usuário
// router.get("/contagemFlashcards/:idDeck", function (req, res) {
//   deckController.contarFlashcards(req, res);
// });

router.get("/contagemFlashcards/:idUsuario", function (req, res) {
    deckController.contarFlashcards(req, res);
  });

router.post('/estudoPorDeck/:idDeck', function (req, res){
  deckController.estudoPorDeck(req, res)
})

router.put('/concluirDeck/:idDeck', function (req, res) {
  deckController.concluirDeck(req, res)
})

router.get(`/decksConcluidos/:idUsuario`, function (req, res){
  deckController.decksConcluidos(req, res)
})

router.get(`/decksEmAndamento/:idUsuario`, function (req, res){
  deckController.decksEmAndamento(req, res)
})



module.exports = router;
