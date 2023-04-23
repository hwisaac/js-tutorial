const API_key = "f49a8153100918d0f3c3d76bfdaed2a6"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const lang = "ko";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=${lang}&units=metric`;

    console.log(url);
    // fetch로 url에 정보요청. network 탭, wheater name에서 preview 탭을 선택하면 정보를 확인가능
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        
        city.innerText = data.name;
        
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        
    });
}
function onGeoError(){
    alert('위치를 알 수 없어 날씨정보를 제공할 수 없어요');
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);