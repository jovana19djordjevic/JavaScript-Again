let divMain = document.querySelector("#main");

let paragrafMain = document.createElement("p");
paragrafMain.textContent = "Dobrodosao";

divMain.append(paragrafMain);

let names = ["Petar", "Luka", "Maja"];

for (let name of names) {
	if (name.includes("a")) {
		let pragrafName = document.createElement("p");
		pragrafName.textContent = name;

		document.body.append(pragrafName);
	}
}

let score = 88;

let paragrafNum = document.createElement("p");
paragrafNum.textContent = score >= 88 ? "Pass" : "False";

console.log(paragrafNum);

let numbers = [3, 6, 9, 12, 15];

for (let number of numbers) {
	let liNumber = document.createElement("li");

	liNumber.textContent =
		number % 3 === 0
			? `Broj ${number} je deljiv sa 3`
			: `Broj ${number} nije deljiv sa 3`;

	document.body.append(liNumber);
}

let divCOntainer = document.querySelector("#container");

let colors = ["red", "yellow", "blue", "green", "Black"];

for (let i = 0; i <= 5; i++) {
	let span = document.createElement("span");
	span.textContent = "Element X";

	span.style.color = colors[i % colors.length];

	divCOntainer.append(span);
}

let proizvodi = ["Mleko", "Hleb", "Sir"];

for (let proizvod of proizvodi) {
	let liProizvod = document.createElement("li");
	liProizvod.textContent = `Na lageru ${proizvod}`;

	document.body.append(liProizvod);
}

let title = document.querySelector("#naslov");

if (title.textContent.length > 5) {
	console.log("Dug naslov");
} else if (title.textContent.length < 5) {
	console.log("Kratak naslov");
}

let prosek = document.querySelector("#prosek");

let ocene = [1, 3, 5, 2, 4];

let sumZbir = 0;

for (let i = 0; i < ocene.length; i++) {
	sumZbir += ocene[i];
}

let prosekNum = sumZbir / ocene.length;

prosek.textContent = prosekNum;

document.body.append(prosek);

let listaGradova = document.querySelector("#listaGradova");

let cities = ["Beograd", "Novi SAd", "Kragujevac", "Nis", "Valjevo"];

for (let citie of cities) {
	if (citie.includes("Nis")) {
		continue;
	}

	let liCitie = document.createElement("li");
	liCitie.textContent = `Grad : ${citie}`;

	listaGradova.appendChild(liCitie);
}

let boxes = document.querySelector("#boxes");

let colorsDiv = ["yellow", "grey", "purple", "pink"];

for (let i = 0; i <= 4; i++) {
	let div = document.createElement("div");
	div.textContent = boxes;

	div.style.backgroundColor = colorsDiv[i % colorsDiv.length];

	boxes.appendChild(div);
}

let uloge = ["admin", "user", "guest"];

for (let uloga of uloge) {
	let liUlege = document.createElement("li");

	switch (uloga) {
		case "admin":
			liUlege.textContent = "Pun pristup";
			break;
		case "user":
			liUlege.textContent = "Ogranicen pristup";
			break;
		case "guest":
			liUlege.textContent = "Samo citanje";
			break;
	}

	document.body.append(liUlege);
}

let input = document.querySelector("#textInput");
let paragrafInput = document.querySelector("#charCount");

input.addEventListener("input", function () {
	let tekst = this.value;

	let brojK = tekst.length;

	paragrafInput.textContent = brojK;
});

let button = document.querySelector("#toggleBtn");
let divBtn = document.querySelector(".info");

button.addEventListener("click", function () {
	divBtn.classList.toggle("show");
});

let cifre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let ulParni = document.querySelector("#parni");

for (let cifra of cifre) {
	let ilParni = document.createElement("li");

	if (cifra % 2 === 0) {
		ilParni.textContent = cifra;
	} else {
		continue;
	}

	ulParni.appendChild(ilParni);
}

let colorBox = document.querySelector("#colorBox");
let boxColor = ["red", "blue", "pink", "black", "grey"];

colorBox.addEventListener("mouseover", function () {
	let nasumicneBoje = Math.floor(Math.random() * boxColor.length);

	this.style.backgroundColor = boxColor[nasumicneBoje];
});

colorBox.addEventListener("mouseout", function () {
	this.style.backgroundColor = "";
});

let divFlex = document.querySelector("#flexContainer");

for (let i = 0; i <= 5; i++) {
	let paragrafFlex = document.createElement("p");
	paragrafFlex.textContent = `Red X ${i}`;

	if (i % 2 === 0) {
		paragrafFlex.style.fontWeight = "bold";
	}

	divFlex.appendChild(paragrafFlex);
}

let divRezultat = document.querySelector("#rezultat");

let oceneW = [5, 4, 3, 2, 1];

for (let ocena of oceneW) {
	let pragrafRezultat = document.createElement("p");

	if (ocena >= 4 && ocena <= 5) {
		pragrafRezultat.textContent = "Odlican";
	} else if (ocena === 3) {
		pragrafRezultat.textContent = "Dobar";
	} else if (ocena <= 2 && ocena >= 1) {
		pragrafRezultat.textContent = "Nedovoljan";
	}

	divRezultat.appendChild(pragrafRezultat);
}

let buttonCard = document.querySelector("#addCard");
let divCards = document.querySelector("#cards");

buttonCard.addEventListener("click", function () {
	let titleH2 = document.createElement("h2");
	titleH2.textContent = "Dobrodosli";

	let paragrafCards = document.createElement("p");
	paragrafCards.textContent = "Moje ime je";

	divCards.classList.toggle("show");

	divCards.append(titleH2, paragrafCards);
});

let fruits = ["Jabuka", "Banana", "Kruška", "Ananas"];
let fruitUl = document.createElement("ul");

for (let fruit of fruits) {
	let fruitLi = document.createElement("li");

	if (fruit.length >= 5) {
		fruitLi.textContent = `Voce ${fruit}`;
		fruitUl.appendChild(fruitLi);
	}
}

document.body.append(fruitUl);

let divNumber = document.querySelector("#numbers");

let numbersBox = [2, 4, 6, 8];

for (let i = 0; i < numbersBox.length; i++) {
	let paragrafNum = document.createElement("p");
	paragrafNum.textContent = numbersBox[i];
	paragrafNum.classList.add = "boxes";

	divNumber.appendChild(paragrafNum);
	document.body.append(divNumber);
}

let inputFocus = document.querySelector("#focusInput");

inputFocus.addEventListener("focus", function () {
	this.style.backgroundColor = "lightgreen";
});

inputFocus.addEventListener("blur", function () {
	this.style.backgroundColor = "";
});

let oceneCount = document.querySelector("#count");
let paragrafCount = document.createElement("p");

let oceneGroup = [3, 4, 5, 2];
let brojac = 0;

for (ocenaGroup of oceneGroup) {
	if (ocenaGroup >= 3) {
		brojac++;
	}
}

paragrafCount.textContent = brojac;
oceneCount.append(paragrafCount);

let hover = document.querySelector("#hoverEffect");

hover.addEventListener("mouseenter", function () {
	this.style.backgroundColor = "blue";
});

hover.addEventListener("mouseleave", function () {
	this.style.backgroundColor = "";
});

let divNames = document.querySelector("#names");

let imena = ["Ana", "Maja", "Ivan", "Luka"];

for (let ime of imena) {
	let parName = document.createElement("p");

	if (ime === "Ivan") {
		break;
	} else {
		parName.textContent = `Ime : ${ime}`;
	}

	divNames.appendChild(parName);

	document.body.append(divNames);
}

let boxesContainer = document.querySelector("#boxesContainer");

console.log(boxesContainer);

let bojeee = ["red", "purple", "green"];

for (let i = 0; i < 3; i++) {
	let divBoje = document.createElement("div");
	divBoje.textContent = "Box X";

	divBoje.style.backgroundColor = bojeee[i % bojeee.length];

	console.log(divBoje);

	//boxesContainer.appendChild(divBoje);
}

//Ovde mi uporno na appendu pokazuje gresku, a kad sam proverila u consoli (divBoje), sve lepo pokazuje

let brojevi = [5, 10, 15, 20, 25, 16];

for (let broj of brojevi) {
	let numParagraf = document.createElement("p");

	let deljiv = broj % 5 === 0;

	switch (deljiv) {
		case true:
			numParagraf.textContent = `${broj} jeste deljiv sa 5`;
			break;
		case false:
			numParagraf.textContent = `${broj} nije deljiv sa 5`;
			break;
	}

	document.body.append(numParagraf);
}

let loopDiv = document.querySelector("#loopText");

for (let i = 0; i < 5; i++) {
	let tekstLoop = document.createElement("p");
	tekstLoop.textContent = "Paragraf X";

	if (i % 2 === 0) {
		tekstLoop.style.color = "blue";
	}

	loopDiv.appendChild(tekstLoop);
}

document.body.append(loopDiv);
