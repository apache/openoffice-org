window.addEvent('domready', function(){

	$$('ul.menu li').each(
		function(el) {
			var first = el.getFirst();
			if (!first || first.getTag() != 'a') return;
			var overfxs = new Fx.Styles(first, {'duration': 150, 'wait': false });
			first.addEvent(
				'mouseenter', 
				function(e){overfxs.start({'margin-left': 10});}
			);
			first.addEvent(
				'mouseleave', 
				function(e){overfxs.start({'margin-left': 0});}
			);
		}
	);

	$$('ul.submenu li').each(
		function(el) {
			var first = el.getFirst();
			if (!first || first.getTag() != 'a') return;
			var overfxs = new Fx.Styles(first, {'duration': 150, 'wait': false });
			first.addEvent(
				'mouseenter', 
				function(e){overfxs.start({'margin-left': 10});}
			);
			first.addEvent(
				'mouseleave', 
				function(e){overfxs.start({'margin-left': 0});}
			);
		}
	);

});
