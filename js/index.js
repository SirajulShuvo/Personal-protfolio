function responsiveHeader(){
    let menu = document.getElementById('menu');
    let close = document.getElementById('close')
    let menuIcon = document.getElementById('menuicon')
    menuIcon.addEventListener('click',(e) => {
        menu.classList.add('active')
    })
    close.addEventListener('click',(e) => {
        menu.classList.remove('active')
    })
}
responsiveHeader();