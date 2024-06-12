const url = "https://api.weather.gov/points/";

const perrisLong = "33,-117";
const laLong = "34,-118";
const sanDiegoLong = "32.7,-117";
const sacramentoLong = "38.5,-121.4";
const sanFranciscoLong = "37.7,-122.4";
const lasVegasLong = "36.09,-115.09";
const portlandLong = "45.3,-122.4";

const getData = async () => {
    try {
        const response = await fetch(url+portlandLong);

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