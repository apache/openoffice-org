tipallowed = 1;
document.onmousemove = updateToolTipPosition;

function updateToolTipPosition(e) {
	x = (document.all) ? window.event.x + document.body.scrollLeft : e.pageX;
	y = (document.all) ? window.event.y + document.body.scrollTop  : e.pageY;
	if (tt != null) {
		tt.style.left = (x - 220) + "px";
		tt.style.top 	= (y + 20) + "px";
	}
}

function showtip(i) {
	ttinner = element("bubble_inner");
	ttinner.innerHTML = mdesc[i];
	ttinner.className = mstyle[i];
	tt =	element("bubble");
	if (tipallowed == 1) {
		tt.style.display="block";

	}
}

function hidetip(i) {
	if (tt != null) {
		tt.style.display="none";
	}
}

function element(i) {
	return document.getElementById(i);
}

function suppresstip() {
	tipallowed = 0;
}

function allowtip() {
	tipallowed = 1;
}


