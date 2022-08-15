// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git' ,'sass']
//     }
// ]

// for (let obj of coursesArray) {
//
//
//
//
//         let hi = obj.modules.sort((ind1,ind2)=>{
//             if(ind1>ind2){
//                 return 1;
//             }
//             if(ind1<ind2){
//                 return -1;
//             }
//             if(ind1===ind2){
//                 return 0;
//             }
//
//     })
//     console.log(hi)
// }
//





// for (const key in coursesArray) {
    //     console.log(key,coursesArray[key]);
    //     console.log(`**********************`);
    // }
    //


// let sort = coursesArray.sort( ()=>{}
//
//
// )
//
// const array1 = [1, 6, 4,45, 2, 7,41,88,77,8888,99999];
// function sortNums(nums, direction){
//     if (direction==='right'){
//         array1.sort((num1, num2) => num1 - num2)
//     }
//     if (direction==='left'){
//         array1.sort((num1, num2) => num2 - num1)
//     }
// }
// sortNums(array1, 'right')
// console.log(array1);
// sortNums(array1, 'left')
// console.log(array1);

// const array1 = [8, 4, 9, 16];
//
// // pass a function to map
// const map1 = array1.map(x => x / 2);
//
// console.log(map1);
// let age = 600;
// if(age>0 && age <=14){
//     console.log(`Hello kid`);
// }else if(age>14 && age<18){
//     console.log(`close to happy end`)
// }else if(age >= 18 && age <= 150) {
//     console.log(`welcome to the club man`);
// }else if(age > 150 && age < 1000){
//     console.log(`infinity`);
// }else{
//     console.log(`))`);
// }


// let players =[
//     {name:`max`,age:43,lvl:434},
//     {name:`max`,age:23,lvl:332},
//     {name:`max`,age:30,lvl:23},
//     {name:`max`,age:51,lvl:44},
//     {name:`max`,age:16,lvl:23},
//     {name:`max`,age:13,lvl:6},
//     {name:`max`,age:30,lvl:77},
//     {name:`max`,age:20,lvl:45},
//     {name:`max`,age:34,lvl:45},
//     {name:`max`,age:36,lvl:45},
//     {name:`max`,age:78,lvl:45},
//     {name:`max`,age:53,lvl:33},
//     {name:`max`,age:25,lvl:64},
//     {name:`max`,age:44,lvl:98},
//     {name:`max`,age:30,lvl:78},
//     {name:`max`,age:45,lvl:77},
//     {name:`max`,age:37,lvl:15},
//     {name:`max`,age:34,lvl:24},
//     {name:`max`,age:35,lvl:46},
//     {name:`max`,age:36,lvl:2},
//     {name:`max`,age:24,lvl:24},
//     {name:`max`,age:26,lvl:77},
//     {name:`max`,age:34,lvl:55},
//     {name:`max`,age:22,lvl:45},
//     {name:`max`,age:21,lvl:145},
//     {name:`max`,age:44,lvl:33},
//     {name:`max`,age:65,lvl:123},
//     {name:`max`,age:23,lvl:66},
//     {name:`max`,age:15,lvl:5},
//     {name:`max`,age:33,lvl:23}
// ]
// let playersss =[
//     {name:`max`,age:43,lvl:434},
//     {name:`max`,age:23,lvl:332},
//     {name:`max`,age:30,lvl:23},
//     {name:`max`,age:51,lvl:44},
//     {name:`max`,age:16,lvl:23},
//     {name:`max`,age:13,lvl:6},
//     {name:`max`,age:30,lvl:77},
//     {name:`max`,age:20,lvl:45},
//     {name:`max`,age:34,lvl:45},
//     {name:`max`,age:36,lvl:45},
//     {name:`max`,age:78,lvl:45},
//     {name:`max`,age:53,lvl:33},
//     {name:`max`,age:25,lvl:64},
//     {name:`max`,age:44,lvl:98},
//     {name:`max`,age:30,lvl:78},
//     {name:`max`,age:45,lvl:77},
//     {name:`max`,age:37,lvl:15},
//     {name:`max`,age:34,lvl:24},
//     {name:`max`,age:35,lvl:46},
//     {name:`max`,age:36,lvl:2},
//     {name:`max`,age:24,lvl:24},
//     {name:`max`,age:26,lvl:77},
//     {name:`max`,age:34,lvl:55},
//     {name:`max`,age:22,lvl:45},
//     {name:`max`,age:21,lvl:145},
//     {name:`max`,age:44,lvl:33},
//     {name:`max`,age:65,lvl:123},
//     {name:`max`,age:23,lvl:66},
//     {name:`max`,age:15,lvl:5},
//     {name:`max`,age:33,lvl:23}
// ]
// let playerss =[
//     {name:`max`,age:43,lvl:434},
//     {name:`max`,age:23,lvl:332},
//     {name:`max`,age:30,lvl:23},
//     {name:`max`,age:51,lvl:44},
//     {name:`max`,age:16,lvl:23},
//     {name:`max`,age:13,lvl:6},
//     {name:`max`,age:30,lvl:77},
//     {name:`max`,age:20,lvl:45},
//     {name:`max`,age:34,lvl:45},
//     {name:`max`,age:36,lvl:45},
//     {name:`max`,age:78,lvl:45},
//     {name:`max`,age:53,lvl:33},
//     {name:`max`,age:25,lvl:64},
//     {name:`max`,age:44,lvl:98},
//     {name:`max`,age:30,lvl:78},
//     {name:`max`,age:45,lvl:77},
//     {name:`max`,age:37,lvl:15},
//     {name:`max`,age:34,lvl:24},
//     {name:`max`,age:35,lvl:46},
//     {name:`max`,age:36,lvl:2},
//     {name:`max`,age:24,lvl:24},
//     {name:`max`,age:26,lvl:77},
//     {name:`max`,age:34,lvl:55},
//     {name:`max`,age:22,lvl:45},
//     {name:`max`,age:21,lvl:145},
//     {name:`max`,age:44,lvl:33},
//     {name:`max`,age:65,lvl:123},
//     {name:`max`,age:23,lvl:66},
//     {name:`max`,age:15,lvl:5},
//     {name:`max`,age:33,lvl:23}
// ]
//
// function arrayPrinter (arrays){
//     for (const array of arrays){
//         console.log(array);
//     }
// }
// arrayPrinter(players);
// arrayPrinter(playerss);
// arrayPrinter(playersss);
//




// for (const player of players) {
//     for (const key in player) {
//
//         console.log(key, player[key]);
//     }
//
//     console.log( `***************************.`)
//
// }

// for (const player of players) {
//     if(player.lvl > 1 && player.lvl <= 40){
//         console.log();
//     }else if(player.lvl >40 && player.lvl <=80){
//         console.log(player);
//     }
//
// }
//

// function calculator (a,b,action){
//     let res = 0;
// switch (action){
//
//     case`+`:
//         res = a + b;
//         break;
//     case`-`:
//         res = a - b;
//         break;
//     case`*`:
//         res = a * b;
//         break;
//     case`%`:
//         res = a % b;
//         break;
// }
// return res;
// }
//
// console.log(calculator(20, 2, `*`));
// console.log(calculator(21, 2, `%`));
// console.log(calculator(20, 2, `+`));
// console.log(calculator(20, 2, `-`));


// let x =[1,9,4,8]
// function calc(action,array){
//    let res = 0;
//     switch (action){
//         case`+`:
//             for (let i = 0; i < array.length; i++) {
//                 const num = array[i];
//                 res += num;
//             }
//             break;
//         case`-`:
//             for (let i = 0; i < array.length; i++) {
//                 const num = array[i];
//                 res -= num;
//             }
//             break;
//
//     }
//
//     return res;
// }
//
// console.log(calc(`+`,x));
//

//

// let x =(a,b,c,d) => (a+b)*c/d;
// console.log(x(400, 500,2,3));


//  function fake(...xxx){
//      console.log(xxx);
//  }
//
// fake(1,2,3,4,5,34325255)



// let string =`Almost six months after the closure of the EU airspace for Russian airplanes, ten aircraft owned or controlled by Russia are still in Germany, Redaktionsnetzwerk Deutschland (RND) reported on Sunday, citing the German Ministry of Transport.`
//
// // let upp = string.toUpperCase();
// // console.log(upp);
// // let low = upp.toLowerCase();
// // console.log(low);
//
// let split = string.split(/[ ,]/)
// console.log(split);


// let arr =[`hello`,`you`,`dfdff`]

// arr.push(`sdsdf`)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(`lol`)
// console.log(arr);
// arr.shift()
// console.log(arr);

// arr.splice(0,1,`s`)
// console.log(arr);

// let arr = [31,54,6,7,88,55,89,-14]
// let calc = arr.reduce((acc,value)=>acc<value?acc:value);
// console.log(calc);

// let users =[
//     {player:`baster`, lvl:33, id:1},
//     {player:`baster`, lvl:56, id:2},
//     {player:`baster`, lvl:66, id:3},
//     {player:`baster`, lvl:78, id:4},
//     {player:`baster`, lvl:34, id:5},
//     {player:`baster`, lvl:5, id:6},
//     {player:`baster`, lvl:6, id:7},
//     {player:`baster`, lvl:34, id:9},
//     {player:`baster`, lvl:45, id:10},
//     {player:`baster`, lvl:45, id:11},
//     {player:`baster`, lvl:44, id:12},
//     {player:`baster`, lvl:34, id:13},
//     {player:`baster`, lvl:56, id:2},
//     {player:`baster`, lvl:66, id:3},
//     {player:`baster`, lvl:78, id:4},
//     {player:`baster`, lvl:34, id:5},
//     {player:`baster`, lvl:5, id:6},
//     {player:`baster`, lvl:6, id:7},
//     {player:`baster`, lvl:34, id:9},
//     {player:`baster`, lvl:45, id:10},
//     {player:`baster`, lvl:45, id:11},
//     {player:`baster`, lvl:44, id:12},
//     {player:`baster`, lvl:34, id:13},
//     {player:`baster`, lvl:66, id:3},
//     {player:`baster`, lvl:78, id:4},
//     {player:`baster`, lvl:34, id:5},
//     {player:`baster`, lvl:5, id:6},
//     {player:`baster`, lvl:6, id:7},
//     {player:`baster`, lvl:34, id:9},
//     {player:`baster`, lvl:45, id:10},
//     {player:`baster`, lvl:45, id:11},
//     {player:`baster`, lvl:44, id:12},
//     {player:`baster`, lvl:34, id:13},
//     {player:`baster`, lvl:56, id:2},
//     {player:`baster`, lvl:66, id:3},
//     {player:`baster`, lvl:78, id:4},
//     {player:`baster`, lvl:34, id:5},
//     {player:`baster`, lvl:5, id:6},
//     {player:`baster`, lvl:6, id:7},
//     {player:`baster`, lvl:34, id:9},
//     {player:`baster`, lvl:45, id:10},
//     {player:`baster`, lvl:45, id:11},
//     {player:`baster`, lvl:44, id:12},
//     {player:`baster`, lvl:34, id:13},
// ]
// let play = users.sort((user1,user2 ) =>user2.lvl - user1.lvl)
// console.log(play);


// let reduce = users.reduce(function(acc,lvls){
//
//     if(lvls.lvl >1 && lvls.lvl <=30){
//         acc.smalLvl.push(lvls)
//     }
//     if(lvls.lvl >30 && lvls.lvl <=50){
//         acc.midleLvl.push(lvls)
//     }
//     if(lvls.lvl >50 && lvls.lvl <=120){
//         acc.bigLvl.push(lvls)
//     }
// return acc
//     },{bigLvl:[],midleLvl:[],smalLvl:[]}
// )
//
// console.log(reduce);


// function userBilder(name,age){
//  let user = {name,age}
//  return {
//   getAge() {return user.age},
//   setAge(age){if(age>0){user.age=age}},
//   info(){return{...user}}
//
//  }
// }
//
//
// let ret = userBilder(`Tim`,31)
// ret.setAge(23)
// console.log(ret.getAge());
// console.log(ret.info());