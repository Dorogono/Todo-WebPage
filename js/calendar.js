const calendarWrap = document.querySelector(".calendar");
const calendarMonth = calendarWrap.querySelector(".calendar-date");
const calendarDate = calendarWrap.querySelector(".calendar-big");
const calendarBigDate = calendarDate.querySelector(".calendar-big-date");
const calendarBigWeek = calendarDate.querySelector(".calendar-big-week");

function showDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDay();
    const showDate = date.getDate();
    const week = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];

    calendarMonth.innerText = `${year} - ${month < 10 ? `0${month}` : month}`;
    calendarBigDate.innerText = showDate;
    calendarBigWeek.innerText = week[day];
}

function init(){
    showDate();
    setInterval(showDate, 1000);
}

init();