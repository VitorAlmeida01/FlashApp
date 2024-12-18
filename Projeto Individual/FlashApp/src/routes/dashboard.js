var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboardController');

router.get('/ultimos5dias/:idUsuario', function (req,res){
  dashboardController.buscarFlashcardsUltimos5Dias (req, res);
})

router.get('/avaliacaoPorUsuario/:idUsuario', function (req, res){
  dashboardController.buscarAvaliacao (req, res)
})

router.get('/estudoDeckPorDia/:idUsuario', function (req, res){
  dashboardController.estudoDeckPorDia(req, res)
})

router.get(`/decksConcluidosTotal/:idUsuario`, function (req, res){
  dashboardController.decksConcluidosTotal(req, res)
})


router.get("/deckMaisEstudado/:idUsuario", function (req, res) {
  dashboardController.deckMaisEstudado(req, res);
});

// router.get('/flashcards/ultimos5dias/:idUsuario', (req, res) => {
//   const { idUsuario } = req.params;
// })
module.exports = router;