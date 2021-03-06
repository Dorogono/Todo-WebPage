const todoAll = document.querySelector(".todo-wrap");
const todoForm = todoAll.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-List");
const TODO_LS = 'todo';

var todos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodo = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = cleanTodo;
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodos(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❤";
    delBtn.addEventListener("click", deleteTodo);
    const newId = Math.ceil(Math.random()*99999);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    li.id = newId;
    const todoObj = {
        todo: text,
        id: newId
    };
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodos(currentValue);
    todoInput.value = "";
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            paintTodos(todo.todo);
        });
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();