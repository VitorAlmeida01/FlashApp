var usuarioModel = require("../models/usuarioModel");
var deckModel = require("../models/deckModel"); // Colocar o caminho do deck

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinida!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        deckModel.buscarDeckPorUsuario(resultadoAutenticar[0].idUsuario)
                            .then((resultadoDecks) => {
                                // if (resultadoDecks.length > 0) {
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        nome: resultadoAutenticar[0].nome,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                        decks: resultadoDecks.length > 0 ? resultadoDecks : []
                                    });
                                // } else {
                                //     res.status(204).json({ decks: [] });
                                // }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function contarUsuarios(req, res) {
    usuarioModel.contarUsuarios()
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }

  function contarDecks(idUsuario) {
    var instrucao = `
      SELECT COUNT(*) AS totalDecks FROM decks WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
  }
  
  function contarFlashcards(idUsuario) {
    var instrucao = `
      SELECT COUNT(*) AS totalFlashcards FROM flashcards WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
  }

module.exports = {
    autenticar,
    cadastrar,
    contarUsuarios
}