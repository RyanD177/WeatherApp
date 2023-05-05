/*"d9a16e13727944fb091660e8020abeca",
"https://api.openweathermap.org/data/2.5/weather?q="
+ "&units=metric&appid="
https://openweathermap.org/img/wn/
@2x.png
"this.displayWeather"
*/
let weather = {

    apikey: "d9a16e13727944fb091660e8020abeca",
    fetchWeather: function (city) {

        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
            .then((response => response.json()))
            .then((data => this.displayWeather(data)))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {humidity,temp} = data.main;
        const {speed} =  data.wind;
 
      
        console.log(name)
        console.log(icon,description)
        document.querySelector(".city").innerHTML = `Weather in ${name}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".humidity").innerHTML = `Humidity:  ${humidity}`
        document.querySelector(".temp").innerHTML = `Temp:  ${temp} °C`
        document.querySelector(".wind").innerHTML = `Wind Speed:  ${speed} km`



    }

}


weather.fetchWeather("Halifax")

