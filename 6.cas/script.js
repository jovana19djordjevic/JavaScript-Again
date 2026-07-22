let products = ["hleb", "mleko", "jaja"];

for (let i = 0; i < products.length; i++) {
	console.log(products[i]);
}

for (let product in products) {
	console.log(product);
}

let korpa = [
	{
		name: "hleb",
		price: 99,
		amount: 1,
	},
	{
		name: "luk",
		price: 150,
		amount: 2,
	},
	{
		name: "mleko",
		price: 250,
		amount: 1,
	},
];

console.log(korpa[0]["price"]);

for (let proizvod in korpa) {
	if (korpa[proizvod]["price"] > 200) {
		break;
	}
	console.log(korpa[proizvod].price);
}
