var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var generate = document.querySelector(".random_gradient");

function setGradient() {

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function generateRandomColor()
{
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;

}

function setRandom()
{
	color1.value = "#" + generateRandomColor();
	color2.value = "#" + generateRandomColor();
	setGradient();
}

setRandom();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
generate.addEventListener("click", setRandom);