const btnOpen = document.getElementById('loginBtn')
const btnClose = document.getElementById('btnClose')

const btnOpen2 = document.getElementById('cadastroBtn')
const btnClose2 = document.getElementById('btnClose2')

    btnOpen.addEventListener('click', () => {
    const modalId = btnOpen.getAttribute('data-login')
    const modal  = document.getElementById(modalId)
    
    modal.showModal()
    })


btnClose.addEventListener('click', () => {
    const modalId = btnClose.getAttribute('data-login')
    const modal = document.getElementById(modalId)

    modal.close()
})


// Cadastro
    btnOpen2.addEventListener('click', () => {
    const modalId = btnOpen2.getAttribute('data-cadastro')
    const modal  = document.getElementById(modalId)
    
    modal.showModal()
    })


btnClose2.addEventListener('click', () => {
    const modalId = btnClose2.getAttribute('data-cadastro')
    const modal = document.getElementById(modalId)

    modal.close()
})