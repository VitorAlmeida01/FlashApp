  // Array para armazenar empresas cadastradas para validação de código de ativação 
  let listaEmpresasCadastradas = []

  function sumirMensagem() {
    cardErro.style.display = "none";
  }

  

  function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inpNomeCadastro.value
    var emailVar = inpEmailCadastro.value
    var senhaVar = inpSenhaCadastro.value
    var confirmacaoSenhaVar = inpSenhaCadastroC.value

    function limparCampos(){
      inpNomeCadastro.value = ''
      inpEmailCadastro.value = ''
      inpSenhaCadastro.value = ''
      inpSenhaCadastroC.value = ''
    }

    let cardErro = document.getElementById('cardErro')

    // Verificando se há algum campo em branco
    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {
      cardErro.style.display = "block"
      cardErro.style.color = 'rgba(255, 0, 0, 0.726)'
      mensagem_erro.innerHTML =
        "Preencha todos os campos"

      // finalizarAguardar()
      return false
    } else {
      setInterval(sumirMensagem, 3000);
    }

    // Verificando se o código de ativação é de alguma empresa cadastrada
    // for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
    //   if (listaEmpresasCadastradas[i].codigo_ativacao == codigoVar) {
    //     idEmpresaVincular = listaEmpresasCadastradas[i].id
    //     console.log("Código de ativação válido.");
    //     break;
    //   } else {
    //     cardErro.style.display = "block";
    //     mensagem_erro.innerHTML = "(Mensagem de erro para código inválido)";
    //     finalizarAguardar();
    //   }
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta)

        if (resposta.ok) {
          cardErro.style.display = "block"

          mensagem_erro.style.color = '#fff'
          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso!"

          setTimeout(() => {
            // window.location.href = '#modal-login'
            cadastroTransform()

          }, "2000")

          setTimeout(limparCampos, 1000);

          limparFormulario()
          finalizarAguardar()
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!"
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
        finalizarAguardar()
      })

    return false
  }

  function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar")
    divAguardar.style.display = "none"

    var divErrosLogin = document.getElementById("div_erros_login")
    if (texto) {
      divErrosLogin.style.display = "flex"
      divErrosLogin.innerHTML = texto
    }


  }


