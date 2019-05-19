// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
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

// Declare Animation Variable
var fade;

// Add event listner to Titles

// Click Event (Laptop/PC users)
titles[0].addEventListener("click", function() {
	// Checker Desc Opacity
	if (descs[0].style.opacity < 1) {
		// Fade In
		fade = window.setInterval(function() {animate("descAbout", true)}, 50);
		descs[0].style["pointer-events"] = "auto";
	} else {
		// Fade Out
		fade = window.setInterval(function() {animate("descAbout", false)}, 50);
		descs[0].style["pointer-events"] = "none";
	}
}); // About

titles[1].addEventListener("click", function() {
	// Checker Desc Opacity
	if (descs[1].style.opacity < 1) {
		// Fade In
		fade = window.setInterval(function() {animate("descProducts", true)}, 50);
		descs[1].style['pointer-events'] = "auto";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "auto";
		}
	} else {
		// Fade Out
		fade = window.setInterval(function() {animate("descProducts", false)}, 50);
		descs[1].style['pointer-events'] = "none";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "none";
		}
	}
}); // Products

// Tap Event (Ipad, Tablets, Phone Users)
titles[0].addEventListener("touchstart", function(ev) {
	// Checker Desc Opacity
	if (descs[0].style.opacity < 1) {
		// Fade In
		fade = window.setInterval(function() {animate("descAbout", true)}, 50);
		descs[0].style["pointer-events"] = "auto";
	} else {
		// Fade Out
		fade = window.setInterval(function() {animate("descAbout", false)}, 50);
		descs[0].style["pointer-events"] = "none";
	}
}); // About

titles[1].addEventListener("touchstart", function() {
	// Checker Desc Opacity
	if (descs[1].style.opacity < 1) {
		// Fade In
		fade = window.setInterval(function() {animate("descProducts", true)}, 50);
		descs[1].style['pointer-events'] = "auto";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "auto";
		}
	} else {
		// Fade Out
		fade = window.setInterval(function() {animate("descProducts", false)}, 50);
		descs[1].style['pointer-events'] = "none";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "none";
		}
	}
}); // Products

// On Start Up

// Hide desc elements
document.getElementById("body").style.opacity = 0;
descs[0].style.opacity = 0; // About
descs[1].style.opacity = 0; // Products

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 1.3.2019519.113801.LM</strong><br><strong>© " + d.getFullYear() + " KingKingGreat</strong>";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);
