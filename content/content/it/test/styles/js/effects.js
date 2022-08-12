/* Effetti sul menu */
$$('#menu li').each(
	function(el) {
		if (el.getParent().hasClass('menu')) {
			var fromcolor = 'eeeeee';
			var tocolor = 'ffffff';
		} else if (el.getParent().hasClass('submenu')) {
			var fromcolor = '444444';
			var tocolor = 'cc3300';
		} else {
			return ;
		}
		var first = el.getFirst();
		if (!first || first.getTag() != 'a') return;
		var overfxs = new Fx.Styles(first, {'duration': 150, 'wait': false });
		first.addEvent(
			'mouseenter', 
			function(e) {
				overfxs.start({ 'color': tocolor, 'margin-left': 10 });
			}
		);
		first.addEvent(
			'mouseleave', 
			function(e) {
				overfxs.start({ 'color': fromcolor, 'margin-left': 0 });
			}
		);
	}
);

