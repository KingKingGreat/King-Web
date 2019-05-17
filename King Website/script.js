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
titles[0].addEventListener("click", function() {
	if (descs[0].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descAbout", true)}, 50);
		descs[0].style["pointer-events"] = "auto";
	} else {
		fade = window.setInterval(function() {animate("descAbout", false)}, 50);
		descs[0].style["pointer-events"] = "none";
	}
}); // About

titles[1].addEventListener("click", function() {
	if (descs[1].style.opacity < 1) {
		fade = window.setInterval(function() {animate("descProducts", true)}, 50);
		descs[1].style['pointer-events'] = "auto";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "auto";
		}
	} else {
		fade = window.setInterval(function() {animate("descProducts", false)}, 50);
		descs[1].style['pointer-events'] = "none";
		var link = document.querySelectorAll(".links");

		for (var i = 0; i < link.length; i ++) {
			link[i].style["pointer-events"] = "none";
		}
	}
}); // Products

// Hide desc elements
document.getElementById("body").style.opacity = 0;
descs[0].style.opacity = 0; // About
descs[1].style.opacity = 0; // Products

// Fade page
fade = window.setInterval(function() {animate("body", true)}, 100);

descs[0].style['pointer-events'] = "none";
descs[1].style['pointer-events'] = "none";
var link = document.querySelectorAll(".links");

for (var i = 0; i < link.length; i ++) {
	link[i].style["pointer-events"] = "none";
}

var d = new Date();
var n = d.getFullYear();
document.getElementById("version").innerHTML = "<strong>Version 1.0.2019517.171601.LM</strong><br><strong>© " + n + " KingKingGreat</strong>"
