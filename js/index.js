// Responsive menubar
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

// fixed header
function sticky(){
    let header = document.querySelector('header')
window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset >= 90){
        header.classList.add('sticky-header');
    }else{
        header.classList.remove('sticky-header')
    }
})
}
sticky();