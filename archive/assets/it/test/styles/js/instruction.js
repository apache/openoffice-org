
// FIXME Use .instruction instead of .title

$$('.instruction').each(
	function(el) {
		if (el.getChildren().length < 2) {
			return ;
		}
		// Freccia di discesa
		var open = new Element('div', {
			'styles' : {
				'background-position': 'center center', 
				'background-repeat' : 'no-repeat', 
				'background-image' : 'url(styles/images/cc/16x16/actions/1downarrow.png)',
				'height' : '16px',
				'width' : '16px',
				'float' : 'right',
				'display' : 'block',
				'cursor' : 'hand'
			}, 
			'class': 'open'
		} );
		// il titolo
		var title = new Element('div').setHTML(el.getChildren()[0].innerHTML);
		// ricostruisco
		el.getChildren()[0].empty();
		el.getChildren()[0].adopt([open, title]);
		// Seleziono gli step
		var next = el.getChildren()[1];
		var mySlide = new Fx.Slide(next).hide();
		// evento
		open.addEvent(
			'click',
			function(e) {
				e = new Event(e);
				mySlide.toggle();
				e.stop();
				if (open.getStyle('background-image').contains('downarrow')) {
					open.setStyle('background-image', 'url(styles/images/cc/16x16/actions/1uparrow.png)');
				} else {
					open.setStyle('background-image', 'url(styles/images/cc/16x16/actions/1downarrow.png)');
				}
			}
		);
	}
);