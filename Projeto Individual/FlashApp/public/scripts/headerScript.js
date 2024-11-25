let home = document.getElementById('headerHome')
let aboutMe = document.getElementById('headerAboutMe')
let benefits = document.getElementById('')

home.addEventListener('click', () => {
    window.location.href = '#home'
})

aboutMe.addEventListener('click', () => {
    window.location.href = '#aboutMe'   
})

let relogio = document.querySelectorAll('.clock')

relogio.forEach(element => {
    element.addEventListener('mouseover', () =>{

        element.innerHTML = 'Tempo'
        element.style.color = '#000'
        element.style.backgroundimage = "none"
        console.log('to no ceu')
    
    })

    element.addEventListener('mouseout', () =>{

        element.innerHTML = ''
    
    })
});

let guys = document.querySelectorAll('.guys')

guys.forEach(element => {
    element.addEventListener('mouseover', () =>{

        element.innerHTML = 'Produtividade'
        element.style.color = '#fff'
        element.style.backgroundimage = "none"
        console.log('to no ceu')
    
    })

    element.addEventListener('mouseout', () =>{

        element.innerHTML = ''
    
    })
});


let books = document.querySelectorAll('.books')

books.forEach(element => {
    element.addEventListener('mouseover', () =>{

        element.innerHTML = 'Retenção de conhecimento'
        element.style.color = '#000'
        element.style.backgroundimage = "none"
        console.log('to no ceu')
    
    })

    element.addEventListener('mouseout', () =>{

        element.innerHTML = ''
    
    })
});

let flashcards = document.querySelectorAll('.flashcards')

flashcards.forEach(element => {
    element.addEventListener('mouseover', () =>{

        element.innerHTML = 'Organização'
        element.style.color = '#fff'
    
    })

    element.addEventListener('mouseout', () =>{

        element.innerHTML = ''
    
    })
});
