let name = prompt("Upisite vase ime");

console.log(name);

let names = ["admin", "administrator", "jovana"];

for (let i = 0; i < names.length; i++) {
	if (
		names[i] === "admin" &&
		names[i] === "administrator" &&
		names[i] === "jovana"
	) {
		alert("Dobrodosli administratore");
	} else {
		alert("Nemate pristup");
	}

	console.log(names[i]);
}
