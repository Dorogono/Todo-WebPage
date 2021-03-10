const body = document.querySelector("body");
const imgNum = 6;
const bgImage = "bgImage";

const imgAll = [
   `https://images.unsplash.com/photo-1559431803-2cba2fc893cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80`,
    `https://images.unsplash.com/photo-1591557132355-52f293ac9722?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
    `https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80`,
    `https://images.unsplash.com/photo-1570393080660-de4e4a15a247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80`,
    `https://images.unsplash.com/photo-1521458634394-4829d38b57f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`,
    `https://images.unsplash.com/photo-1584445183953-fcfb94d6e48d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`
];

function paintBg(number){
    const img = document.createElement("img");
    body.prepend(img);
    img.src = imgAll[number];
    img.classList.add(bgImage);
}

function genRandom(){
    const randomNum = Math.floor(Math.random()*imgNum);
    return randomNum;
}

function init(){
    const number = genRandom();
    paintBg(number);
}

init();