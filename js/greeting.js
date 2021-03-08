const greetInputWrap = document.querySelector(".greeting-wrap");
const greetForm = greetInputWrap.querySelector(".greeting-form");
const greetInput = greetForm.querySelector("input");
const greetingTextName = document.querySelector(".greeting-text-name");
const greetingTime = document.querySelector(".greeting-time");
const showingClass = "showing";
const Name_LS = "name";


function saveName(text){
    localStorage.setItem(Name_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetInput.value;
    saveName(currentValue);
    paintText(currentValue);
}

function askName(){
    greetInput.classList.add(showingClass);

    greetForm.addEventListener("submit", handleSubmit);
}

function paintText(text){
    greetInput.classList.remove(showingClass);
    greetingTextName.classList.add(showingClass);
    greetingTime.classList.add(showingClass);

    greetingTextName.innerText = text;
}

function paintGreetTime(){
    const date = new Date();
    const greetingHour = date.getHours();

    if (7 <= greetingHour && greetingHour < 12){
        greetingTime.innerText = `Good Morning,`;
    } else if (12 <= greetingHour && greetingHour < 18){
        greetingTime.innerText = `Good Afternoon,`;
    } else if (18<= greetingHour && greetingHour <= 21){
        greetingTime.innerText = `Good Evening,`;
    } else {
        greetingTime.innerText = `Good Night,`;
    }
}

function init(){
    const currentName = localStorage.getItem(Name_LS);
    if(currentName === null){
        askName();
    } else {
        paintText(currentName);
    }
    paintGreetTime();
    setInterval(paintGreetTime, 1000);
}

init();
