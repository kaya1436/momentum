const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  //toDoForm 안의 input부분 가져오기
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //todo list

function saveToDos(){
    localStorage.setItem(TODOS_KEY,  JSON.stringify(toDos)); //문자열로 변환 ex) ["a","b","c"]
}

function deleteToDo(event){
    const li = event.target.parentElement;  //click event의 부모 element찾기 -> <li>
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //filter는 false이면 제거
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");   //<li>태그 생성
    li.id = newTodo.id;
    const span = document.createElement("span");   //<span>태그 생성
    span.innerText = newTodo.text;   //handleToDoSubmit함수에서 입력한 값의 text만 span에 넣기
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);   //<li>밑에 <span>넣기
    li.appendChild(button);
    toDoList.appendChild(li);   //<toDoList>에 위에서 만든 <li>넣기
}

function handleToDoSubmit(event){
    event.preventDefault();   //화면 새로고침 중지
    const newTodo = toDoInput.value;   //값 newTodo에 저장
    toDoInput.value = "";   //입력창 비우기
    const newTodoObj = {  //ex) text: "eat", id: 1235456
        text: newTodo,  
        id: Date.now()
    };
    toDos.push(newTodoObj);  //newTodo 내용을 array에 넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);  //엔터 누르면 handleToDoSubmit함수 실행

const savedToDos = localStorage.getItem(TODOS_KEY);  //저장한 todo list 가져오기

if(savedToDos !== null){   //todo list가 있으면
    const parsedToDos = JSON.parse(savedToDos);   //JSON문자열 객체로 변환
    toDos = parsedToDos;   //입력 list array에 저장
    parsedToDos.forEach(paintToDo);  //array에 있는 값 각각 paintToDo 실행
}