// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// function User(name,surname,email,phone,id){
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.id = id;

// }
// створити пустий масив, наповнити його 10 об'єктами new User



// let array =[];
//  array.push(new User(`Mia`,`Vasliv`,`tgfftttttttttt@gmail.com`,380163227899,3));
//  array.push(new User(`Taras`,`Vasliv`,`tttttrrrrrrrrr@gmail.com`,380334556211,4));
//  array.push(new User(`Olia`,`Vasliv`,`aaaaaaaaaaaaaa@gmail.com`,380876599908,5));
//  array.push(new User(`Petro`,`Vasliv`,`vasliv22@gmail.com`,380976547676,1));
//  array.push(new User(`Petro`,`Vasliv`,`ffffffffffffffff22@gmail.com`,380976577788,10));
//  array.push(new User(`Anna`,`Vasliv`,`bbbbbbbbbbbbbbb22@gmail.com`,380332216578,6));
//  array.push(new User(`Andrew`,`Vasliv`,`cccccccccccccc@gmail.com`,380976547456,7));
// array.push(new User(`Slava`,`Vasliv`,`ddddddddddddddddd@gmail.com`,380976678576,8));
// array.push(new User(`Ivan`,`Vasliv`,`dfdgdgdgdfgb@gmail.com`,380567437892,2));
// array.push(new User(`Max`,`Vasliv`,`eeeeeeeeeeeeeeeeee@gmail.com`,380976564566,9));
//
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filter = array.filter(value => !(value.id % 2))
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// array.sort((u1,u2)=>u1.id - u2.id );
// console.log(array);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// створити пустий масив, наповнити його 10 об'єктами Client


// let newarr =[];
// newarr.push(new Client(1,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`]));
// newarr.push(new Client(9,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`,`beer`,`chocolate`]));
// newarr.push(new Client(8,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`,`chocolate`]));
// newarr.push(new Client(4,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`,`beer`,`coffee`,`chocolate`]));
// newarr.push(new Client(5,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,]));
// newarr.push(new Client(6,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`]));
// newarr.push(new Client(7,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`]));
// newarr.push(new Client(3,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`,`pasta`,`sour cream`,`coffee`,`Finlandia`]));
// newarr.push(new Client(2,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`,`juice`,`eggs`,`ice cream`,`bred`,`pizza`,`honney`,`beer`,`chocolate`,`finlandia`]));
// newarr.push(new Client(10,`Vasya`,`Disel`,`wgsdgsdg@.com`,380975543456,[`milk`]));
//
// console.log(newarr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = newarr.sort((cl1,cl2) => {
//     if (cl1.order.length > cl2.order.length){
//         return 1;
//
//     }
//     if (cl1.order.length < cl2.order.length){
//         return -1;
//
//     }
//     if (cl1.order.length === cl2.order.length){
//         return 0;
//
//     }
// })
//
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model,producer,year,maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//      this.drive = function(){
//          console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//      }
//      this.info = function (){
//          for (const argument in this) {
//              if(typeof this[argument]!=='function') {
//                  console.log(`${argument} - ${JSON.stringify(this[argument])}`)
//              }
//              }
//      }
//      this.increaseMaxSpeed = function (newSpeed){this.maxSpeed = newSpeed}
//      this.changeYear = function(newValue){this.year = newValue}
//      this.addDriver = function (driver){this.driver = driver }
//
// }
// let dr = new Car (`Superb`,`Shkoda`,2005,280,1.8  )
// dr.drive()
// dr.info()
// dr.increaseMaxSpeed(400);
// dr.changeYear(2007)
// dr.addDriver(`Petrusik`)
//
// console.log(dr);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
// constructor (model,producer,year,maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//      this.drive = function(){
//          console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//      }
//      this.info = function (){
//          for (const argument in this) {
//              if(typeof this[argument]!=='function') {
//                  console.log(`${argument} - ${JSON.stringify(this[argument])}`)
//              }
//              }
//      }
//      this.increaseMaxSpeed = function (newSpeed){this.maxSpeed = newSpeed}
//      this.changeYear = function(newValue){this.year = newValue}
//      this.addDriver = function (driver){this.driver = driver }
// }
// }
// let dr = new Car (`Superb`,`Shkoda`,2005,280,1.8  )
// dr.drive()
// dr.info()
// dr.increaseMaxSpeed(400);
// dr.changeYear(2007)
// dr.addDriver(`Petrusik`)
//
// console.log(dr);
//


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// function TheGirl (name,age,size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let findGirl = []
// findGirl.push(new TheGirl(`Popelandia`,`21`,46));
// findGirl.push(new TheGirl(`Popelandia`,`21`,36));
// findGirl.push(new TheGirl(`Popelandia`,`21`,38));
// findGirl.push(new TheGirl(`Popelandia`,`21`,41));
// findGirl.push(new TheGirl(`Popelandia`,`21`,34));
// findGirl.push(new TheGirl(`Popelandia`,`21`,37));
// findGirl.push(new TheGirl(`Popelandia`,`21`,42));
// findGirl.push(new TheGirl(`Popelandia`,`21`,35));
// findGirl.push(new TheGirl(`Popelandia`,`21`,30));
// findGirl.push(new TheGirl(`Popelandia`,`21`,39));
// console.log(findGirl);

// class Prince{
//     constructor(name,age,sizeOfFoundShoe) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfFoundShoe = sizeOfFoundShoe;
//     }
// }
// let prince = new Prince(`Arthur`,23,46);
//
// for (const find of findGirl) {
//     if(prince.sizeOfFoundShoe === find.size){
//         console.log(`he found her`,find);
//
//     }else{
//         console.log(`lost`,find);
//     }
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find = findGirl.find(value =>value.size === 46);
// console.log(find);