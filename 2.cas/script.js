let products = ["hleb", "mleko", "jogurt"];

console.log(products);

products.push("novine");

console.log(products);

products.shift();

console.log(products);

let cars = ["bmw", "audi", "mercedes"];

console.log(cars);

cars.sort();

console.log(cars);

let personaID = {
	name: "Tomislav",
	lastName: "Nikolic",
	hobbies: ["programming", "fishing"],
};

console.log(personaID.name);

personaID.height = 181.5;

console.log(personaID);

console.log(personaID.hobbies[1]);

let sentese = personaID.name + " " + "has gone" + " " + personaID.hobbies[1];

console.log(sentese);

let shop = {
	name: "Lidl",
	products: ["krompir", "spagete", "mleko", "hleb", "coca-cola"],
	openingHours: 08,
	closingHours: 22,
};

console.log(shop);

let number = [1, 2, 3, 4, 5];

console.log(number[4]);

let name = ["Ana", "Marko", "Jovan"];

console.log(name[1]);

name[1] = "Nikola";

console.log(name);

let ocene = [5, 4, 3];

console.log(ocene[0] + ocene[1]);

let cities = ["Beograd", "Novi Sad"];

console.log(cities);

cities.push("Nis");

console.log(cities);

cities.pop();

console.log(cities);
