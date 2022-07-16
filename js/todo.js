const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function paintToDo(newTodo){
    // li태그를 만들자
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);

}
function handleToDoSubmit(event) {
    // 새로고침 방지
    event.preventDefault();

    console.log(toDoInput.value);
    const newTodo= toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);
