$(document).ready(function () {
    // Set your API key from OpenWeatherMap.org
    const apiKey = 'fda4a221ef170ace3dbd58ec6ccef90e';

    $('#search-button').on('click', function () {
        const location = $('#search-input').val();

        if (location) {
            getWeather(location);
        } else {
            alert('Please enter a location');
        }
    });

    function getWeather(location) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
            method: 'GET',
            success: function (data) {
                displayWeather(data);
            },
            error: function (err) {
                console.log(err);
                alert('An error occurred while fetching the weather data. Please try again.');
            }
        });
    }

    function displayWeather(data) {
        const location = data.name;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temperature = data.main.temp - 273.15; // Convert from Kelvin to Celsius

        $('#location').text(`Location: ${location}`);
        $('#weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
        $('#weather-description').text(`Description: ${description}`);
        $('#temperature').text(`Temperature: ${temperature.toFixed(2)} °C`);
    }
});