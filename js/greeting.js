const greetInputWrap = document.querySelector(".greeting-wrap");
const greetForm = greetInputWrap.querySelector(".greeting-form");
const greetInput = greetForm.querySelector("input");
const greetingTextName = document.querySelector(".greeting-text-name");
const showingClass = "showing";
const Name_LS = "name";
const greetingTime = document.querySelector(".greeting-time");

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

    greetingTextName.innerText = text;
}

function paintGreetTime(){
    const date = new Date();
    const hourTime = date.getHours();
    if(0 <= hourTime <7){
        greetingTime.innerText = `Good Night,`;
    } if( 6 < hourTime < 12){
        greetingTime.innerText = `Good Morning,`;
    } if(12 <= hourTime <18){
        greetingTime.innerText = `Good Afternoon,`;
    } if(18 <= hourTime < 24){
        greetingTime.innerText = `Good Evening,`;
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