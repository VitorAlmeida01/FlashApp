var flashcardModel = require("../models/flashcardModel");

// function buscarCardPorUsuario(req, res) {
//   var idDeck = req.params.idUsuario;

//   if (idDeck == undefined) {
//     res.status(400).send("idUsuario está undefined!");
//     return;
//   }

//   flashcardModel.buscarCardPorUsuario(idDeck).then((resultado) => {
//     if (resultado.length > 0) {
//       res.status(200).json(resultado);
//     } else {
//       res.status(204).json([]);
//     }
//   }).catch(function (erro) {
//     console.log(erro);
//     console.log("Houve um erro ao buscar os decks: ", erro.sqlMessage);
//     res.status(500).json(erro.sqlMessage);
//   });
// }


function buscarFlashcardsPorDeck(req, res) {
  var idDeck = req.params.idDeck;

  flashcardModel.buscarFlashcardsPorDeck(idDeck)
    .then(function (resultado) {
      // res.json(resultado);

      if(resultado.length === 0){
        res.status(204).json([])
      }else{
      res.status(200).json(resultado)
      }
    })
    .catch(function (erro) {
      // console.log(erro);
      console.log("Erro ao buscar flashcards:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


function cadastrar(req, res) {
  // var titulo = req.body.titulo;
  // var idDeck = req.body.idDeck
  // var pergunta = req.body.pergunta
  // var resposta = req.body.resposta

  var {titulo, pergunta, resposta, idDeck} = req.body

  if (titulo == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (pergunta == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    flashcardModel.cadastrar(titulo, pergunta, resposta, idDeck)
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
  var idFlashCard = req.params.idFlashcard;

  if (idFlashCard == undefined) {
      res.status(400).json({ erro: "ID do flashcard está undefined!" });
  } else {
      flashcardModel.deletar(idFlashCard)
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

module.exports = {
  buscarFlashcardsPorDeck,
  cadastrar,
  deletar
  // atualizar
}