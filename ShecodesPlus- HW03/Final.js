let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    }
};

let city = prompt("Enter a city:");
if (city !== "") {
    city = city.trim().toLowerCase();
    if (weather[city] !== undefined) {
        alert(
            "It is currently " +
            Math.round(weather[city].temp) +
            "°C in " +
            city +
            " with a humidity of " +
            weather[city].humidity +
            "%."
        );
    } else {
        alert(
            "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
            city
        );
    }
} else {
    alert("please reload and enter the name of the city again");
}
