const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// 투두리스트를 브라우저에 기억하게 
let toDos = [];

// toDos 를 todos 에 저장
function saveToDos(){
    // JSON.stringify() 함수는 str 타입으로 바꿔준다.
    // JSON.parse() 함수는 str를 다시 aray로 되돌릴수있다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event){
    // event 가 갖는 target 프로퍼티로 어떤 버튼이 눌렸는지 찾을 수 있다.
    const li = event.target.parentElement;
    
    li.remove();
    
    
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

}
function paintToDo(newTodo){
    // li태그를 만들자
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}
function handleToDoSubmit(event) {
    // 새로고침 방지
    event.preventDefault();

    console.log(toDoInput.value);
    const newTodo= toDoInput.value;
    toDoInput.value="";
    
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);

    paintToDo(newTodoObj);
    saveToDos();    
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // 각 array성분에 대해 함수를 실행시키기: 어레이.forEach(함수); 각 array의 element 들을 으로 함수에 전달한다
    parsedToDos.forEach( paintToDo );
}