let btnLogin = document.getElementById('btnLogin')

// btnLogin.addEventListener('click', () => {
//   let email = document.getElementById('inpEmail').value
//   let senha = document.getElementById('inpSenha').value

//   if(email == 'admin' && senha == 'admin'){
//     window.location.href = './decks.html'
//   }else{
//     alert('Dados incorretos')
//   }
// })

function limparFormulario(){

  let nome =  inpNomeCadastro.value;
  let email =  inpEmailCadastro.value;
  let senha =  inpSenhaCadastro.value;
  let confirmarSenha = inpSenhaCadastroC.value

  if(nome == '' || email == '' || senha == '' || confirmarSenha == ''){
    alert('Preencha os campos')
  }else{
    nomeVar = ''
    emailVar = ''
    senhaVar = ''
    confirmacaoSenhaVar = ''
  }


}