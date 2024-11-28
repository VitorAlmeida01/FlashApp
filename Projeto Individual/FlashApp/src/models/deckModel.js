var database = require("../database/config");

function buscarDeckPorUsuario(usuarioId) {

  var instrucaoSql = `SELECT idDeck, titulo FROM deck WHERE fkUsuario = ${usuarioId} `;
//AND (statusDeck = 0 OR statusDeck IS NULL)
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, titulo) {
  

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
    SELECT COUNT(*) AS totalFlashcards FROM flashcard f JOIN deck d ON f.fkDeck = d.idDeck JOIN usuario u ON d.fkUsuario = u.idUsuario WHERE u.idUsuario = ${idUsuario};
    `;
  return database.executar(instrucao);
}

function estudoPorDeck(idDeck, qtdEstudo){
  var instrucaoVerificar = `SELECT * FROM estudo WHERE fkDeck = ${idDeck} AND DATE(dtEstudo) = CURDATE()`

  return database.executar(instrucaoVerificar)
  .then((resultado) => {
    if(resultado.length === 0){
      var instrucao = `
      INSERT INTO estudo (qtdEstudo, dtEstudo, fkDeck) VALUES
    (${qtdEstudo}, CURRENT_TIMESTAMP, ${idDeck});
    `
    return database.executar(instrucao)
    }else{
      var instrucaoUpdate = `
        UPDATE estudo SET 
          qtdEstudo = qtdEstudo + ${qtdEstudo},
          dtEstudo = CURRENT_TIMESTAMP
          WHERE fkDeck = ${idDeck} AND DATE(dtEstudo) = CURDATE();
      `
      console.log(instrucaoUpdate)
      return database.executar(instrucaoUpdate)
    }
  })
}

function concluirDeck(idDeck, statusDeck){

      var instrucaoUpdate = `UPDATE deck SET statusDeck = ${statusDeck} WHERE idDeck = ${idDeck}`
      console.log(instrucaoUpdate)
      return database.executar(instrucaoUpdate)

}

function decksConcluidos(idUsuario){
  var instrucao = `SELECT idDeck, titulo FROM deck WHERE fkUsuario = ${idUsuario} AND statusDeck = 1 `
  console.log(instrucao)
  return database.executar(instrucao)
}

function decksEmAndamento(idUsuario){
  var instrucao = `SELECT idDeck, titulo FROM deck WHERE fkUsuario = ${idUsuario} AND statusDeck = 0 `
  console.log(instrucao)
  return database.executar(instrucao)

}




module.exports = {
  buscarDeckPorUsuario,
  cadastrar,
  deletar,
  atualizar,
  contarDecks,
  contarFlashcards,
  estudoPorDeck,
  concluirDeck,
  decksConcluidos,
  decksEmAndamento
}

