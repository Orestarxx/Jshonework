//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// function hiding() {
//     let x = document.getElementById("myd");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form1 = document.forms.f1;
// let inp = document.getElementById(`in1`)
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     if (inp.value >= 18) {
//         alert(`you are welcome`);
//     } else if (inp.value < 18) {
//         alert(`sorry buuttttt`);
//     }
//
// }

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function createTable() {
//     let in1 = document.getElementById(`in1`);
//     let in2 = document.getElementById(`in2`);
//     let in3 = document.getElementById(`in3`);
//     let b1 = document.getElementById(`b1`);
//     let find = document.getElementById(`tb`);
//     if (find !== null) {
//         find.remove();
//     }
//     let table = document.createElement(`table`);
//     table.setAttribute(`id`, `tb`)
//
//     document.body.appendChild(table);
//     for (let i = 0; i < in1.value; i++) {
//         let tr = document.createElement(`tr`);
//         table.appendChild(tr);
//         for (let j = 0; j < in2.value; j++) {
//             let td = document.createElement(`td`);
//             td.innerText = in3.value;
//             tr.appendChild(td);
//         }
//
//
//     }


// }

