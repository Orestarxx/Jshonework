//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let block = document.createElement(`div`);
// block.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
// document.body.appendChild(block);
// document.body.appendChild(block.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main', 'Products', 'About us', 'Contacts'];
// for (const st of array) {
//     let ul = document.createElement(`ul`);
//     ul.classList.add(`menu`);
//     document.body.appendChild(ul);
//     let li = document.createElement(`li`);
//     li.innerText = `${st}`
//     ul.appendChild(li);
// }