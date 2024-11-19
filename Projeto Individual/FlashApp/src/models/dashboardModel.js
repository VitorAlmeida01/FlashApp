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

module.exports = {
  buscarFlashcardsUltimos5Dias
}