const btnOpen = document.getElementById('loginBtn')


    btnOpen.addEventListener('click', () => {
    const modalId = btnOpen.getAttribute('data-login')
    const modal  = document.getElementById(modalId)
    
    modal.showModal()
    })

