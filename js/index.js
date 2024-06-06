import { changeBackground } from "./darkWhite.js";
changeBackground()

const responsiveHeader = () =>{
    let startIcon = document.querySelector('.startIcon');
    console.log(startIcon)
    let closeIcon = document.querySelector('.closeIcon');
    let navBar = document.querySelector('.navigation');
    console.log(navBar)
    startIcon.addEventListener('click',(e) =>{
        navBar.classList.add('show');
        navBar.style.transition = '1s all linear';
    })
    closeIcon.addEventListener('click',(e) =>{
        navBar.classList.remove('show')
    })
}
responsiveHeader();





