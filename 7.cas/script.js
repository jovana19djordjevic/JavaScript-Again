let name = prompt("Koju boju zelis");
console.log(name);

let marqueElement = document.getElementById("name");
marqueElement.style.color = "red";

marqueElement.style.background = name;
