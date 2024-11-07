let btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', () => {
  let email = document.getElementById('inpEmail').value
  let senha = document.getElementById('inpSenha').value

  if(email == 'admin' && senha == 'admin'){
    window.location.href = './decks.html'
  }else{
    alert('Dados incorretos')
  }
})

