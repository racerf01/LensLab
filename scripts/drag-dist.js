// JavaScript Document
var DistDrag = document.querySelector("#distance-bg");
var DistCont = document.querySelector(".distance-button");

var activeDist = false;
var currentXDist;
var currentYDist;
var initialXDist;
var initialYDist;
var xOffsetDist = 0;
var yOffsetDist = 0;
var first_overlay = document.querySelector('#first_overlay');
var second_overlay = document.querySelector('#second_overlay');

var first_blur = 0;
var second_blur = 0;


DistCont.addEventListener("touchstart", dragStartX, false);
DistCont.addEventListener("touchend", dragEndX, false);
DistCont.addEventListener("touchmove", dragX, false);

DistCont.addEventListener("mousedown", dragStartX, false);
DistCont.addEventListener("mouseup", dragEndX, false);
DistCont.addEventListener("mousemove", dragX, false);

function dragStartX(e) {
	if (e.type === "touchstart") {
    	initialXDist = e.touches[0].clientX - xOffsetDist;
        initialYDist = e.touches[0].clientY - yOffsetDist;
      } else {
        initialXDist = e.clientX - xOffsetDist;
        initialYDist = e.clientY - yOffsetDist;
      }

      if (e.target === DistDrag) {
        activeDist = true;
      }
}

function dragEndX(e) {
	initialXDist = currentXDist;
	initialYDist = currentYDist;
	
	activeDist = false;
    }

function dragX(e) {
	if (activeDist) {
		e.preventDefault();
      
        if (e.type === "touchmove") {
        	currentXDist = e.touches[0].clientX - initialXDist;
        	currentYDist = e.touches[0].clientY - initialYDist;
			var yourImg = document.getElementById('model');
			if(yourImg && yourImg.style) {
    			yourImg.style.height = parseInt("400px", 10) + currentXDist + "px";
    			yourImg.style.width = parseInt("400px", 10) + currentXDist + "px";
			}
			first_blur = currentXDist/50;
			first_overlay.style['-webkit-backdrop-filter'] = `blur(${first_blur}px)`;
			first_overlay.style.backdropFilter = `blur(${first_blur}px)`;
        } 
		else {
        	currentXDist = e.clientX - initialXDist;
        	currentYDist = e.clientY - initialYDist;
			var yourImg = document.getElementById('model');
			if(yourImg && yourImg.style) {
    			yourImg.style.height = parseInt("400px", 10) + currentXDist + "px";
    			yourImg.style.width = parseInt("400px", 10) + currentXDist + "px";
			}
			first_blur = currentXDist/50;
			first_overlay.style['-webkit-backdrop-filter'] = `blur(${first_blur}px)`;
			first_overlay.style.backdropFilter = `blur(${first_blur}px)`;
        }

        xOffsetDist = currentXDist;
        yOffsetDist = currentYDist;
		

        setTranslate(currentXDist, 0, DistDrag);
      }
}	

var FocusDrag = document.querySelector("#focus-bg");
var FocusCont = document.querySelector(".focus-button");

var activeFocus = false;
var currentXFocus;
var currentYFocus;
var initialxFocus;
var initialyFocus;
var xOffsetFocus = 0;
var yOffsetFocus = 0;
var model_blur = document.querySelector('#model');


FocusCont.addEventListener("touchstart", dragStartY, false);
FocusCont.addEventListener("touchend", dragEndY, false);
FocusCont.addEventListener("touchmove", dragY, false);

FocusCont.addEventListener("mousedown", dragStartY, false);
FocusCont.addEventListener("mouseup", dragEndY, false);
FocusCont.addEventListener("mousemove", dragY, false);

function dragStartY(e) {
	if (e.type === "touchstart") {
		initialxFocus = e.touches[0].clientX - xOffsetFocus;
		initialyFocus = e.touches[0].clientY - yOffsetFocus;
      } else {
        initialxFocus = e.clientX - xOffsetFocus;
        initialyFocus = e.clientY - yOffsetFocus;
      }

      if (e.target === FocusDrag) {
        activeFocus = true;
      }
    }

    function dragEndY(e) {
      initialxFocus = currentXFocus;
      initialyFocus = currentYFocus;

      activeFocus = false;
    }

    function dragY(e) {
      if (activeFocus) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentXFocus = e.touches[0].clientX - initialxFocus;
          currentYFocus = e.touches[0].clientY - initialyFocus;
			if (currentYFocus > 0) {
				model_blur.style.Filter = `blur(${Math.abs(currentYFocus)/100}px)`;
				model_blur.style['-webkit-filter'] = `blur(${currentYFocus/100}px)`;
				
			} else {
				second_blur = Math.abs(currentYFocus)/20
				second_overlay.style['-webkit-backdrop-filter'] = `blur(${second_blur}px)`;
				second_overlay.style.backdropFilter = `blur(${second_blur}px)`;
			}
        } else {
          currentXFocus = e.clientX - initialxFocus;
          currentYFocus = e.clientY - initialyFocus;
			if (currentYFocus > 0) {
				model_blur.style.Filter = `blur(${Math.abs(currentYFocus)/100}px)`;
				model_blur.style['-webkit-filter'] = `blur(${currentYFocus/100}px)`;
				
			} else {
				second_blur = Math.abs(currentYFocus)/20
				second_overlay.style['-webkit-backdrop-filter'] = `blur(${second_blur}px)`;
				second_overlay.style.backdropFilter = `blur(${second_blur}px)`;
			}
        }

        xOffsetFocus = currentXFocus;
        yOffsetFocus = currentYFocus;

        setTranslate(0, currentYFocus, FocusDrag);
      }
    }

function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
