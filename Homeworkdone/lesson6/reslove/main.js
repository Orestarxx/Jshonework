// - Знайти та вивести довижину настипних стрінгових значень 1)


// let hello = 'hello world';
// let lor = 'lorem ipsum';
// let java = 'javascript is cool';
// console.log(hello.length);
// console.log(lor.length);
// console.log(java.length);


// - Перевести до великого регістру наступні стрінгові значення 2)

// let toUpper = 'hello world,lorem ipsum,javascript is cool';
// let convert = toUpper.toUpperCase();
// console.log(convert);


// - Перевести до нижнього регістру настипні стрінгові значення 3)


// let toLower = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
// let conv = toLower.toLowerCase();
// console.log(conv);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів. 4)

// let str =   ` dirty string  `
// let cleanString = str.substring(1,13)
// console.log(cleanString);

// let orig = '  dirty string  ';
// console.log(orig.trim());



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. 5)
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні';
// let split = str.split(` `);
// console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


//  let array = [10,8,-7,55,987,-1011,0,1050,0];
// let string = array.map(String)
// console.log(string)

// let array = [`10`,`8`,`-7`,`55`,`987`,`-1011`,`0`,`1050`,`2`];
// let numb = array.map(Number)
// console.log(numb)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11,21,3];
// function sortNums(nums, direction){
//     if (direction==='right'){
//         nums.sort((num1, num2) => num1 - num2)
//     }
//     if (direction==='left'){
//         nums.sort((num1, num2) => num2 - num1)
//     }
// }
// sortNums(nums, 'right')
// console.log(nums);
// sortNums(nums, 'left')
// console.log(nums);
// - є масив
// let array = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// console.log(array.sort((obg1,obg2)=>obg2.monthDuration - obg1.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = array.filter(cources => cources.monthDuration>5)
// console.log(filter)
//
// описати колоду карт
// let cards = [
//
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'}, //хреста
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//
//
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'}, //бубна
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//
//
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'}, //черва
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {value: 'Joker', color:'red'},
//
//
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'}, //пійка
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {value: 'Joker', color:'black'},]
// - знайти піковий туз

// let newArray =[];
// for (const ell of cards) {
//     if(ell.cardSuit ===`spades` && ell.value ===`King`){
//         newArray.push(ell)
//     }
// }
// console.log(newArray);


// let filter = cards.filter(cards =>cards.cardSuit === `spades` && cards.value === `King`)
// console.log(filter)


// - всі шістки

// let newArray =[];
// for (const ell of cards) {
//     if(ell.value === 6){
//         newArray.push(ell)
//     }
// }
// console.log(newArray);


// let filter = cards.filter(cards =>cards.value === 6)
// console.log(filter)


// - всі червоні карти

// let newArray =[];
// for (const ell of cards) {
//     if(ell.color ===`red`){
//         newArray.push(ell)
//     }
// }
// console.log(newArray);


// let filter = cards.filter(cards =>cards.color === `red`)
// console.log(filter)

// - всі буби

// let newArray =[];
// for (const ell of cards) {
//     if(ell.cardSuit ===`diamonds`){
//         newArray.push(ell)
//     }
// }
// console.log(newArray);


// let filter = cards.filter(cards =>cards.cardSuit === `diamonds`)
// console.log(filter)

// - всі трефи від 9 та більше

// let newArray =[];
// for (const card of cards) {
//     if(card.cardSuit ===`clubs` && card.value >= 9 + ``){
//         newArray.push(card)
//     }
// }
// console.log(newArray);


// let filter = cards.filter(cards =>cards.cardSuit === `clubs` && cards.value >= 9 +``)
// console.log(filter)


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

//  let reduce = cards.reduce(function(accumulator,cards){
//     if(cards.cardSuit ===`spades`){
//         accumulator.spades1.push(cards)
//     }
//     if(cards.cardSuit ===`diamonds`){
//         accumulator.diamonds2.push(cards)
//     }
//     if(cards.cardSuit ===`hearts`){
//         accumulator.hearts3.push(cards)
//     }
//     if(cards.cardSuit ===`clubs`){
//         accumulator.clubs4.push(cards)
//     }
//      if(cards.value ===`Joker`){
//          accumulator.jokers5.push(cards)
//      }
//     return accumulator
//
// },{spades1:[],diamonds2:[],hearts3:[], clubs4:[],jokers5:[] })
// console.log(reduce)





