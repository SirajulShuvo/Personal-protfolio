import { responsiveHeader } from "./header.js";


responsiveHeader();

    document.addEventListener("DOMContentLoaded", function() {
        let sections = document.querySelectorAll(".section");

        window.addEventListener('scroll', () => {
            let top = window.scrollY;

            sections.forEach(section => {
                let offset = section.offsetTop;
                let offsetHeight = section.offsetHeight;
                let content = section.querySelector('.section-animation');
                
                if (top >= offset && top < offset + offsetHeight) {
                    content.classList.add('show-animation');
                } else {
                    content.classList.remove('show-animation');
                }
            });
        });
    });
