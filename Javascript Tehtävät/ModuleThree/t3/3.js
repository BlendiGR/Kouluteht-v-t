'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++){
    const name = names[i];
    const list = document.createElement("li");
    list.textContent = `${name}`;
    document.querySelector("#target").appendChild(list)
}