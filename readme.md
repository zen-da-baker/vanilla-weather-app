# Purpose
This is a weather app with integration of the weather API for real-time display of weather data to users. 
## Description
This weather app utilizes the NOAA API for weather data to be displayed on the app's web page. I chose this API because it is open to the public without the need for an API key. This was a great choice for making a publicly available Github repository without needing to censor personal information such as the API key. 

The app was programmed with vanilla HTML, CSS, and JavaScript making use of separation of concerns to house each aspect of functionality into it's own file such as the API fetch being in a separate file from the mobile menu toggle function. 

This style of application was suited for a functional programming style using the buttons for DOM manipulation rather than an object oriented programming style. 

The user experience is of a simple button press for a location they want to see the weather for and receive a 7 day forecast on their page without any technical knowledge required.
## Languages
- HTML
- CSS
- JavaScript
## Skills
- API consumption
- DOM manipulation
- Semantic HTML
- Responsive Design
- Separation of Concerns
## Technologies
Vanilla HTML, CSS, and JavaScript was used. No frameworks or libraries were applied to this project.
## Features
This app successfully fetches data from an API regarding weather hosted by NOAA for the display on a DOM manipulated webpage without the assistance of frameworks or libraries. The app also allows the user to select a city based on one of seven buttons provided to them which edits the endpoint of the API call.
## Instructions
The user must select a city they would like to see the seven day forecast for using the buttons in the header. All functionality of the app are abstracted away from the user. 
## Build Process
### Test programming
The app began with a boiler plate HTML file and an async function in a JavaScript file to test if I could properly consume the National Oceanic and Atmospheric Administration [public weather](https://www.weather.gov/documentation/services-web-api) API. 
```JavaScript
const getData = async () =>{
	try {
		const response = await fetch(url+endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse);
		} else {
			throw new Error('No reponse');
		}
	} catch (error) {
		console.log(error);
	}
}
```
To adjust what is requested from the API, the endpoint is stored in a variable that can be edited based on the user selection. 
```JS
const url = "https://api.weather.gov/gridpoints/";
const sacramento = "STO/43,64/forecast";

let endpoint = sacramento;
```
### Render Function
Fetching data from the weather API was a success meaning the next step was to display it on the webpage. I chose to do so using a render function that would execute inside of the fetch function. 
```JS
function renderResponse(res) {
	const periods = res.properties.periods;

	document.getElementById("day1").innerHTML =
		`
		<h2 class="center">${periods[0].name}</h2>
		<p>${periods[0].detailedForecast}</p>
		<p>Temp: ${periods[0].temperature} ${periods[0].temperatureUnit}</p>
		<p>Winds: ${periods[0].windSpeed} ${periods[0].windDirection}</p>
		`;
}
```
The data of the function is added to a DOM element using string insertion into template literals and DOM manipulation. 
### Lower Order Render Functions
There was a possibility that precipitation and humidity would return a null value which would throw an error when attempting to manipulate the DOM. To counteract this, I created lower order functions to return 0 if the data was null. 
The function takes an index as an argument and assesses that piece of data. If the data is not null, the data is returned as it is. 
```JS
function displayRain(i) {
	if (periods[i].probabilityOfPrecipitation.value == undefined || periods[i].probabilityOfPrecipitation.value == null) {
		return 0;
	} else {
		return periods[i].probabilityOfPrecipitation.value;
	}
}

let day1Rain = displayRain(0);

document.getElementById("day1").innerHTML =
	`
	<h2 class="center">${periods[0].name}</h2>
	<p>${periods[0].detailedForecast}</p>
	<p>Temp: ${periods[0].temperature} ${periods[0].temperatureUnit}</p>
	<p>Winds: ${periods[0].windSpeed} ${periods[0].windDirection}</p>
	<p>Percipitation: ${day1Rain} %</p>
	<p>Humidity: ${day1Humidity} %</p>
	`;
```
### City Selection
The user could choose a city to obtain a 7 day forecast for but pushing a button that executes the data fetching for that city.
```HTML
<button 
	class="btn" 
	onclick="changeTitle('Perris'); selectCity('perris')"
>Perris</button>
```
The title of the site is changed with a function that takes a city name as an argument. 
```JS
function changeTitle(city) {
	document.getElementById("title").innerHTML = city + " Weather";
}
```
The city selection function changes the endpoint of the API fetch based on the user input. 
```JS
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
```
### Mobile Menu
For responsive design, I condensed the header and display elements based on various screen sizes using media queries. For example, I had a separate header for large screen and one for mobile screens.
```CSS
@media screen and (min-width: 1280px) {

	.desktop-nav {
		display: block;
	}  

	.mobile-nav {
		display: none;
	}
}
```
With mobile screens, a mobile menu button is displayed.
```CSS
@media screen and (max-width: 1200px) {
	#mobileMenuId {
		display: block;
	}
}
```
And the functionality of the button toggles the display property of the city selection buttons. 
```JS
function toggleMenu() {
	const mobileNavItems = document.getElementById("mobile-nav-items");

	if (mobileNavItems.style.display == "block") {
		mobileNavItems.style.display = "none";
	} else {
		mobileNavItems.style.display = "block";
	}
}
```
The result of the programming is a website as follows.
![[Pasted image 20240618140247.png]]
## License
MIT License for free use and distribution.
