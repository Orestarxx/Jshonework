// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.



let url = new URL(location.href);
let id = url.searchParams.get(`id`);
console.log(id);
console.log(url);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(resp => resp.json())
.then(user =>{
    let d = document.createElement(`div`);
    d.classList.add(`father`);
    document.body.appendChild(d);
        let maind =document.createElement(`div`);
        maind.classList.add(`main`);
        d.appendChild(maind)
        let idd1 = document.createElement(`div`);
        idd1.classList.add(`index`);
        idd1.innerHTML =`<b>id:</b>${user.id}`;
        maind.appendChild(idd1);
        let named2 = document.createElement(`div`);
        named2.classList.add(`name`);
        named2.innerHTML =`<b>name:</b>${user.name}`;
        maind.appendChild(named2);
        let userND3 = document.createElement(`div`);
        userND3.classList.add(`uName`);
        userND3.innerHTML=`<b>userName:</b>${user.username}`;
        maind.appendChild(userND3);
        let emaild4 = document.createElement(`div`);
        emaild4.classList.add(`email`);
        emaild4.innerHTML=`<b>email:</b>${user.email}`
        maind.appendChild(emaild4);
        let adred5 = document.createElement(`div`);
        adred5.classList.add(`address`);
        adred5.innerHTML =`<b>address:</b>`;
        maind.appendChild(adred5);
        let street = document.createElement(`div`);
        street.classList.add(`second`)
        street.innerHTML =`Street:${user.address.street}`;
        adred5.appendChild(street);
        let suite = document.createElement(`div`);
        suite.classList.add(`second`);
        suite.innerHTML =`Suite:${user.address.suite}`;
        adred5.appendChild(suite);
        let city = document.createElement(`div`);
        city.classList.add(`second`);
        city.innerHTML =`City:${user.address.city}`;
        adred5.appendChild(city);
        let zip = document.createElement(`div`);
        zip.classList.add(`second`);
        zip.innerHTML =`Zipcode:${user.address.zipcode}`;
        adred5.appendChild(zip);
        let geo = document.createElement(`div`);
        geo.classList.add(`geo`);
        geo.innerHTML =`<b>geo:</b>`
        adred5.appendChild(geo);
        let lat = document.createElement(`div`);
        lat.classList.add(`third`);
        lat.innerHTML =`Lat:${user.address.geo.lat}`
        geo.appendChild(lat);
        let lng = document.createElement(`div`);
        lng.classList.add(`third`);
        lng.innerHTML =`Lng:${user.address.geo.lng}`;
        geo.appendChild(lng);
        let phone = document.createElement(`div`);
        phone.classList.add(`phone`);
        phone.innerHTML =`<b>phone:</b>${user.phone}`;
        maind.appendChild(phone);
        let web = document.createElement(`div`);
        web.classList.add(`web`);
        web.innerHTML =`<b>webSite:</b>${user.website}`;
        maind.appendChild(web);
        let company = document.createElement(`div`);
        company.classList.add(`company`);
        company.innerHTML =`<b>company:</b>`
        maind.appendChild(company);
        let nameFourth = document.createElement(`div`);
        nameFourth.classList.add(`fourth`);
        nameFourth.innerHTML =`Name:${user.company.name}`;
        company.appendChild(nameFourth);
        let catchF = document.createElement(`div`);
        catchF.classList.add(`fourth`);
        catchF.innerHTML =`CatchFrase:${user.company.catchPhrase}`;
        company.appendChild(catchF);
        let bs = document.createElement(`div`);
        bs.classList.add(`fourth`);
        bs.innerHTML =`Bs:${user.company.bs}`;
        company.appendChild(bs);
        let button = document.createElement('button');
        button.innerHTML = 'post of current user';
        document.body.appendChild(button);
        let divUl = document.createElement(`div`);
        divUl.classList.add(`ulDiv`);
        let ul = document.createElement(`ul`);
        document.body.appendChild(divUl);
        divUl.appendChild(ul);

    button.onclick = function(){
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {
                    if(post.userId !== user.id)
                        continue;
                    let li = document.createElement(`li`)
                    ul.appendChild(li);
                    let aa = document.createElement(`a`)
                    aa.innerText = post.title;
                    aa.classList.add(`block`)
                    aa.href =`index3.html?postId=${post.id}`
                    li.appendChild(aa);




                }

            })

    };



})











