// challenge 1
let weather = new Object();
// challenge 2
weather = {
    temp: 10,
    humidity: 50
};
console.log(weather);
// challenge 3
console.log(weather.temp);
console.log(weather.humidity);
// challenge 4
weather.windspeed = 80;
console.log(weather.windspeed);
// challenge 5
console.log(weather["temp"], weather["humidity"], weather["windspeed"]);
//challenge 6
let forecast = new Object();
forecast = {
    saturday: "11",
    sunday: "12",
    monday: "13",
    thuesday: "14",
    wednesday: "15",
    thursday: "16",
    friday: "17"
};
console.log(forecast);
// challenge 6 instructor code
let forecast = [
    {
        day: "Monday",
        temp: 25
    },
    {
        day: "Tuesday",
        temp: 26
    },
    {
        day: "Wednesday",
        temp: 30
    },
    {
        day: "Thursday",
        temp: 14
    },
    {
        day: "Friday",
        temp: 22
    }
];
console.log(forecast);