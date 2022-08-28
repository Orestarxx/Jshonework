let hitPoints = 0;
function awake (startingDay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(startingDay){
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

async function day(){
   try{

    const hittPoints = await awake(true);
    console.log(hittPoints, `hitPoints`);
    const brush =  await brushTeeth(hittPoints);
    console.log(brush, `Points after brush`);
    const dinner = await haveDinner(brush);
    console.log(dinner, `after eating smth`);
    const study = await studying(dinner);
    console.log(study, `after learn`);
    const music = await listenToMusic(study);
    console.log(music, `after listening`);
    const tusks = await doSomeTusks(music);
    console.log(tusks, `after tusks`);
    const lunch = await haveLunch(tusks);
    console.log(lunch, `after lunch`);
    const oneMoreLecture = await oneMoreTimeWatchLecture(lunch);
    console.log(oneMoreLecture, `after lecture`);
    const code = await coding(oneMoreLecture);
    console.log(code, `after coding`);
    const supp = await supper(code);
    console.log(supp, `after supper`);
    const fromSergiy = await haveLectureFromSergiy(supp);
    console.log(fromSergiy, `after lecture from Sergiy`);
   }catch (e){

   }

}
day(true);