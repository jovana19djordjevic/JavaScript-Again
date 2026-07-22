let name = "admin";

let password = "tajnaSifra";

if (name == "admin" && password == "tajnaSifra") {
	console.log("Pozdrav admine");
} else {
	console.log("Niste admin");
}

let userType = "moderator";

if (userType == "admin" || userType == "moderator") {
	console.log("Vi ste administrator");
} else {
	console.log("Vi ste obican clan");
}

let allowedTypes = ["admin", "moderator"];

let ifCheck = allowedTypes.includes(userType);

console.log(ifCheck);

if (ifCheck == true) {
	console.log("Vi ste moderator");
} else {
	console.log("Vi ste obican clan");
}

let dayOfTheWeek = "petak";

if (dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja") {
	console.log("Weekend");
} else if (dayOfTheWeek == "petak") {
	console.log("Weekend is coming");
} else {
	console.log("Work work");
}

switch (dayOfTheWeek) {
	case "ponedaljk":
		console.log("Work work");
		break;
	case "utorak":
		console.log("Work work");
		break;
	case "sreda":
		console.log("Work work");
		break;
	case "cetvrtak":
		console.log("Work work");
		break;
	case "petak":
		console.log("Weekend is coming");
		break;
	case "subota":
		console.log("weekend");
		break;
	case "nedelja":
		console.log("Weekend");
		break;
}
