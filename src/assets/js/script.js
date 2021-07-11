document.addEventListener('DOMContentLoaded', function () {
    addBurgerMenuHandler()
})

function addBurgerMenuHandler() {
    let burgerMenu = document.querySelector('.burger-menu'),
        menu = document.querySelector('.header-menu')
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        menu.classList.toggle('active')
        if(menu.classList.contains('active')){
            document.body.style.overflow='hidden'
        }else {
            document.body.style.overflow=''
        }
    })
}