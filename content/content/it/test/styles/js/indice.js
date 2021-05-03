$('indiceMenu').getChildren().each(
	function(el) {
		var newHash = el.getProperty('href');
		var id = newHash.substr(1)
		if (id != window.location.hash.substr(1)) {
			$(id).setStyle('display', 'none');
		}
		el.addEvent('click', 
			function() {
				$(window.location.hash.substr(1)).setStyle('display', 'none');
				$(id).setStyle('display', '');
			}
		);
	}
)