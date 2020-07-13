// example url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=efe524dec8b5176ddcb6484ef0f0963d"
const apiKey = "efe524dec8b5176ddcb6484ef0f0963d";
let cityData, userInput;

const $weatherFor = $("#weatherFor");
const $temp = $("#temp");
const $feelsLike = $("#feelsLike");
const $weather = $("#weather");

const $input = $("input[type = 'text']");


const promise = $.ajax(
    {
        url: 
            "http://api.openweathermap.org/data/2.5/weather?q="
            +
            userInput
            +
            ",CA,US&APPID="
            +
            apiKey
    }
);
//event handler: first function takes submissions to OpenWeatherMap and calls the second function which renders return
$("form").on("submit", handleGetData);
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    promise.then(
        (data) => {
            cityData = data;
            console.log("Data: ", data);
            render();
        },
        (error) => {
            console.log("Error: ", error);
        }
    )   
};
function render() {
    $weatherFor.html(cityData.name);
    $temp.html(cityData.main.temp);
    $feelsLike.html(cityData.main.feels_like);
    $weather.html(cityData.weather[0].description);
};