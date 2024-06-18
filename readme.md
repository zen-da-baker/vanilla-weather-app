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
The use of the API
### Render Function
This was a success as I accessed the API data in a JSON response in the console. I then also created a render function to test displaying the JSON data on the manipulated DOM.

## License
MIT License for free use and distribution.
