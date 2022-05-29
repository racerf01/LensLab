



var aptbutton = document.getElementById('aparture-bg');
var shtbutton = document.getElementById('shutter-bg');
var modebutton = document.getElementById('mode-bg');
var lightbutton = document.getElementById('light-cont');
var backbutton = document.getElementById('back-bg');
var nextbutton = document.getElementById('next-bg');


var dark = document.getElementById('darken_overlay');
var light = document.getElementById('light_overlay');
var model = document.getElementById('model');
var bg = document.getElementById('bg-image')

var audio = new Audio('audio/mixkit-camera-shutter-hard-click-1430.wav');


bg.style.backgroundImage = "url('images/pexels-pixabay-158028.jpg')"


var shutterEnabled = true;
var apatureEnabled = true;

var nextEnabled = true;
var backEnabled = false;

var rot = -45; 	
var rot2 = 90;
var rot3 = 120;
var rot4 = 0;
light.style.opacity = 0.3;
model.style.filter = 'brightness(120%)';
var count = 0; 
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

function changeApt() {
	if (apatureEnabled) { 
		aptbutton.style = 'transform: rotate(' + rot + 'deg)';
		rot -= 45;
		count += 1
		if (count === 1) {
			light.style.opacity = 0.2;
		}
		if (count === 2) {
			light.style.opacity = 0.1;
		}
		if (count === 3) {
			light.style.opacity = 0;
		}
		if (count === 4) {
			dark.style.opacity = 0.1;
		}
		if (count === 5) {
			dark.style.opacity = 0.2;
		}
		if (count === 6) {
			dark.style.opacity = 0.3;
		}
		if (count === 7) {
			dark.style.opacity = 0.4;
		}
		if (count === 8) {
			light.style.opacity = 0.3;
			dark.style.opacity = 0;
			count = 0;
		}
	}
}

function changeSht() {
	if (shutterEnabled) {
		shtbutton.style = 'transform: rotate(' + rot + 'deg)';
		rot -= 45;
		count2 += 1; 
		if (count2 === 1) {
			model.style.filter = 'brightness(110%)';
		}
		if (count2 === 2) {
			model.style.filter = 'brightness(100%)';
		}
		if (count2 === 3) {
			model.style.filter = 'brightness(90%)';
		}
		if (count2 === 4) {
			model.style.filter = 'brightness(80%)';
		}
		if (count2 === 5) {
			model.style.filter = 'brightness(70%)';
		}
		if (count2 === 6) {
			model.style.filter = 'brightness(60%)';
		}
		if (count2 === 7) {
			model.style.filter = 'brightness(50%)';
		}
		if (count2 === 8) {
			model.style.filter = 'brightness(120%)';
			count2 = 0;
		}
	}
}

function changeMode() {
	modebutton.style = 'transform: rotate(' + rot2 + 'deg)';
	rot2 += 90;
	count3 += 1;
	if (count3 === 1) { //A
		shutterEnabled = false;
		apatureEnabled = true;
		shtbutton.style.opacity = 0.5;
		aptbutton.style.opacity = 1;
		model.style.filter = 'brightness(100%)';
		if (count === 1) {
			light.style.opacity = 0.2;
		}
		if (count === 2) {
			light.style.opacity = 0.1;
		}
		if (count === 3) {
			light.style.opacity = 0;
		}
		if (count === 4) {
			dark.style.opacity = 0.1;
		}
		if (count === 5) {
			dark.style.opacity = 0.2;
		}
		if (count === 6) {
			dark.style.opacity = 0.3;
		}
		if (count === 7) {
			dark.style.opacity = 0.4;
		}
		if (count === 8) {
			light.style.opacity = 0.3;
			dark.style.opacity = 0;
			count = 0;
		}
	}
	if (count3 === 2) { //P
		shutterEnabled = false;
		apatureEnabled = false;
		shtbutton.style.opacity = 0.5;
		aptbutton.style.opacity = 0.5;
		model.style.filter = 'brightness(100%)';
		light.style.opacity = 0;
		dark.style.opacity = 0;
		
	}
	if (count3 === 3) { //S
		shutterEnabled = true;
		apatureEnabled = false;
		shtbutton.style.opacity = 1;
		aptbutton.style.opacity = 0.5;
		light.style.opacity = 0;
		dark.style.opacity = 0;
		if (count2 === 1) {
			model.style.filter = 'brightness(110%)';
		}
		if (count2 === 2) {
			model.style.filter = 'brightness(100%)';
		}
		if (count2 === 3) {
			model.style.filter = 'brightness(90%)';
		}
		if (count2 === 4) {
			model.style.filter = 'brightness(80%)';
		}
		if (count2 === 5) {
			model.style.filter = 'brightness(70%)';
		}
		if (count2 === 6) {
			model.style.filter = 'brightness(60%)';
		}
		if (count2 === 7) {
			model.style.filter = 'brightness(50%)';
		}
		if (count2 === 8) {
			model.style.filter = 'brightness(120%)';
			count2 = 0;
		}
	}
	if (count3 === 4) { //M
		shutterEnabled = true;
		apatureEnabled = true;
		shtbutton.style.opacity = 1;
		aptbutton.style.opacity = 1;
		
		if (count2 === 1) {
			model.style.filter = 'brightness(110%)';
		}
		if (count2 === 2) {
			model.style.filter = 'brightness(100%)';
		}
		if (count2 === 3) {
			model.style.filter = 'brightness(90%)';
		}
		if (count2 === 4) {
			model.style.filter = 'brightness(80%)';
		}
		if (count2 === 5) {
			model.style.filter = 'brightness(70%)';
		}
		if (count2 === 6) {
			model.style.filter = 'brightness(60%)';
		}
		if (count2 === 7) {
			model.style.filter = 'brightness(50%)';
		}
		if (count2 === 8) {
			model.style.filter = 'brightness(120%)';
			count2 = 0;
		}
		
		if (count === 1) {
			light.style.opacity = 0.2;
		}
		if (count === 2) {
			light.style.opacity = 0.1;
		}
		if (count === 3) {
			light.style.opacity = 0;
		}
		if (count === 4) {
			dark.style.opacity = 0.1;
		}
		if (count === 5) {
			dark.style.opacity = 0.2;
		}
		if (count === 6) {
			dark.style.opacity = 0.3;
		}
		if (count === 7) {
			dark.style.opacity = 0.4;
		}
		if (count === 8) {
			light.style.opacity = 0.3;
			dark.style.opacity = 0;
			count = 0;
		}
		count3 = 0;
	}
}
function changeLight() {
	lightbutton.style = 'transform: rotate(' + rot3 + 'deg)';
	rot3 += 120;
	count4 += 1;
	if (count4 === 1) {
		bg.style.filter = "contrast(110%) brightness(110%) sepia(30%) grayscale(100%)"
		model.style.filter = "contrast(110%) brightness(110%) sepia(30%) grayscale(100%)"
	}
	if (count4 === 2) {
		bg.style.filter = "contrast(150%) saturate(110%)"
		model.style.filter = "contrast(150%) saturate(110%)"
	}
	if (count4 === 3) {
		bg.style.filter = ""
		model.style.filter = ""
		count4 = 0;
	}	
}


function changeBGnext() {
	if (nextEnabled) {
		nextbutton.style = 'transform: rotate(' + rot4 + 'deg)';
		count5 += 1;
		rot4 += 0;
		if (count5 === 1) {
			bg.style.backgroundImage = "url('/images/pexels-abby-chung-1191377.jpg')"
			backbutton.style.opacity = 1;
			backEnabled = true;
		}
		if (count5 === 2) {
			bg.style.backgroundImage = "url('/images/article-4.jpg')"
			nextEnabled = false;
			nextbutton.style.opacity = 0.5;
		}
	}
}


function changeBGback() {
	if (backEnabled) {
		backbutton.style = 'transform: rotate(' + rot4 + 'deg)';
		rot4 += 0;
		count5 -= 1;
		if (count5 === 1) {
			bg.style.backgroundImage = "url('/images/pexels-abby-chung-1191377.jpg')"
			nextbutton.style.opacity = 1;
			nextEnabled = true;
		}
		if (count5 === 0) {
			bg.style.backgroundImage = "url('/images/pexels-pixabay-158028.jpg')"
			backEnabled = false;
			backbutton.style.opacity = 0.5;
		}
	}
}
function shoot() {
	backbutton.style = 'transform: rotate(' + rot4 + 'deg)';
	rot4 += 0;
	audio.play();
}


var count7 = 0;



function tutorial_start() {
	backbutton.style = 'transform: rotate(' + rot4 + 'deg)';
	rot4 += 0;
	count7 +=1 
	if (count7 === 1) {
		document.getElementById('disp-tutorial').style.visibility = "visible";
		document.getElementById('image-tutorial').style.visibility = "visible";
	}
	if (count7 === 2) {
		document.getElementById('disp-tutorial').style.visibility = "hidden";
		document.getElementById('image-tutorial').style.visibility = "hidden";
		document.getElementById('dist-tutorial').style.visibility = "visible";
		document.getElementById('distance-tutorial').style.visibility = "visible";
	}
	if (count7 === 3) {
		document.getElementById('dist-tutorial').style.visibility = "hidden";
		document.getElementById('distance-tutorial').style.visibility = "hidden";
		document.getElementById('fc-tutorial').style.visibility = "visible";
		document.getElementById('focus-tutorial').style.visibility = "visible";
	}
	if (count7 === 4) {
		document.getElementById('fc-tutorial').style.visibility = "hidden";
		document.getElementById('focus-tutorial').style.visibility = "hidden";
		document.getElementById('zm-tutorial').style.visibility = "visible";
		document.getElementById('zoom-tutorial').style.visibility = "visible";
	}
	if (count7 === 5) {
		document.getElementById('zm-tutorial').style.visibility = "hidden";
		document.getElementById('zoom-tutorial').style.visibility = "hidden";
		document.getElementById('shut-tutorial').style.visibility = "visible";
		document.getElementById('shutter-tutorial').style.visibility = "visible";
	}
	if (count7 === 6) {
		document.getElementById('shut-tutorial').style.visibility = "hidden";
		document.getElementById('shutter-tutorial').style.visibility = "hidden";
		document.getElementById('apt-tutorial').style.visibility = "visible";
		document.getElementById('aperture-tutorial').style.visibility = "visible";
	}
	if (count7 === 7) {
		document.getElementById('apt-tutorial').style.visibility = "hidden";
		document.getElementById('aperture-tutorial').style.visibility = "hidden";
		document.getElementById('md-tutorial').style.visibility = "visible";
		document.getElementById('mode-tutorial').style.visibility = "visible";
	}
	if (count7 === 8) {
		document.getElementById('md-tutorial').style.visibility = "hidden";
		document.getElementById('mode-tutorial').style.visibility = "hidden";
		document.getElementById('lht-tutorial').style.visibility = "visible";
		document.getElementById('light-tutorial').style.visibility = "visible";
	}
	if (count7 === 9) {
		document.getElementById('lht-tutorial').style.visibility = "hidden";
		document.getElementById('light-tutorial').style.visibility = "hidden";
		document.getElementById('bn-tutorial').style.visibility = "visible";
		document.getElementById('back-tutorial').style.visibility = "visible";
		document.getElementById('next-tutorial').style.visibility = "visible";
	}
	if (count7 === 10) {
		document.getElementById('bn-tutorial').style.visibility = "hidden";
		document.getElementById('back-tutorial').style.visibility = "hidden";
		document.getElementById('next-tutorial').style.visibility = "hidden";
		document.getElementById('sh-tutorial').style.visibility = "visible";
		document.getElementById('shoot-tutorial').style.visibility = "visible";
	}
	if (count7 === 11) {
		document.getElementById('sh-tutorial').style.visibility = "hidden";
		document.getElementById('shoot-tutorial').style.visibility = "hidden";
		count7 = 0;
	}
}