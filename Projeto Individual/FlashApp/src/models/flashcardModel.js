var database = require("../database/config");


function buscarFlashcardsPorDeck(idDeck) {

  var instrucaoSql = `SELECT idFlashCard, titulo, pergunta, resposta, dtCriacao FROM flashcard WHERE fkDeck = ${idDeck}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(titulo, pergunta, resposta, idDeck) {
  
  // var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  var instrucaoSql = `INSERT INTO flashcard (titulo, pergunta, resposta, fkDeck) VALUES ('${titulo}', '${pergunta}', '${resposta}',${idDeck})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idFlashCard) {
  var instrucaoSql = `DELETE FROM flashcard WHERE idFlashCard = ${idFlashCard}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function avaliar(idFlashCard, avaliacao){
  var instrucaoSql  = `INSERT INTO avaliacao (statusAvaliacao, fkFlashCard) VALUES
	(${avaliacao}, ${idFlashCard});`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarFlashcardsPorDeck,
  cadastrar,
  deletar,
  avaliar
  // atualizar
}