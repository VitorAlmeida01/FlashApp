var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboardController');

router.get('/ultimos5dias/:idUsuario', function (req,res){
  dashboardController.buscarFlashcardsUltimos5Dias (req, res);
})

router.get('/avaliacaoPorDeck/')


// router.get('/flashcards/ultimos5dias/:idUsuario', (req, res) => {
//   const { idUsuario } = req.params;
// })
module.exports = router;