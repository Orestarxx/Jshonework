// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = 0;
// if(x !== 0){
//     console.log(`Correct`);
// }else{
//     console.log(`incorrect`);
// }
// let a = 1;
// if(x !== 0){
//     console.log(`Correct`);
// }else if(x===0){
//     console.log(`incorrect`);
// }
// let a = 0;
// if(x !== 0){
//     console.log(`Correct`);
// }else if(x===0){
//     console.log(`incorrect`);
// }
// let a = -3;
// if(x !== 0){
//     console.log(`Correct`);
// }else if(x===0){
//     console.log(`incorrect`);
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = 23;
// if( time>0 && time<=15 ){
//     console.log(`first decade`);
// }else if( time>15 && time<=30 ){
//     console.log(`second decade`);
// }else if( time>30 && time<=45 ){
//     console.log(`third decade`);
// }else if( time>45 && time <=59 ){
//     console.log(`fourth decade`);
// }else{
//     console.log(`The answer is not correct`);
// }
//

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = 18;
// if(day>0 && day<=10){
//     console.log(`first decade`);
// }else if(day>10 && day<=20){
//     console.log(`second decade`);
// }else if(day>20 && day<=31){
//     console.log(`third decade`);
// }else{
//     console.log(`this number is out of month counting`);
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let week =`1`;
// switch(week){
//     case'1':
//         document.write(`1)do something smart`);
//         break;
//     case`2`:
//         document.write(`1)learn smth`);
//         break;
//     case`3`:
//         document.write(`1)do smth`);
//         break;
//     case`4`:
//         document.write(`1)take extra`);
//         break;
//     case`5`:
//         document.write(`1)play smth`);
//         break;
//     case`6`:
//         document.write(`1) take care of`);
//         break;
//     case`7`:
//         document.write(`1)chill out`);
//         break;
//     default:
//         confirm(`Write it correctly`);
//
// }
//


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let v = 100;
// let r = 100;
// if(v>r){
//     console.log(`Max-Number`);
// }else if(v<r){
//     console.log(`Min-Number`);
// }else if(v===r){
//     console.log(`equal`)
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


// let f = null || `default`
// console.log(f)
//
// let m = `` || `July`
// console.log(m)
//
// let n = NaN || `Carl`
// console.log(n)
//
//






















// let week =7;
// switch(week){
//     case 1:
//         document.write(`1)do something smart`);
//         break;
//     case 2:
//         document.write(`1)learn smth`);
//         break;
//     case 3:
//         document.write(`1)do smth`);
//         break;
//     case 4:
//         document.write(`1)take extra`);
//         break;
//     case 5:
//         document.write(`1)play smth`);
//         break;
//     case 6:
//         document.write(`1) take care of`);
//         break;
//     case 7:
//         if(week<= 6){
//             console.log(`you lost`)
//         }else{
//             console.log(`gg`)
//         }
//
//         break;
//     default:
//         confirm(`Write it correctly`);
//
// }






















