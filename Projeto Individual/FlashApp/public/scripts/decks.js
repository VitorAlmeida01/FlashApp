let exitBtn = document.getElementById('exitBtn')

exitBtn.addEventListener('click', () => {
    window.location.href = './index.html'
    sessionStorage.clear()
})



// document.getElementById('addDeck').addEventListener('click', () => {
//     let inpDeck = document.getElementById('inpDeck').value

//     let divDeck = document.getElementById('containerDecks')

//     let containerDeck = document.createElement('div')
//     containerDeck.className = 'containerDeck'
    
//     let title = document.createElement('h2')
//     title.textContent = inpDeck
    
//     let containerIcons = document.createElement('div')

//     let edit = document.createElement('i')
//     edit.classList = 'fa-solid fa-pen-to-square'
    
//     let trashCan = document.createElement('i')
//     trashCan.classList = 'fa-solid fa-trash'


//     divDeck.appendChild(containerDeck)
//     containerDeck.appendChild(title)
//     containerDeck.appendChild(containerIcons)
//     containerIcons.appendChild(edit)
//     containerIcons.appendChild(trashCan)

// })


