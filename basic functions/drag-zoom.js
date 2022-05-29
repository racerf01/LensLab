var ZoomDrag = document.querySelector("#zoom-bg");
var ZoomCont = document.querySelector(".zoom-button");

var activeZoom = false;
var currentXZoom;
var currentYZoom;
var initialXZoom;
var initialYZoom;
var xOffsetZoom = 0;
var yOffsetZoom = 0;

ZoomCont.addEventListener("touchstart", dragStartYZoom, false);
ZoomCont.addEventListener("touchend", dragEndYZoom, false);
ZoomCont.addEventListener("touchmove", dragYZoom, false);

ZoomCont.addEventListener("mousedown", dragStartYZoom, false);
ZoomCont.addEventListener("mouseup", dragEndYZoom, false);
ZoomCont.addEventListener("mousemove", dragYZoom, false);

function dragStartYZoom(e) {
	if (e.type === "touchstart") {
    	initialXZoom = e.touches[0].clientX - xOffsetZoom;
        initialYZoom = e.touches[0].clientY - yOffsetZoom;
      } else {
        initialXZoom = e.clientX - xOffsetZoom;
        initialYZoom = e.clientY - yOffsetZoom;
      }

      if (e.target === ZoomDrag) {
        activeZoom = true;
      }
}

function dragEndYZoom(e) {
	initialXZoom = currentXZoom;
	initialYZoom = currentYZoom;
	
	activeZoom = false;
    }

function dragYZoom(e) {
	if (activeZoom) {
		e.preventDefault();
      
        if (e.type === "touchmove") {
        	currentXZoom = e.touches[0].clientX - initialXZoom;
        	currentYZoom = e.touches[0].clientY - initialYZoom;
			var model_zoom = document.getElementById('model');
			var bg_zoom = document.getElementById('bg-image');
			if(model_zoom && model_zoom.style) {
    			model_zoom.style.height = parseInt("400px", 10) + currentYZoom + "px";
    			model_zoom.style.width = parseInt("400px", 10) + currentYZoom + "px";
			}
			if(bg_zoom && bg_zoom.style) {
    			bg_zoom.style.backgroundSize = parseInt("1000px", 10) + currentYZoom + "px";
			}
				
			} 
		else {
        	currentXZoom = e.clientX - initialXZoom;
        	currentYZoom = e.clientY - initialYZoom;
			var model_zoom = document.getElementById('model');
			var bg_zoom = document.getElementById('bg-image');
			if(model_zoom && model_zoom.style) {
    			model_zoom.style.height = parseInt("400px", 10) + currentYZoom + "px";
    			model_zoom.style.width = parseInt("400px", 10) + currentYZoom + "px";
			}
			if(bg_zoom && bg_zoom.style) {
    			bg_zoom.style.backgroundSize = parseInt("1000px", 10) + currentYZoom + "px";
			}
			}

        xOffsetZoom = currentXZoom;
        yOffsetZoom = currentYZoom;
		

        setTranslate(0, currentYZoom, ZoomDrag);
      }
}	

function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
