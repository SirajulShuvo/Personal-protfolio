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
    let activeLink = null;

    list.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (activeLink) {
          activeLink.style.color = ''; // Reset color of previously active link
        }
        navBar.classList.remove('show');
        e.target.style.color = '#6a59d1'; // Set color for the currently clicked link
        activeLink = e.target; // Update the active link reference
      });
    });
    
}