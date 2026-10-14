function localize() {
	//localizeTools();
	//localizePositioner();
}

function localizePositioner() {
	var positioner = document.getElementById("positioner");
	var newHTML = "<a id='header-link' href='" + logoLinkURL + "' title='" + logoLinkTitle + "'><img id='logo' src='" + logoImageURL + "' alt='OpenOffice.org' /></a>";
	if(showPositioner) {
		newHTML += "<h1 id='positioner-text'><em>" + positionerText + "</em></h1>";
	}
	positioner.innerHTML = newHTML;
}

function localizeTools() {
	var newHTML;
	
	var loginExpand = document.getElementById("login-expand");
	newHTML = "<input id='loginID' name='loginID' onfocus='this.select();' value='" + usernameText + "' alt='" + usernameText + 
		"' /><input onfocus='this.select();' name='password' id='password' type='password' value='" + passwordText + "' alt='" + passwordText + 
		"' /><input class='submit' type='submit' value='" + logInText + "' />";
	loginExpand.innerHTML = newHTML;	
	
	var search = document.getElementById("search");
	newHTML = "<input type='hidden' name='resultsPerPage' value='40' /><a href='http://www.openoffice.org/search/' title='" + 
		advancedSearchText + "'></a><input type='text' name='query' id='searchfield' class='searchfield' alt='" + searchText + "' /><input class='submit' type='submit' value='" + searchLabel + "' />";
	search.innerHTML = newHTML;	
}

function setPositionerText(newText) {
	positionerText = newText;
}

function setPositionerDisplay(bool) {
	showPositioner = bool;
}