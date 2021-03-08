const showTime = document.querySelector(".show-time");
const clock = showTime.querySelector(".clock");
const ampm = showTime.querySelector(".ampm");
const timeBtn = document.querySelector("input");

timeBtn.value = "";

const timeShow = "showing";
const timeHide = "hidden";

function getTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();

    clock.innerText = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`;
}

function clockClick(){
    const date = new Date();
    var hour = date.getHours();
    const m = date.getMinutes();

    if( hour < 12 ){
        ampm.innerText = `AM ${hour}:${m < 10 ? `0${m}` : m}`;
    } if (hour === 12){
        ampm.innerText = `PM ${hour}:${m < 10 ? `0${m}` : m}`;
    } if (hour > 12){
        hour = hour - 12;
        ampm.innerText = `PM ${hour}:${m < 10 ? `0${m}` : m}`;
    } if (hour === 0){
        hour = hour + 12;
        ampm.innerText = `AM ${hour}:${m < 10 ? `0${m}` : m}`;
    }
}

function handleClick(){
    ampm.classList.toggle(timeHide);
    clock.classList.toggle(timeShow);
}

function init(){
    getTime();
    clockClick();
    setInterval(clockClick, 1000);
    setInterval(getTime, 1000);
    timeBtn.addEventListener("click", handleClick);
}

init();