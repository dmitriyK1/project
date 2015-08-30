$(function() {
		$('.header__menu').on('click', 'a', function() {
			var linkType = $(this).text(),
			topOffset;

			if(linkType === 'home') return;

			topOffset = $('.' + linkType).offset().top;
			$('html, body').animate( { scrollTop: topOffset }, 400 );
		});
});