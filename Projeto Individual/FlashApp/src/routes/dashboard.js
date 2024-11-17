var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboardController');

router.get('/ultimos5dias/:idUsuario', 
  dashboardController.buscarFlashcardsUltimos5Dias);

// router.get('/flashcards/ultimos5dias/:idUsuario', (req, res) => {
//   const { idUsuario } = req.params;
// })
module.exports = router;