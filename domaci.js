let button = document.querySelector("#btn1");

button.addEventListener("click", function () {
	button.textContent = "Kliknuto je";
});

let divBox = document.querySelector("#box1");

divBox.addEventListener("mouseover", function () {
	this.style.backgroundColor = "blue";
});

divBox.addEventListener("mouseout", function () {
	this.style.backgroundColor = "";
});

let inputText = document.querySelector("#input1");

inputText.addEventListener("keydown", function (e) {
	console.log(`Pritisnila si dugme ${e.key}`);
});

let paragrafClick = document.querySelector("#para1");

paragrafClick.addEventListener("dblclick", function () {
	this.style.fontSize = "40px";
	this.textContent = "Uspesno si kliknula";
});

let btnClick = document.querySelector("#btn2");
let divContainer = document.querySelector("#container");

btnClick.addEventListener("click", function () {
	let pragaraf = document.createElement("p");
	pragaraf.textContent = "Novi pragraf";
	divContainer.append(pragaraf);
});

let divOrange = document.querySelector("#hoverDiv");

divOrange.addEventListener("mouseenter", function () {
	this.style.backgroundColor = "orange";
});

divOrange.addEventListener("mouseleave", function () {
	this.style.backgroundColor = "yellow";
});

let input2 = document.querySelector("#input2");
let output = document.querySelector("#output");

input2.addEventListener("change", function () {
	output.textContent = input2.value;
});

let buttonSakrij = document.querySelector("#btn3");
let box3 = document.querySelector("#box3");

buttonSakrij.addEventListener("click", function () {
	box3.style.display = "none";
});

let box4 = document.querySelector("#box4");

box4.addEventListener("mousedown", function () {
	this.style.backgroundColor = "black";
});

box4.addEventListener("mouseup", function () {
	this.style.backgroundColor = "grey";
});

let Btn4 = document.querySelector("#btn4");
let divContainer2 = document.querySelector("#container2");

Btn4.addEventListener("click", function () {
	let pragaraf2 = document.createElement("p");
	pragaraf2.textContent = "Klik";
	divContainer2.append(pragaraf2);
});

let input3 = document.querySelector("#input3");

input3.addEventListener("focus", function () {
	this.style.backgroundColor = "yellow";
});

input3.addEventListener("blur", function () {
	this.style.background = "white";
});
