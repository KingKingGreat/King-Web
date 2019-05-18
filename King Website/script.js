// Animation
function animate(id, v) {
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);
	if (v) {
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Connect Elements

// Descs
var descs = [
	document.getElementById("descAbout"), // About
	document.getElementById("descProducts") // Products
];

// Titles
var titles = [
	document.getElementById("titleAbout"), // About
	document.getElementById("titleProducts") // Products
];

var fade;

// Add event listner to Titles

// Click Event (Laptop/PC users)
titles[0].addEventListener("click", function() {
	if (descs[0].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descAbout", true)}, 50);
	} else {
		fade = window.setInterval(function() {animate("descAbout", false)}, 50);
	}
}); // About

titles[1].addEventListener("click", function() {
	if (descs[1].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descProducts", true)}, 50);
	} else {
		fade = window.setInterval(function() {animate("descProducts", false)}, 50);
	}
}); // Products

// Tap Event (Ipad, Tablets, Phone Users)
titles[0].addEventListener("touchstart", function(ev) {
	if (descs[0].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descAbout", true)}, 50);
	} else {
		fade = window.setInterval(function() {animate("descAbout", false)}, 50);
	}
}); // About

titles[1].addEventListener("touchstart", function() {
	if (descs[1].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descProducts", true)}, 50);
	} else {
		fade = window.setInterval(function() {animate("descProducts", false)}, 50);
	}
}); // Products

// Hide desc elements
document.getElementById("body").style.opacity = 0;
descs[0].style.opacity = 0; // About
descs[1].style.opacity = 0; // Products

// Fade page
fade = window.setInterval(function() {animate("body", true)}, 100);
