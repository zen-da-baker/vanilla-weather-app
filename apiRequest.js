const url = "https://api.weather.gov/gridpoints/";

const perris = "SGX/65,25/forecast";
const la = "LOX/164,41/forecast";
const sanDiego = "SGX/62,12/forecast";
const sacramento = "STO/43,64/forecast";
const sanFrancisco = "MTR/85,102/forecast";
const lasVegas = "VEF/124,94/forecast";
const portland = "PQR/120,92/forecast";

let endpoint = lasVegas;

function selectCity(city) {

    if (city == 'perris') {
        endpoint = perris;
    } else if (city == 'la') {
        endpoint = la;
    } else if (city == 'sanDiego') {
        endpoint = sanDiego;
    } else if (city == 'sacramento') {
        endpoint = sacramento;
    } else if (city == 'sanFrancisco') {
        endpoint = sanFrancisco;
    } else if (city == 'lasVegas') {
        endpoint = lasVegas;
    } else if (city == 'portland') {
        endpoint = portland;
    }

    getData();
}

function renderResponse(res) {
    const periods = res.properties.periods;

    function displayRain(i) {
        if (periods[i].probabilityOfPrecipitation.value == undefined || periods[i].probabilityOfPrecipitation.value == null) {
             return 0;
        } else {
            return periods[i].probabilityOfPrecipitation.value;
        }
    }

    function displayHumidity(i) {
        if (periods[i].relativeHumidity.value == undefined || periods[i].relativeHumidity.value == null) {
            return 0;
        } else {
            return periods[i].relativeHumidity.value;
        }
    }

    let day2Rain = displayRain(2);
    let day2Humidity = displayHumidity(2);

    let day3Rain = displayRain(4);
    let day3Humidity = displayHumidity(4);

    let day4Rain = displayRain(6);
    let day4Humidity = displayHumidity(6);

    let day5Rain = displayRain(8);
    let day5Humidity = displayHumidity(8);

    let day6Rain = displayRain(10);
    let day6Humidity = displayHumidity(10);

    let day7Rain = displayRain(12);
    let day7Humidity = displayHumidity(12);

    
    
    document.getElementById("day1").innerHTML = 
        `
        <h2>${periods[0].name}</h2>
        <p>${periods[0].detailedForecast}</p>
        <p>Temp: ${periods[0].temperature} ${periods[0].temperatureUnit}</p>
        `;
    
    document.getElementById("night1").innerHTML = 
        `
        <h3>${periods[1].name}</h2>
        <p>${periods[1].detailedForecast}</p>
        <p>Temp: ${periods[1].temperature} ${periods[1].temperatureUnit}</p>
        `;

    document.getElementById("day2").innerHTML = 
        `
        <h2>${periods[2].name}</h2>
        <h3>${periods[2].shortForecast}</h3>
        <p>Temp: ${periods[2].temperature} ${periods[2].temperatureUnit}</p>
        <p>Winds: ${periods[2].windSpeed} ${periods[2].windDirection}</p>
        <p>Percipitation: ${day2Rain} %</p>
        <p>Humidity: ${day2Humidity} %</p>
        `;

    document.getElementById("day3").innerHTML = 
        `
        <h2>${periods[4].name}</h2>
        <h3>${periods[4].shortForecast}</h3>
        <p>Temp: ${periods[4].temperature} ${periods[4].temperatureUnit}</p>
        <p>Winds: ${periods[4].windSpeed} ${periods[4].windDirection}</p>
        <p>Percipitation: ${day3Rain} %</p>
        <p>Humidity: ${day3Humidity} %</p>
        `;

    document.getElementById("day4").innerHTML = 
        `
        <h2>${periods[6].name}</h2>
        <h3>${periods[6].shortForecast}</h3>
        <p>Temp: ${periods[6].temperature} ${periods[6].temperatureUnit}</p>
        <p>Winds: ${periods[6].windSpeed} ${periods[6].windDirection}</p>
        <p>Percipitation: ${day4Rain} %</p>
        <p>Humidity: ${day4Humidity} %</p>
        `;

    document.getElementById("day5").innerHTML = 
        `
        <h2>${periods[8].name}</h2>
        <h3>${periods[8].shortForecast}</h3>
        <p>Temp: ${periods[8].temperature} ${periods[8].temperatureUnit}</p>
        <p>Winds: ${periods[8].windSpeed} ${periods[8].windDirection}</p>
        <p>Percipitation: ${day5Rain} %</p>
        <p>Humidity: ${day5Humidity} %</p>
        `;

    document.getElementById("day6").innerHTML = 
        `
        <h2>${periods[10].name}</h2>
        <h3>${periods[10].shortForecast}</h3>
        <p>Temp: ${periods[10].temperature} ${periods[10].temperatureUnit}</p>
        <p>Winds: ${periods[10].windSpeed} ${periods[10].windDirection}</p>
        <p>Percipitation: ${day6Rain} %</p>
        <p>Humidity: ${day6Humidity} %</p>
        `;

    document.getElementById("day7").innerHTML = 
        `
        <h2>${periods[12].name}</h2>
        <h3>${periods[12].shortForecast}</h3>
        <p>Temp: ${periods[12].temperature} ${periods[12].temperatureUnit}</p>
        <p>Winds: ${periods[12].windSpeed} ${periods[12].windDirection}</p>
        <p>Percipitation: ${day7Rain} %</p>
        <p>Humidity: ${day7Humidity} %</p>
        `;

}

const getData = async () => {
    try {
        const response = await fetch(url+endpoint);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            renderResponse(jsonResponse);
        } else {
            throw new Error('Response failed');
        }
    } catch (error) {
        console.log(error);
    }
}

