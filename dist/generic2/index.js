"use strict";
const l = document.querySelector("a");
function extractText(el) {
    return {
        texto: el.innerText,
        el,
    };
}
if (l) {
    console.log(extractText(l).el.href);
}
function $(selector) {
    return document.querySelector(selector);
}
const setLink = $("a");
console.log(setLink);
