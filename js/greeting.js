const greetInputWrap = document.querySelector(".greeting-wrap");
const greetForm = greetInputWrap.querySelector(".greeting-form");
const greetInput = greetForm.querySelector("input");

const greetingTextName = document.querySelector(".greeting-text-name");
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

    greetingTextName.innerText = text;
}

function init(){
    const currentName = localStorage.getItem(Name_LS);
    if(currentName === null){
        askName();
    } else {
        paintText(currentName);
    }
}

init();