let elements = document.getElementById("paragraf1");

console.log(elements.textContent);

let elements1 = document.getElementsByClassName("tekst");

console.log(elements1.textContent);

let hTitle = document.querySelector("#naslov");

hTitle.textContent = "Novi Naslov";

console.log(hTitle.textContent);

let divBox = document.querySelector(".box");

divBox.innerHTML = "Novi sadržaj";

console.log(divBox.textContent);

let ppBold = document.querySelector("#par1");

ppBold.innerHTML = "<strong> Bold Test </strong>";

console.log(ppBold.textContent);

let item = document.getElementsByClassName("item");

console.log(item);

item[0].innerHTML = "Prvi Promenjen";

console.log(item[0].textContent);

let glavni = document.getElementById("glavni");

glavni.append("Dodato");

console.log(glavni.textContent);

let voce = document.getElementsByClassName("lista");

voce[1].innerHTML = "Kruska";

console.log(console.log.textContent);

let red = document.querySelector(".para");

red.style.color = "red";

console.log(red.textContent);

let divP = document.querySelector("#box");

let paragraf = document.createElement("p");
paragraf.textContent = "Novi paragraf";

divP.appendChild(paragraf);

let title = document.querySelector("#tekst");

title.append("+ dodato");

console.log(title.textContent);

let card = document.getElementsByClassName("card");

for (c in card) {
	card[c].innerHTML = "Promenjeno";
}

let number = document.getElementById("broj");

let trenutnaVrednost = Number(number.textContent);

trenutnaVrednost = trenutnaVrednost + 5;

console.log(trenutnaVrednost);

let opis = document.querySelector(".opis");

opis.textContent = "Nova opis";

console.log(opis.textContent);

let lista = document.getElementById("sadrzaj");

let ul = document.createElement("ul");

let il1 = document.createElement("li");
il1.textContent = "Prvi";

let il2 = document.createElement("li");
il2.textContent = "Drugi";

ul.appendChild(il1);
ul.appendChild(il2);

lista.appendChild(ul);
