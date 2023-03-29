
function getValue(){
    var cityInput = document.getElementById("in").value;
fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityInput +"&appid=02b4c674fdd7aef00058e1322c2cc9c3")
    .then((res) => {
    const data = res.json();
return data;
})
    .then((data) => {
        if (data.name == undefined ) {
            alert('Veuillez entrer une ville valide');
            document.getElementById("in").value = ""
            return
        }
        const divName = document.getElementById('name'); // 
        divName.innerText = data.name;
        /*const dataName = document.createElement('h1');
        dataName.innerText = data.name;
        divName.appendChild(dataName);*/

        celsiusConv(data.main.temp, data.main.temp_min, data.main.temp_max)

        const divHumid = document.getElementById('humidity');
        divHumid.innerText = data.main.humidity + " %"
        /* const dataHumid = document.createElement('h2');
        divHumid.appendChild(dataHumid)*/

        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
})
}

function celsiusConv(valTemp, valTempMin, valTempMax){
    const divTemp = document.getElementById('temp')
    divTemp.innerText = Math.round((valTemp - 273.15)*100/100) + "°C"
    /*const dataTemp = document.createElement('h2')
    divTemp.appendChild(dataTemp)*/

    const divTempMin = document.getElementById('tempmin')
    divTempMin.innerText =Math.round((valTempMin - 273.15)*100/100) + "°C"

    const divTempMax = document.getElementById('tempmax')
    divTempMax.innerText =Math.round((valTempMax - 273.15)*100/100) + "°C"
    
    /* const dataRessenti = document.createElement('h2');
    divRessenti.appendChild(dataRessenti) */
}

/* const divTemp = document.getElementById('temp');
const dataTemp = document.createElement('h2');
dataTemp.innerText = data.main.temp;
divTemp.appendChild(dataTemp) 
const divRessenti = document.getElementById('ressenti');
const dataRessenti = document.createElement('h2');
dataRessenti.innerText = data.main.feels_like;
            */
