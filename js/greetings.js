//이름 입력 창 부분
const loginForm = document.querySelector("#login-form"); //id로 불러오기
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";
 
function onLoginSubmit(event){   //이름 입력 칸 
    event.preventDefault();      //사이트 새로고침 중지
    loginForm.classList.add(HIDDEN_CLASSNAME);    //class에 hidden넣기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);   //이름 저장
    paintGreetings(username);
}

function paintGreetings(username){  //이름 출력
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);  //저장된 이름 가져오기

if(savedUsername === null){   //저장된 이름 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);    //class에서 hidden제거
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}