var dashboardModel = require('../models/dashboardModel');

function buscarFlashcardsUltimos5Dias(req, res) {
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
    return;
  }

  dashboardModel.buscarFlashcardsUltimos5Dias(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os flashcards: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarFlashcardsUltimos5Dias
}