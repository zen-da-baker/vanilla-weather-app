const url = "https://api.weather.gov/points/";

const perris = "33.8, -117.18";

const getData = async () => {
    try {
        const response = await fetch(url + perris);

        if (response.ok) {
            const jsonResponse = await response.json();
        }

        throw new Error('Response failed');

    } catch (error) {
        console.log(error);
    }
}