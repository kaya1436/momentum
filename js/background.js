//배경 이미지 부분
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  //html에 img만들기

bgImage.src = `img/${chosenImage}`;   //img 주소 랜덤 입력

document.body.appendChild(bgImage);  //img html의 body에 넣기