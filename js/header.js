export const responsiveHeader = () =>{
    let startIcon = document.querySelector('.startIcon');
    console.log(startIcon)
    let closeIcon = document.querySelector('.closeIcon');
    let navBar = document.querySelector('.navigation');
    let list = document.querySelectorAll('#list')
    console.log(navBar)
    startIcon.addEventListener('click',(e) =>{
        navBar.classList.add('show');
        navBar.style.transition = '1s all linear';
    })
    closeIcon.addEventListener('click',(e) =>{
        navBar.classList.remove('show')
    })
    list.forEach((link) =>[
        link.addEventListener('click',(e) =>{
            navBar.classList.remove('show')
        })
    ])
}