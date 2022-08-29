
let hitPoints = 0;
function awake (startingDay){
return new Promise((resolve,reject) =>{
    setTimeout(() =>{
    if(!startingDay){
       hitPoints += 1500;
       resolve(hitPoints);
    }else {
        // console.log(`я залишився лежати на дивані`);
        reject(`залишився лежати на дивані`);
    }

    },800);
})
}
function haveDinner (dinner){
   return new Promise((resolve, reject) =>{
       setTimeout(() =>{
        if (dinner){
            // console.log(`поснідав`);
            hitPoints += 100;
            resolve(hitPoints);
        }else{
            console.log(` не поснідав`);

            reject(`багато роботи було`);
        }

    },200);
   })
}
function brushTeeth (brush){
    return new Promise((resolve,reject) =>{
    setTimeout(  ()=>{
        if (brush){
            // console.log('я почистив зуба)');
            hitPoints -=100;
            resolve(hitPoints);
        }else{
            console.log('я не почистив зуба)');
            reject(`не забув і почистив`);
        }

    },400);
    })
}
function studying (study){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (study) {
                // console.log('передивився лекції');
                hitPoints -= 300;
                resolve(hitPoints)
            } else {
                console.log('не передивився лекції');
                reject(`знання сила тому це маст хев`);
            }

        }, 1000);
    })
}
function listenToMusic (listen){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (listen) {
                // console.log(`послухав музику`);
                hitPoints += 50;
                resolve(hitPoints);
            } else {
                console.log(`не послухав музику`);
                reject(`знайшов час послухати музику бо швидко вирішв всі питання`);
            }

        }, 600);
    })
    }
function doSomeTusks(tusks){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tusks) {
                // console.log(`зробив пару завдань`);
                hitPoints -= 350;
                resolve(hitPoints);
            } else {
                console.log(`не зробив пару завдань`);
                reject(`практика потрібна`);
            }

        }, 100);
    })
}
function haveLunch(lunch){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!lunch) {
                // console.log('пообідав дуже файно');
                reject(` я ж не снідав тай проснувся дикий апетит`);
            } else {
                hitPoints += 100;
                resolve(hitPoints);

            }

        }, 2000);
    })
}
function oneMoreTimeWatchLecture (oneMore){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        if (oneMore){
            // console.log(`щераз переглянув лекції`);
            hitPoints -= 200;
            resolve(hitPoints);
        }else{
            console.log(`не переглянув`);
            reject(`повторєніє мать учєніє))`);
        }

    },1800);
    })
}
function coding (code){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        if (code){
        // console.log(`коджу щось за ради практики`);
        hitPoints -= 250;
        resolve(hitPoints);
        }else{
            console.log(`не коджу щось за ради практики`);
            reject(`ну бо люблю то шо зробиш`);
        }

    },1700);
    })
}
function supper (eat){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {

                hitPoints += 50;
                resolve(hitPoints);
            } else {
                // console.log(`не  файно вечеряю`);
                reject(`повечеряв не плотно бо обідом напхався))`);
            }

        }, 1900);
    })
}
function haveLectureFromSergiy (haveLecture){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveLecture) {
                // console.log('маю лекцію в Сергія');
                hitPoints -= 300;
                resolve(hitPoints);
            } else {
                console.log(' не маю лекцію в Сергія');
                reject(`лекції пропускати не можна`);
            }

        },2500)
    })
}

awake(true)
.then(points =>{
    console.log(`I got`, points, `from evening`);
        return brushTeeth(points);
})
    .then(brush =>{
            console.log(`I brushed my teeth and now I have`, brush,`hitPoints`);
        return haveDinner(brush)
})
    .then(dinner =>{
             console.log(`I ate this morning and now I have`,dinner,`hitPoints`);
         return studying(dinner)
})
    .then(study =>{
             console.log(`I looked again some of the lectures and lost hitPoints. By the way for this moment I have`, study);
        return listenToMusic(study);
    })
    .then(music =>{
            console.log(`I listened my favorite music and got`, 50,`hitPoints. Now I have`, music);
        return doSomeTusks(music);

})
    .then(tusk =>{
            console.log(`I did few tusks and lost points yeeeppp`, tusk);
        return haveLunch(tusk);
    })
    .then(lunch =>{
            console.log(` I was hungry because I hadnt eaten from the morning and got some points,`, lunch);
        return oneMoreTimeWatchLecture(lunch);
    })
    .then(oneMoreLecture =>{
             console.log(`Watched lectures one more time and you know what happened,`, oneMoreLecture);
        return coding(oneMoreLecture);
    })
    .then(code =>{
            console.log(`After lecture I  went to code and feel myself a little tired.Another loss`, code);
        return supper(code);
    })
    .then(supp =>{
             console.log(`I had big lunch and I wasnt hungry too much.Have some news to share))`, supp);
        return haveLectureFromSergiy(supp);
    })
    .then(fromSergiy =>{
            console.log(`Lecture from Sergiy was hard to understand and I as a usual lost a lot.For now I have`, fromSergiy,`but its too late maybe I must go sleep and recover my self `);
    })
    .catch(reason => {
       console.warn(`I didnt wake up and stayed in bed.`,reason) ;
    })
