"use strict";
const links = document.querySelectorAll('.link');
function modLink(links) {
    links.forEach(link => {
        if (link instanceof HTMLElement) {
            link.style.color = "red";
            link.style.border = "1px, solid, red";
            if (link instanceof HTMLButtonElement) {
                link.style.border = "none";
                link.style.color = "pink";
                link.style.background = "black";
            }
        }
        console.log(link);
    });
}
modLink(links);
