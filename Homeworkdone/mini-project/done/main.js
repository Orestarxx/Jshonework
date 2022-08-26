// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let mainDiv = document.createElement(`div`)
        mainDiv.classList.add(`main`)
        document.body.appendChild(mainDiv);
        for (const user of users) {
            let div = document.createElement(`div`);
            div.innerText =`${user.id}-${user.name}`;
            div.classList.add(`flex`);
            mainDiv.appendChild(div);
            let butt = document.createElement(`button`)
            butt.classList.add(`button-85`)
            div.appendChild(butt)
            let a = document.createElement(`a`);
            a.href =`index1.html?id=${user.id}`;
            a.innerText =`details`;
            butt.appendChild(a);
        }
    })




