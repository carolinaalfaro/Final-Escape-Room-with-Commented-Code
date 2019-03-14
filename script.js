// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
a = document.getElementById("image1");
b = document.getElementById("image2");
c = document.getElementById("image3");
d = document.getElementById("image4");
e = document.getElementById("image5");
f = document.getElementById("dorito");
var mySound = document.getElementById('launch');

function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("pats-silver");
}
// Cycling Images: rocket --> spaceship --> alien --> planet --> astronaut
function firstImage(el){
	if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	} else if (el.src.match ("image/planet.PNG")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	}
}
// Cycling Images: spaceship --> alien --> planet --> astronaut --> rocket
function secondImage(el){
	if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	} else if (el.src.match ("image/planet.PNG")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	}
}
// Cycling Images: alien--> planet --> astronaut --> rocket --> spaceship
function thirdImage(el){
	if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	} else if (el.src.match ("image/planet.PNG")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	}
}
// Cycling Images:  planet --> astronaut --> rocket --> spaceship --> alien
function fourthImage(el){
	if (el.src.match ("image/planet.PNG")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	}
}
// Cycling Images: astronaut --> rocket --> spaceship --> alien --> planet
function fifthImage(el){
	if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	} else if (el.src.match ("image/planet.PNG")){
		el.src = "image/astronaut.png";
	}
}
// The function allow me to click an image by calling the id and then once I click it the will change to a different image
function firstRow(el){
	document.getElementById("one_picture").src = ("image/spaceship.png");
}
function secondRow(el){
	document.getElementById("second_picture").src = ("image/alien.png");
}
function thirdRow(el){
	document.getElementById("third_picture").src = ("image/planet.PNG");
}
function fourthRow(el){
	document.getElementById("fourth_picture").src = ("image/astronaut.png");
}
function fifthRow(el){
	document.getElementById("fifth_picture").src = ("image/rocket.png");
}
function Arrow(el){
	document.getElementById("upanddown").src = ("image/arrow.PNG");
}
function playSound(el) {
	// when the checkImage! button is clicked, play the a rocket launching sound symbolizing that you won
	document.getElementById("launch").play();
}
function nextweb (el) {
	document.location.href="https://rayadajani.github.io/Phase8/";
}
// This is my Most Complex JavaScript feature that produces many functions in onclick
// Here I defined a function,"checkImage" 
function checkImage(el){
	//In the if statement, the function first comence by checking the images in each slot to see if they are placed in the correct slots
	if (a.src.match("spaceship") && b.src.match("alien") && c.src.match("planet") && d.src.match("astronaut") && e.src.match("rocket")){
		// If the images are placed correctly, the function continues by playing a sound by calling the variable "mySound", which would then play a rocket launching sound
		mySound.play();
		// Then a message would appear in the console that saids "1, 2, 3, Launch!"
		console.log("1, 2, 3, Launch!");
		// Right after, this function will find the class named invisible to remove it by using its id, "dorito", which will result in exposing the hidden rocket that the user can click to move to the next escape room. 
		document.getElementById("dorito").classList.remove("invisible");
		// This function will also call on another function located in the javascript, named "CheckImagePart2". What the function bellow ultimately does is check each five slots to see if the correct image is placed within it, if so then the background color of their divs will be removed and replaced with the background color green to signify that the user has the correct images in place  
		CheckImagePart2();
	}
	else {
		// If the specific statement above are not followed or completed then the function will run through a series of other functions that all notify the user which images are in the correct place by removing the divs background color that the image is placed in and replacing it with a green background color, the other images that were placed incorrectly by the user will also have their divs background color and will replace them with red to alert the user that the images in those specific divs are the incorrect ones
		checkImage2();
		checkImage3();
		checkImage4();
		checkImage5();
	}
}
function checkImage1() {
	if (a.src.match("spaceship")){
		//turn slot1 green
		document.getElementById("slot1").classList.remove("purple");
		document.getElementById("slot1").classList.add("green");
	}else {
		//turn red
		document.getElementById("slot1").classList.remove("purple");
		document.getElementById("slot1").classList.add("red");
	}
}
function checkImage2() {
	if (b.src.match("alien")){
		//turn slot2 green
		document.getElementById("slot2").classList.remove("lightblue");
		document.getElementById("slot2").classList.add("green");
	}
	else {
		//turn red
		document.getElementById("slot2").classList.remove("lightblue");
		document.getElementById("slot2").classList.add("red");
	}
}
function checkImage3() {
	if (c.src.match("planet")){
		//turn slot3 green
		document.getElementById("slot3").classList.remove("purple");
		document.getElementById("slot3").classList.add("green");
	}
	else {
		//turn red
		document.getElementById("slot3").classList.remove("purple");
		document.getElementById("slot3").classList.add("red");
	}
}
function checkImage4() {
	if (d.src.match("astronaut")){
		//turn slot4 green
		document.getElementById("slot4").classList.remove("lightblue");
		document.getElementById("slot4").classList.add("green");
	}
	else {
		//turn red
		document.getElementById("slot4").classList.remove("lightblue");
		document.getElementById("slot4").classList.add("red");
	}
}
function checkImage5() {
	if (e.src.match("rocket")){
		//turn slot5 green
		document.getElementById("slot5").classList.remove("purple");
		document.getElementById("slot5").classList.add("green");
	}
	else {
		//turn red
		document.getElementById("slot5").classList.remove("purple");
		document.getElementById("slot5").classList.add("red");
	}
}
function CheckImagePart2(el){
		document.getElementById("slot1").classList.remove("purple");
		document.getElementById("slot1").classList.add("green");
		document.getElementById("slot2").classList.remove("lightblue");
		document.getElementById("slot2").classList.add("green");
		document.getElementById("slot3").classList.remove("purple");
		document.getElementById("slot3").classList.add("green");
		document.getElementById("slot4").classList.remove("lightblue");
		document.getElementById("slot4").classList.add("green");
		document.getElementById("slot5").classList.remove("purple");
		document.getElementById("slot5").classList.add("green");
}