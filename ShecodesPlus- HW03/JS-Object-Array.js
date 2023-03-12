let paris = {
    name: "Paris",
    country: "France",
    language: "French",
    temperature: 18,
    capitalCity: true
};
// challenge 1
console.log(paris.temperature);

// challenge 2
let sydney = {
    name: "sydney",
    country: "Australia",
    language: "English",
    temperature: 15,
    capitalCity: true
};
console.log(sydney.temperature);

// challenge 3
let cities = ["Sydney", "Melbourne", "Brisbane"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// challenge 4
let city = [
    {
        name: "sydney",
        country: "Australia",
        language: "English",
        temperature: 15,
        capitalCity: true
    },
    {
        name: "Melbourne",
        country: "Australia",
        language: "English",
        temperature: 16,
        capitalCity: true
    },
    {
        name: "Brisbane",
        country: "Australia",
        language: "English",
        temperature: 17,
        capitalCity: true
    }
];
console.log(city[0].temperature);
console.log(city[1].temperature);
console.log(city[2].temperature);
