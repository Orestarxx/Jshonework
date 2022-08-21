// Цикл в циклі
// - Є масив

// let coursesArray = [
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
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let main1 = document.getElementsByClassName(`father`)
// let main = main1[0];
//
//
// for (const arr of coursesArray) {
//     let t = document.createElement(`h1`);
//     t.innerText = `${arr.title}`;
//     main.appendChild(t);
//     let f = document.createElement(`div`);
//     f.classList.add(`stepF`);
//     main.appendChild(f);
//     let s = document.createElement(`div`);
//     s.classList.add(`son`);
//     s.innerText = `${arr.monthDuration}`;
//     f.appendChild(s);
//     let d = document.createElement(`div`);
//     d.classList.add(`daughter`);
//     d.innerText = `${arr.hourDuration}`
//     f.appendChild(d);
//     for (const el of arr.modules) {
//         let di = document.createElement(`div`)
//         di.classList.add(`help`)
//         main.appendChild(di)
//         let u = document.createElement(`ul`);
//         u.classList.add(`mother`);
//         di.appendChild(u)
//         let m = document.createElement(`li`);
//         m.innerText = `${el}`
//         u.appendChild(m)
//
//     }
// }


// це я просто  двома варіантами ітеріції вирішив попробувати ітерувати

// arr.modules.forEach(el => {
//
//     let di = document.createElement(`div`)
//     di.classList.add(`help`)
//     main.appendChild(di)
//     let u = document.createElement(`ul`);
//     u.classList.add(`mother`);
//     di.appendChild(u)
//     let m = document.createElement(`li`);
//     m.innerText = `${el}`
//     u.appendChild(m)
// }
