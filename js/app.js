

const menu = document.getElementById('menu')
if (menu) {
    function mobileMenu() {
        const menuOpen = document.getElementById('menu-open')
        const menuClose = document.getElementById('menu-close')

        menuOpen.addEventListener('click', showMenu)
        menuClose.addEventListener('click', hideMenu)
    }

    function showMenu() {
        menu.classList.add('active')
        document.body.classList.add('no-scroll')
    }
    function hideMenu() {
        menu.classList.remove('active')
        document.body.classList.remove('no-scroll')
    }
}
mobileMenu()
