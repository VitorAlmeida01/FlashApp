const btnOpen = document.querySelectorAll('.loginBtn')
const btnClose = document.getElementById('btnClose')

let cadastroClicked

const btnOpen2 = document.querySelectorAll('.cadastroBtn')
const btnClose2 = document.getElementById('btnClose2')

btnOpen.forEach(button => {    
    button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-login')
    const modal  = document.getElementById(modalId)

    if(cadastroClicked){
        cadastroClicked.close()
    }
    
    modal.showModal()
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
        modal.showModal()
        console.log(cadastroClicked)

        return cadastroClicked  
        })

});
    


btnClose2.addEventListener('click', () => {
    const modalId = btnClose2.getAttribute('data-cadastro')
    const modal = document.getElementById(modalId)

    modal.close()
})