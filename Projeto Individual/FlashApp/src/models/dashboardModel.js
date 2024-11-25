var database = require("../database/config");

function buscarFlashcardsUltimos5Dias(idUsuario) {
  var instrucaoSql = `
      SELECT 
      DATE(f.dtCriacao) as dataCriacao,
      COUNT(*) as quantidade
    FROM 
      flashCard f
    JOIN 
      deck d ON f.fkDeck = d.idDeck
    JOIN 
      usuario u ON d.fkUsuario = u.idUsuario
    WHERE 
      u.idUsuario = ${idUsuario} AND DATE(f.dtCriacao) >= CURDATE() - INTERVAL 6 DAY AND DATE(f.dtCriacao) < CURDATE() + INTERVAL 1 DAY
    GROUP BY 
      DATE(f.dtCriacao)
    ORDER BY 
      DATE(f.dtCriacao);
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscarAvaliacao(idUsuario){

  var instrucaoSql = `
      SELECT COUNT(CASE WHEN statusAvaliacao = 0 THEN 1 END) AS quantidade_zero,
	            COUNT(CASE WHEN statusAvaliacao = 1 THEN 1 END) AS quantidade_um,
              COUNT(*) AS qtdTotal
      FROM avaliacao 
        JOIN flashcard on fkFlashCard = idFlashCard
        JOIN deck ON fkDeck = idDeck
        JOIN usuario ON fkUsuario = idUsuario
      WHERE idUsuario = ${idUsuario};
  ` 

  return database.executar(instrucaoSql)
}


function estudoDeckPorDia(idUsuario){

  var instrucaoSql = `
SELECT DATE(dtEstudo) AS dataEstudo ,SUM(qtdEstudo) AS totalEstudado FROM estudo
  JOIN deck on fkDeck = idDeck
  JOIN usuario on fkUsuario = idUsuario
WHERE idUsuario = ${idUsuario} AND DATE(dtEstudo) >= CURDATE() - INTERVAL 6 DAY AND DATE(dtEstudo) < CURDATE() + INTERVAL 1 DAY
GROUP BY DATE(dtEstudo)
ORDER BY DATE(dtEstudo);
` 

return database.executar(instrucaoSql)
}

module.exports = {
  buscarFlashcardsUltimos5Dias,
  buscarAvaliacao,
  estudoDeckPorDia
}