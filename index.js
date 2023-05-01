const API_URL = "http://api.weatherapi.com/v1/forecast.json?key=8af37167f0004192be273703233004&q=halifax&days=1&aqi=no&alerts=no";
 // my key 8af37167f0004192be273703233004 //




async function getWeather() {
    try {
        const response = await fetch(API_URL);
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);


        
            const {location,current,forecast} = responseData;
            const weather = document.createElement("div");
            weather.classList.add("weather");
            weather.innerHTML = `
            <div class="Weather-section"> 
            <h1> ${location.name} </h1>


            </div>
            `



            document.body.appendChild(weather)
        } catch (error) {
            console.log("Errorsad:", error);
        }
        
        // Handle response here
    } 


getWeather();
