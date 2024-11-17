var deckModel = require("../models/deckModel");

function buscarDeckPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
    return;
  }

  deckModel.buscarDeckPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os decks: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var titulo = req.body.titulo;
  // var idUsuario = req.body.idUsuario;
  var idUsuario = req.body.idUsuario

  if (titulo == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    deckModel.cadastrar(idUsuario,titulo)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function deletar(req, res) {
  var idDeck = req.params.idDeck;

  if (idDeck == undefined) {
      res.status(400).json({ erro: "ID do deck está undefined!" });
  } else {
      deckModel.deletar(idDeck)
          .then((resultado) => {
              res.status(200).json(resultado);
          })
          .catch((erro) => {
              console.log(erro);
              console.log(
                  "\nHouve um erro ao deletar o deck! Erro: ",
                  erro.sqlMessage
              );
              res.status(500).json({ erro: erro.sqlMessage });
          });
  }
}

function atualizar(req, res){
  var idDeck = req.params.idDeck
  var titulo = req.body.titulo;

  if(idDeck == undefined){
    res.status(400).json({erro: 'Id do deck esta undefined!'})
  }else if(titulo == undefined){
    res.status(400).json({ erro: "Título está undefined!" });
  }
  else{
    deckModel.atualizar(idDeck, titulo)
      .then((resultado) => {
        res.status(200).json(resultado)
      })
      .catch((erro) => {
        console.log(erro)
        console.log('\n Erro ao atualizar o deck: ', erro.sqlMessage)
        res.status(500).json({erro: erro.sqlMessage})
      })
  }

}

function contarDecks(req, res) {
  var idUsuario = req.params.idUsuario;

  deckModel.contarDecks(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function contarFlashcards(req, res) {
  // var idDeck = req.params.idDeck;
  var idUsuario = req.params.idUsuario;

  deckModel.contarFlashcards(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarDeckPorUsuario,
  cadastrar,
  deletar,
  atualizar,
  contarDecks,
  contarFlashcards
}