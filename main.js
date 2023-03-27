function celsiusConv(valTemp, valFeelsLike){
    const divTemp = document.getElementById('temp')
    const dataTemp = document.createElement('h2')
    dataTemp.innerText = Math.round((valTemp - 273.15)*100/100) + "°C"
    divTemp.appendChild(dataTemp)

    const divRessenti = document.getElementById('ressenti');
    const dataRessenti = document.createElement('h2');
    dataRessenti.innerText = Math.round((valFeelsLike - 273.15)*100)/100 + "°C";
    divRessenti.appendChild(dataRessenti)
}
const btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    const cityInput = document.getElementById('city')
});

fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=02b4c674fdd7aef00058e1322c2cc9c3")
    .then((res) => {
        const data = res.json();
return data;
  })
    .then((data) => {
         const divTest = document.getElementById('name');
        const datax = document.createElement('h1');
            datax.innerText = data.name;
            divTest.appendChild(datax);
        celsiusConv(data.main.temp,data.main.feels_like)
        const divHumid = document.getElementById('humidity');
        const dataHumid = document.createElement('h2');
            dataHumid.innerText = data.main.humidity + " %";
            divHumid.appendChild(dataHumid)
}) 

/* const divTemp = document.getElementById('temp');
const dataTemp = document.createElement('h2');
    dataTemp.innerText = data.main.temp;
    divTemp.appendChild(dataTemp) 
            const divRessenti = document.getElementById('ressenti');
        const dataRessenti = document.createElement('h2');
            dataRessenti.innerText = data.main.feels_like;
            */
