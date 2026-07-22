let name = "admin";

name = name.toLowerCase();

if (name == "admin") {
	console.log("Pozdrav admine");
} else {
	console.log("vi ste obican clan");
}

let slova = name.split("");

if (slova.includes("a")) {
	console.log("Sadryi slovo a");
}

let samoglasnici = ["a", "e", "i", "o", "u"];

if (samoglasnici.includes(name[0])) {
	console.log("Pocinej samoglasnikom");
}
