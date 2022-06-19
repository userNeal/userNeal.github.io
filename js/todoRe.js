// submitting to the form and adding to the todo list and deleting from it.
const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement; // event is button to be deleted, and then I got not to know(?) target object.
    // console don't know which button to be pressed
    // parentElement as a parent of buttons.
    li.remove(); // without arguments
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo; // what if I wrote without text? -- soon coming lecture
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault(); // prevent from refreshing.
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}


todoForm.addEventListener("submit", handleToDoSubmit);


// #1 Once you submit a value to the form, it's gonna be added to todo list.