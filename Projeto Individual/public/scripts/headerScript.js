let home = document.getElementById('headerHome')
let aboutMe = document.getElementById('headerAboutMe')

home.addEventListener('click', () => {
    window.location.href = '#home'
})

aboutMe.addEventListener('click', () => {
    window.location.href = '#aboutMe'   
})