var database = require("../database/config");


function buscarFlashcardsPorDeck(idDeck) {

  var instrucaoSql = `SELECT idFlashCard, titulo, pergunta, resposta, dtCriacao FROM flashcard WHERE fkDeck = ${idDeck}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarFlashcardsPorDeck
  // cadastrar,
  // deletar,
  // atualizar
}