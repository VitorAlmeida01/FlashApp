const btnOpen = document.querySelectorAll('.loginBtn')
const btnClose = document.getElementById('btnClose')

let cadastroClicked
let loginClicked

const btnOpen2 = document.querySelectorAll('.cadastroBtn')
const btnClose2 = document.getElementById('btnClose2')

// Login
btnOpen.forEach(button => {    
    button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-login')
    const modal  = document.getElementById(modalId)
    loginClicked = modal

    if(cadastroClicked){
        cadastroClicked.close()
    }
    
    modal.showModal()
    return loginClicked
    })
})

btnClose.addEventListener('click', () => {
    const modalId = btnClose.getAttribute('data-login')
    const modal = document.getElementById(modalId)

    modal.close()
})


// Cadastro
btnOpen2.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-cadastro')
        const modal  = document.getElementById(modalId)
        cadastroClicked = modal

        if(loginClicked){
            loginClicked.close()
        }

        modal.showModal()
        return cadastroClicked
        })
});
    
btnClose2.addEventListener('click', () => {
    const modalId = btnClose2.getAttribute('data-cadastro')
    const modal = document.getElementById(modalId)

    modal.close()
})

function cadastroTransform(){
    let btnCadastro = document.getElementById('btnModal')
    
        btnCadastro.setAttribute('data-login', 'modal-login')

        const modalId = btnCadastro.getAttribute('data-login')
        const modal  = document.getElementById(modalId)

        if(cadastroClicked){
            cadastroClicked.close()
        }

        modal.showModal()
}

// function cadastroTransform() {
//     let btnCadastro = document.getElementsByClassName('btnModal');

//     // Itera sobre todos os elementos com a classe 'btnModal'
//     Array.from(btnCadastro).forEach(button => {
//         // Adiciona o atributo data-login com o valor 'modal-login'
//         button.setAttribute('data-login', 'modal-login');

//         button.addEventListener('click', () => {
//             const modalId = button.getAttribute('data-login');
//             const modal = document.getElementById(modalId);

//             if(cadastroClicked){
//                 cadastroClicked.close()
//             }

//             modal.showModal();
//         });
//     });
// }