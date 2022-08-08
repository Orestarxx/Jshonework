// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function calculator(a,b){
//     let res =a * b;
//     return res;
// }
//
// console.log(calculator(40, 60));


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function calculator(pi,r){
//     let res = pi*r*r;
//     return res;
// }
// console.log(calculator(3.14, 20));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


//
// function calculator(pi,r,h){
//     let res = 2*pi*r*(h+r);
//     return res;
// }
// console.log(calculator(3.14, 20,15));


// - створити функцію яка приймає масив та виводить кожен його елемент


// function addText(text){
//     document.write(`<div>${text}</div>`)
// }
// addText(`hello world!!`)
// addText(`hi everybody!!`)
// addText(`do some right stuff`)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function addParagraph(Paragraph){
//     document.write(`<p>${Paragraph} </p>`)
// }
// addParagraph(`Voting began on July 4 and ended on July 22, but counting was extended until Friday because of special circumstances including security issues, attacks on ballot boxes and logistical challenges, the electoral commission said.`)
// addParagraph(`International election observers reported problems ranging from interference in counting by scrutineers and double voting to large numbers of names missing from electoral rolls.`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function unordered(Text){
//     document.write(`<ul>`)
//     document.write(`<li>${Text}</li> <li>${Text}</li> <li>${Text}</li>`)
//     document.write(`</ul>`)
// }
// unordered(`I made a list`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function unordered(Text,number){
//     document.write(`<ul>`)
// for(let i=0; i<number; i++){
//     document.write(`<li>${Text}</li> <li>${Text}</li> <li>${Text}</li>`)
// }
// document.write(`</ul>`)
// }
// unordered(`I made a list`,5)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//
// function array(...xxx){
// console.log(xxx)
// }
// array(5,`heloo`,false,false,5,`hi`,3,true);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let users =[
//     {name:`petrooo`,age:31,id:1},
//     {name:`petrooo`,age:22,id:2},
//     {name:`petrooo`,age:35,id:3},
//     {name:`petrooo`,age:11,id:4},
//     {name:`petrooo`,age:14,id:5},
//     {name:`petrooo`,age:51,id:6},
// ]
// //
// function obj(users) {
//     for (const user of users) {
//         document.write(`<div>
// <div>${user.name} - ${user.age}</div>
// <div>${user.id}</div>
// </div>`);
//     }
// }
// obj(users);




// - створити функцію яка повертає найменьше число з масиву


// const ar =[24,31,-133,45,9,-183]
// let finding = (array) =>{
//     let min =array[4]
//     for( let item of array){
//         if(min>item){
//             min=item
//         }
//     }
//     return min;
// }
// console.log(finding(ar));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// function calc(){
//     let res = 0;
//     switch (arguments[0]){
//         case'+':
//             for (let i = 1; i < arguments.length; i++) {
//                 const count = arguments[i];
//                 res += count;
//
//             }
//             break;
//         case'-':
//             for (let i = 1; i < arguments.length; i++) {
//                 const count = arguments[i];
//                 res -= count;
//             }
//             break;
//
//     }
//     return res;
// }
// console.log(calc(`+`,1,2,7,8));
// console.log(calc(`-`,34,3,1));
//


