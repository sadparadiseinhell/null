const key = '';
const city_name = '';

getWeatherInfo();

function getWeatherInfo() {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		celcius = Math.round(parseFloat(data.main.temp)-273.15);
		fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
		description = data.weather[0].description;
	})
	.then(function () {
		drawWeather();
	})
	.catch(function (error) {
		if (key == '') {
			document.getElementById('header__weather__alert').innerHTML = 'remember to add your api key';
		} else if (city_name == '') {
			document.getElementById('header__weather__alert').innerHTML = 'remember to add city name';
		}
		 else {
			document.getElementById('header__weather__alert').style.display = 'none';
			document.getElementById('header__weather__info').innerHTML = `n/a`;
			console.log(error);
		}
    });
	setTimeout(getWeatherInfo, 1800000);
}

function drawWeather() {
	document.getElementById('header__weather__info').innerHTML = `${description}, <span class="header__weather__temp">${celcius}\u00B0C</span>`;
}