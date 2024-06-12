const url = "https://api.weather.gov/gridpoints/";

const perrisLong = "points/33,-117";
const perris = "SGX/65,25/forecast";

let json;

function renderResponse(res) {
    const periods = res.properties.periods;
    
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
        <p>${periods[2].detailedForecast}</p>
        <p>Temp: ${periods[2].temperature} ${periods[2].temperatureUnit}</p>
        `;

    document.getElementById("day3").innerHTML = 
        `
        <h2>${periods[4].name}</h2>
        <p>${periods[4].detailedForecast}</p>
        <p>Temp: ${periods[4].temperature} ${periods[4].temperatureUnit}</p>
        `;

    document.getElementById("day4").innerHTML = 
        `
        <h2>${periods[6].name}</h2>
        <p>${periods[6].detailedForecast}</p>
        <p>Temp: ${periods[6].temperature} ${periods[6].temperatureUnit}</p>
        `;

        document.getElementById("day5").innerHTML = 
        `
        <h2>${periods[8].name}</h2>
        <p>${periods[8].detailedForecast}</p>
        <p>Temp: ${periods[8].temperature} ${periods[8].temperatureUnit}</p>
        `;

        document.getElementById("day6").innerHTML = 
        `
        <h2>${periods[10].name}</h2>
        <p>${periods[10].detailedForecast}</p>
        <p>Temp: ${periods[10].temperature} ${periods[10].temperatureUnit}</p>
        `;

        document.getElementById("day7").innerHTML = 
        `
        <h2>${periods[12].name}</h2>
        <p>${periods[12].detailedForecast}</p>
        <p>Temp: ${periods[12].temperature} ${periods[12].temperatureUnit}</p>
        `;

}

const getData = async () => {
    try {
        const response = await fetch(url+perris);

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

getData();

