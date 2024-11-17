var database = require("../database/config");

function buscarDeckPorUsuario(usuarioId) {

  var instrucaoSql = `SELECT idDeck, titulo FROM deck WHERE fkUsuario = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, titulo) {
  
  // var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  var instrucaoSql = `INSERT INTO deck (titulo, fkUsuario) VALUES ('${titulo}', ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idDeck) {
  var instrucaoSql = `DELETE FROM deck WHERE idDeck = ${idDeck}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizar(idDeck, titulo){

  var instrucaoSql = `UPDATE deck SET titulo = '${titulo}' WHERE idDeck = ${idDeck}`

  console.log('Executanto a instrução SQL: \n' + instrucaoSql)
  return database.executar(instrucaoSql)
}

function contarDecks(idUsuario) {
  var instrucao = `
    SELECT COUNT(*) AS totalDecks FROM deck WHERE fkUsuario = ${idUsuario};
  `;
  return database.executar(instrucao);
}

// function contarFlashcards(idDeck) {
//   var instrucao = `
//     SELECT COUNT(*) AS totalFlashcards FROM flashcard WHERE fkDeck = ${idDeck};`;
//   return database.executar(instrucao);
// }

function contarFlashcards(idUsuario) {
  var instrucao = `
  
    SELECT COUNT(*) AS totalFlashcards FROM flashCard f JOIN deck d ON f.fkDeck = d.idDeck JOIN usuario u ON d.fkUsuario = u.idUsuario WHERE u.idUsuario = ${idUsuario};
    `;
  return database.executar(instrucao);
}
// SELECT COUNT(*) AS totalFlashcards FROM flashcard WHERE fkDeck = ${idUsuario};

// 'SELECT COUNT(*) FROM flashCard f JOIN deck d ON f.fkDeck = d.idDeck JOIN usuario u ON d.fkUsuario = u.idUsuario WHERE u.idUsuario = 1'

// INSERT INTO deck (titulo, fkUsuario) VALUES (titulo, idUsuario)

module.exports = {
  buscarDeckPorUsuario,
  cadastrar,
  deletar,
  atualizar,
  contarDecks,
  contarFlashcards
}

