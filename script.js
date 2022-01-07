const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu')
const menuLinks = document.querySelector('.nav-menu a')

burger.addEventListener('click', () => {
    menu.classList.toggle('show')
})

menuLinks.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        menu.classList.remove('show')
    })
})
