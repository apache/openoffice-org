function initLogo() {
	if ((navigator.userAgent.indexOf("MSIE") > -1) && document.body) {
		giflogos = new Array();
		giflogos[0] = new Image(); giflogos[0].src = "../images/OOo_logo_flat_200.gif";
		giflogos[1] = new Image(); giflogos[1].src = "../images/OOo_logo_flat_300.gif";
		giflogos[2] = new Image(); giflogos[2].src = "../images/OOo_logo_flat_400.gif";
		giflogos[3] = new Image(); giflogos[3].src = "../images/OOo_logo_flat_500.gif";
		giflogos[4] = new Image(); giflogos[4].src = "../images/OOo_logo_flat_600.gif";
		giflogos[5] = new Image(); giflogos[5].src = "../images/OOo_logo_flat_700.gif";
		giflogos[6] = new Image(); giflogos[6].src = "../images/OOo_logo_flat_800.gif";
	} else {
		pnglogos = new Array();
		pnglogos[0] = new Image(); pnglogos[0].src = "../images/OOo_logo_flat_200.png";
		pnglogos[1] = new Image(); pnglogos[1].src = "../images/OOo_logo_flat_300.png";
		pnglogos[2] = new Image(); pnglogos[2].src = "../images/OOo_logo_flat_400.png";
		pnglogos[3] = new Image(); pnglogos[3].src = "../images/OOo_logo_flat_500.png";
		pnglogos[4] = new Image(); pnglogos[4].src = "../images/OOo_logo_flat_600.png";
		pnglogos[5] = new Image(); pnglogos[5].src = "../images/OOo_logo_flat_700.png";
		pnglogos[6] = new Image(); pnglogos[6].src = "../images/OOo_logo_flat_800.png";
	}
}

function pickLogoSize() {
	var factor = (1+2/8+2/(8*19));
	if ((navigator.userAgent.indexOf("MSIE") > -1) && document.body) {
		if (document.body.clientWidth <= (300*factor)/6*10) {
			return 0;
		} else if (document.body.clientWidth <= (400*factor)/6*10) {
			return 1;
		} else if (document.body.clientWidth <= (500*factor)/6*10) {
			return 2;
		} else if (document.body.clientWidth <= (600*factor)/6*10) {
			return 3;
		} else if (document.body.clientWidth <= (700*factor)/6*10) {
			return 4;
		} else if (document.body.clientWidth <= (800*factor)/6*10) {
			return 5;
		} else {
			return 6;
		}
	} else {
		if (window.innerWidth <= (300*factor)/6*10) {
			return 0;
		} else if (window.innerWidth <= (400*factor)/6*10) {
			return 1;
		} else if (window.innerWidth <= (500*factor)/6*10) {
			return 2;
		} else if (window.innerWidth <= (600*factor)/6*10) {
			return 3;
		} else if (window.innerWidth <= (700*factor)/6*10) {
			return 4;
		} else if (window.innerWidth <= (800*factor)/6*10) {
			return 5;
		} else {
			return 6;
		}
	}
	document.getElementById("logo").style.width = "80%";
	document.getElementById("logo").style.left = "10%";
}

function calculateLogoSize() {
	var LogoSize = pickLogoSize();
	return (LogoSize+2)*100;
}

function resizeLogo() {
	if ((navigator.userAgent.indexOf("MSIE") > -1) && document.body) {
		document.getElementById("logo_gif").src = giflogos[pickLogoSize()].src;
		document.getElementById("logo_gif").style.width = calculateLogoSize() + "px";
	} else {
		document.getElementById("logo_png").src = pnglogos[pickLogoSize()].src;
		document.getElementById("logo_png").style.width = calculateLogoSize() + "px";
	}
	document.getElementById("logo").style.width = "80%";
	document.getElementById("logo").style.left = "10%";
}

window.onresize = resizeLogo;