let number = 7;

if (number > 5) {
	console.log("Broj je veci od 7");
}

let age = 16;

if (age >= 18) {
	console.log("Punoletan je");
} else {
	console.log("maloletan je");
}

let ocene = ["5", "3", "4", "2", "5"];

for (let i = 0; i < ocene.length; i++) {
	if (ocene[i] >= 4) {
		console.log(ocene[i]);
	}
}

let name = ["Ana", "Marko", "Jovan"];

for (let i = 0; i < name.length; i++) {
	let letter = name[i][0].toLowerCase();

	if (letter === "a") {
		console.log(name[i]);
	}
}

let citie = ["Beograd", "Novi Sad", "Nis"];

for (let i = 0; i < citie.length; i++) {
	if (citie[i].length > 5) {
		console.log(citie[i]);
	}
}

let day = 3;

switch (day) {
	case 1:
		console.log("POnedeljak");
		break;
	case 2:
		console.log("Utorak");
		break;
	case 3:
		console.log("Sreda");
		break;
}

let color = "zelena";

switch (color) {
	case "zelena":
		console.log("Kreni");
		break;
	case "crvena":
		console.log("Stop");
		break;
	case "zuta":
		console.log("Paynja");
		break;
}

let statusi = ["online", "ofline"];

for (let i = 0; i < statusi.length; i++) {
	switch (statusi[i]) {
		case "online":
			console.log("ONline");
			break;
		case "ofline":
			console.log("Ofline");
			break;
	}
}

let broj = 10;

if (broj % 2 === 0) {
	console.log("Broj je paran");
} else {
	console.log("Broj je neparan");
}

let rezultati = [45, 70, 90];

for (let i = 0; i < rezultati.length; i++) {
	if (rezultati[i] >= 60) {
		console.log("Polozio");
	} else {
		console.log("Nedovoljno");
	}
}

let brojevi = [3, 5, 8, 2];

let sum = 0;

for (let i = 0; i < brojevi.length; i++) {
	sum += brojevi[i];
}
console.log(sum);

let brojevi2 = [1, 2, 3, 4, 5];

let max = 0;

for (let i = 0; i < brojevi2.length; i++) {
	if (brojevi2[i] > max) {
		max = brojevi2[i];
	}
}
console.log(max);

let poruke = ["Hello", "Word", "JS"];

for (let i = 0; i < poruke.length; i++) {
	let leterSplit = poruke[i].split("");

	if (leterSplit.includes("o")) {
		console.log(poruke[i]);
	}
}

let poeni = 85;

if (poeni >= 80) {
	console.log("Odlican");
} else if (poeni >= 60 || poeni < 79) {
	console.log("Dobar");
} else if (poeni < 60) {
	console.log("Nedevoljan");
}

let uloge = ["admin", "user", "guest"];

for (let i = 0; i < uloge.length; i++) {
	switch (uloge) {
		case "admin":
			console.log("admin pristup");
			break;
		case "user":
			console.log("Korisnik");
			break;
		case "guest":
			console.log("Gost");
			break;
	}
	console.log(uloge[i]);
}

let brojevi3 = [2, 4, 6, 8];

let i = 0;

while (i < brojevi3.length) {
	i++;
	console.log(brojevi3[i]);
}

let x = 5;

while (x > 0) {
	x--;

	console.log(x);
}

let jezici = ["JS", "HTML", "CSS"];

for (let i = 0; i < jezici.length; i++) {
	switch (jezici[i]) {
		case "JS":
			console.log("JavScript");
			break;
		case "HTML":
			console.log("HTML jezik");
			break;
		case "CSS":
			console.log("CSS jezik");
			break;
	}
}

let ulogovan = ["true", "false", "true"];

for (let i = 0; i < ulogovan.length; i++) {
	if (ulogovan[i] == "true") {
		console.log("ulogovan");
	} else if (ulogovan[i] == "false") {
		console.log("NIste registrovani");
	}
}

let vreme = "noc";

switch (vreme) {
	case "noc":
		console.log("Laku noc");
		break;
	case "dan":
		console.log("Dobar dan");
		break;
	case "jutro":
		console.log("Dobro jutro");
		break;
}

let cifre = [5, 3, 4, 2, 5];

let sum1 = 0;

for (let i = 0; i < cifre.length; i++) {
	if (cifre[i] > 3) {
		sum1 += cifre[i];
	}
	console.log(sum1);
}

let ocene2 = [5, 3, 4, 2, 5];

for (let i = 0; i < ocene2.length; i++) {
	if (ocene2[i] == 5) {
		console.log(ocene2[i]);
	}
}

let gradovi = ["Beograd", "Novi Sad", "nis"];

for (let i = 0; i < gradovi.length; i++) {
	let gradoviLetter = gradovi[i].toLowerCase();
	if (gradoviLetter.includes("nis")) {
		console.log("Pronadjen NIs");
	} else {
		console.log("NIje pronadjen nis");
	}
}

let number1 = [1, 2, 3, 4, 5];

let zbir = [];

for (let i = 0; i < number1.length; i++) {
	zbir.push(number1[i] + 10);
}
console.log(zbir);

let tip = "mobilni";

switch (tip) {
	case "mobilni":
		console.log("Mobilni uredjaj");
		break;
	case "deskop":
		console.log("Deskop uredjaj");
		break;
}

let poruke2 = ["Zdravo", "Cao", "Hello"];

for (let i = 0; i < poruke2.length; i++) {
	let crtice = poruke2.join("-");

	console.log(crtice);
}

let num = [10, 20, 30];

let sumNuber = [];

for (let i = 0; i < num.length; i++) {
	sumNuber.push(num[i] / 2);
}

console.log(sumNuber);

let ocene5 = [5, 3, 4, 2, 5];

for (let i = 0; i < ocene5.length; i++) {
	if (ocene5[i] >= 5) {
		console.log("Odlican");
	} else if (ocene5[i] > 3 || ocene5[i] < 4) {
		console.log("Dobar");
	} else if (ocene5[i] < 3) {
		console.log("Nedovoljan");
	}
}
