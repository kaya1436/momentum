const API_KEY = "9fc6d3dbdf48872af4652f4e3d67d95a"  //내 api
;
function onGeoOk(position) {
    const lat = position.coords.latitude;   //위도
    const lon = position.coords.longitude;   //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  //위도, 경도, api 넣기, &units=metric <-화씨 섭씨온도로 변환
    fetch(url)    //url 불러오기
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;    //도시 이름 불러와서 넣기
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   //날씨랑 기온 넣기
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  //위치정보 불러오기 onGeoOk 실행 오류나면 onGeoError 실행