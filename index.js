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
    try{
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response =>  response.json()))
        .then((data => console.log(data)))
    }
    catch(error){
        console.log("error")
    }
    }
}

weather.fetchWeather("Denver")
