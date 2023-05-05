/*"d9a16e13727944fb091660e8020abeca",
"https://api.openweathermap.org/data/2.5/weather?q="
+ "&units=metric&appid="
https://openweathermap.org/img/wn/
@2x.png
"this.displayWeather"
*/


let weather = {   // Declare a variable named weather
    apikey: "d9a16e13727944fb091660e8020abeca",    // Declare a property named 'apikey' and assign it a string value
    fetchWeather: function (city) { // Declare a method '
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
            // Use fetch to get data from the url  and pass it to the next 'then' method as a JSON object
            .then((response => response.json()))
            // get the data from the JSON object
            .then((data => this.displayWeather(data)))
    },
    // declare a method
    displayWeather: function (data) {

        //  assign the data we get to individual variables
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {humidity,temp} = data.main;
        const {speed} =  data.wind;

        console.log(name)

        // takeover the HTML elements on the webpage with the retrieved weather data
        document.querySelector(".city").innerHTML = `Weather in ${name}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".humidity").innerHTML = `Humidity:  ${humidity}`
        document.querySelector(".temp").innerHTML = `Temp:  ${temp} °C`
        document.querySelector(".wind").innerHTML = `Wind Speed:  ${speed} km`
    },
    // Declare a method named 'search' 
    search: function () {
        // Call the 'fetchWeather' method with the value of the 'search-bar' input element
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

// add event listener to the search button  call the search method when clicked
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

// Call the fetchweather method
weather.fetchWeather("Halifax")
