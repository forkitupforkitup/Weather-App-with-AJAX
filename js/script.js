// example url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=efe524dec8b5176ddcb6484ef0f0963d"
const apiKey = "efe524dec8b5176ddcb6484ef0f0963d";
let cityData, userInput;

const $weatherFor = $("#weatherFor");
const $temp = $("#temp");
const $feelsLike = $("#feelsLike");
const $weather = $("#weather");

const $input = $("input[type = 'text']");

/* assigning the promise variable means assigning the userInput value before the handleGetData function uses it. This causes problems.*/
// const promise = $.ajax(
//     {
//         url: 
//             "http://api.openweathermap.org/data/2.5/weather?q="
//             +
//             userInput
//             +
//             ",US&APPID="
//             +
//             apiKey
//     }
// );
//event handler: first function takes submissions to OpenWeatherMap and calls the second function which renders return
$("form").on("submit", handleGetData);
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax(
        {
            url: 
                "https://api.openweathermap.org/data/2.5/weather?q="
                +
                userInput
                +
                ",US&APPID="
                +
                apiKey
        }
    ).then(
        (data) => {
            cityData = data;
            console.log("Data: ", data);
            $weatherFor.html(cityData.name);
            $temp.html(Math.round(cityData.main.temp * 1.8 - 459.67));
            $feelsLike.html(Math.round(cityData.main.feels_like * 1.8 - 459.67));
            $weather.html(cityData.weather[0].description);
        },
        (error) => {
            console.log("Error: ", error);
        }
    )   
};