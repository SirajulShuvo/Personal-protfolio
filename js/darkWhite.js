export const changeBackground = () => {
    let listItems = document.querySelectorAll('#list');
    let anchors = document.querySelectorAll('a');
    let body = document.body;
    let navigation = document.querySelector('.navigation');
    let moon = document.querySelector('#moon');
    let sun = document.querySelector('#sun');
    moon.addEventListener('click', (e) => {
        body.style.background = 'black';
        body.style.color = 'white';
        anchors.forEach(anchor => {
            anchor.style.color = 'white';
        });
        listItems.forEach(item => {
            item.style.color = 'white';
        });
        moon.style.display = 'none';
        sun.style.display = 'block';
    });

    sun.addEventListener('click', (e) => {
        body.style.background = 'white';
        body.style.color = 'black';
        anchors.forEach(anchor => {
            anchor.style.color = 'black';
        });

        listItems.forEach(item => {
            item.style.color = 'black';
        });
        moon.style.display = 'block';
        sun.style.display = 'none';
    });
    function saveData(){
        
    }
    function displayData(){
        
    }
};
