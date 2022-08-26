// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let postId = url.searchParams.get(`postId`);
console.log(url);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(resp => resp.json())
    .then(posts =>{
    let div = document.createElement(`div`);
         div.classList.add(`main`)
         document.body.appendChild(div);
    let second = document.createElement(`div`);
        second.classList.add(`second`);
         div.appendChild(second);
    let div1 = document.createElement(`div`)
        div1.innerHTML =`<b>UserId:</b>${posts.userId}`;
        second.appendChild(div1);
    let div2 = document.createElement(`div`);
        div2.innerHTML =`<b>ID:</b>${posts.id}`;
        second.appendChild(div2);
    let div3 = document.createElement(`div`);
        div3.innerHTML =`<b>Title:</b>${posts.title}`;
        second.appendChild(div3);
    let div4 = document.createElement(`div`);
        div4.innerHTML =`<b>Body:</b>${posts.body}`;
        second.appendChild(div4);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        let divv = document.createElement(`div`);
        divv.classList.add(`pocket`);
        document.body.appendChild(divv);
        for (const comment of comments) {

            let div00 = document.createElement(`div`);
            div00.classList.add(`father`);
            divv.appendChild(div00);
            let div11 = document.createElement(`div`);
            div11.innerHTML =`<b>PostId:</b>${comment.postId}`
            div00.appendChild(div11);
            let div22 = document.createElement(`div`);
            div22.innerHTML =`<b>Id:</b>${comment.id}`;
            div00.appendChild(div22);
            let div33 = document.createElement(`div`);
            div33.innerHTML =`<b>Email:</b>${comment.email}`;
            div00.appendChild(div33);
            let div44 = document.createElement(`div`);
            div44.innerHTML =`<b>Body:</b>${comment.body}`;
            div00.appendChild(div44);
    }

    });
    });




