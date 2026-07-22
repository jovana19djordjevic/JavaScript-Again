let cities = [
	"Beograd",
	"Subotica",
	"Novi Sad",
	"Sarajevo",
	"Podgorica",
	"Zagreb",
	"Niš",
	"Kragujevac",
	"Priština",
	"Skoplje",
	"Bitola",
	"Ohrid",
	"Sofija",
	"Plovdiv",
	"Varna",
	"Tirana",
	"Drač",
	"Split",
	"Rijeka",
	"Dubrovnik",
	"Mostar",
	"Banja Luka",
	"Tuzla",
	"Maribor",
	"Ljubljana",
	"Kotor",
];

let types = [
	"Stanovi",
	"Kuće",
	"Poslovni prostori",
	"Placevi",
	"Garaže/parking",
];

let rooms = [
	"Garsonjera",
	"Jednosoban stan",
	"Jednoiposoban stan",
	"Dvosoban stan",
	"Dvoiposoban stan",
	"Trosoban stan",
	"Troiposoban stan",
	"Četvorosoban",
	"4.5 i više soba",
];

let realEstates = [
	{
		city: "Beograd",
		opstion: "Garsonjera",
		type: "Stanovi",
		price: 48200,
		size: 25,
	},
	{
		city: "Novi Sad",
		opstion: null,
		type: "Kuće",
		price: 120000,
		size: 85,
	},
	{
		city: "Subotica",
		opstion: "Jednosoban stan",
		type: "Stanovi",
		price: 56000,
		size: 38,
	},
	{
		city: "Sarajevo",
		opstion: "Dvosoban stan",
		type: "Stanovi",
		price: 78000,
		size: 55,
	},
	{
		city: "Podgorica",
		opstion: null,
		type: "Kuće",
		price: 145000,
		size: 110,
	},
	{
		city: "Zagreb",
		opstion: "Trosoban stan",
		type: "Stanovi",
		price: 165000,
		size: 72,
	},
	{
		city: "Niš",
		opstion: "Garsonjera",
		type: "Stanovi",
		price: 39000,
		size: 24,
	},
	{
		city: "Kragujevac",
		opstion: "Dvoiposoban stan",
		type: "Stanovi",
		price: 69000,
		size: 61,
	},
	{
		city: "Split",
		opstion: null,
		type: "Garaže/parking",
		price: 22000,
		size: 14,
	},
	{
		city: "Ljubljana",
		opstion: "Četvorosoban",
		type: "Stanovi",
		price: 240000,
		size: 95,
	},
	{
		city: "Tirana",
		opstion: null,
		type: "Poslovni prostori",
		price: 98000,
		size: 70,
	},
	{
		city: "Kotor",
		opstion: null,
		type: "Placevi",
		price: 75000,
		size: 450,
	},
];

cities.unshift("Svi");

let cityForma = document.querySelector("#city");
let typeSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");

for (citie of cities) {
	let option = document.createElement("option");
	let citieCount = 0;

	option.value = citie;

	option.textContent = citie;

	console.log(cities);

	let cityFound = false;

	for (let estate of realEstates) {
		if (estate.city === citie) {
			cityFound = true;
			citieCount++;
		}
	}

	if (!cityFound && citie !== "Svi") {
		option.setAttribute("disabled", "true");
	}

	if (citie === "Svi") {
		citieCount = realEstates.length;
	}

	option.textContent += ` (${citieCount})`;

	cityForma.appendChild(option);
}

for (type of types) {
	let optionType = document.createElement("option");

	optionType.value = type;

	optionType.textContent = type;

	typeSelector.appendChild(optionType);
}

for (room of rooms) {
	let optionRooms = document.createElement("option");

	optionRooms.value = room;

	optionRooms.textContent = room;

	roomSelector.appendChild(optionRooms);
}

let searchCity = null;
let typeCity = null;
let roomCity = null;

cityForma.addEventListener("change", function (event) {
	searchCity = event.currentTarget.value.trim();

	let allEstates = document.getElementsByClassName("realEstate");
	console.log(allEstates);

	for (let realEstete of allEstates) {
		let estateCity = realEstete.getElementsByClassName("city")[0].textContent;

		if (searchCity === "Svi" || estateCity === searchCity) {
			realEstete.style.display = "block";
		} else if (estateCity !== searchCity) {
			realEstete.style.display = "none";
		}
	}
});

typeSelector.addEventListener("change", function (event) {
	typeCity = event.currentTarget.value;
});

roomSelector.addEventListener("change", function (event) {
	roomCity = event.currentTarget.value;
});

let estateWraper = document.querySelector("#estates");

for (let estate of realEstates) {
	let divEstate = document.createElement("div");
	divEstate.classList = "realEstate";

	let titleEstate = document.createElement("h1");
	titleEstate.textContent = estate.city;
	titleEstate.classList = "city";

	let optionEstate = document.createElement("p");
	optionEstate.textContent = estate.opstion;
	if (estate.opstion === null) {
		optionEstate.textContent = "--";
	}

	let priceEstate = document.createElement("p");

	priceEstate.textContent = estate.price;

	let sizeEstate = document.createElement("p");
	sizeEstate.textContent = estate.size;

	divEstate.append(titleEstate, optionEstate, priceEstate, sizeEstate);

	estateWraper.append(divEstate);
}
