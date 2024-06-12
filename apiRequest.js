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

