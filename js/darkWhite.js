// export const changeBackground = () => {
//     let listItems = document.querySelectorAll('#list');
//     let anchors = document.querySelectorAll('a');
//     let body = document.body;
//     let moon = document.querySelector('#moon');
//     let sun = document.querySelector('#sun');
//     function saveData(theme){
//         localStorage.setItem('theme',theme);
//     }
//     const applly = (theme) =>{
//         if(theme === 'dark'){
//             body.style.background = 'black';
//             body.style.color = 'white';
//             anchors.forEach(anchor => {
//                 anchor.style.color = 'white';
//             });
//             listItems.forEach(item => {
//                 item.style.color = 'white';
//             });
//             moon.style.display = 'none';
//             sun.style.display = 'block';
//         }else{
//             body.style.background = 'white';
//             body.style.color = 'black';
//             anchors.forEach(anchor => {
//                 anchor.style.color = 'black';
//             });
//             listItems.forEach(item => {
//                 item.style.color = 'black';
//             });
//             moon.style.display = 'block';
//             sun.style.display = 'none';
//         }
//     }
//     const display = () =>{
//         const theme = localStorage.getItem('theme') || 'light';
//         applly(theme)
//     }
//     moon.addEventListener('click', (e) => {
//         saveData('dark');
//         applly('dark');
//     });

//     sun.addEventListener('click', (e) => {
//         saveData('light')
//        applly('light');
//     });
//     display();
// };
