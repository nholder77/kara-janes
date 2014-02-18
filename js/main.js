$(document).ready(function() {
	$('.title_about').click(function() {
		$('.content_about').toggleClass('hidden');
		
		if ($('.content_gallery').not('.hidden')) {
		    $('.content_gallery').addClass('hidden');
		}
		
		if ($('.content_prices').not('.hidden')) {
		    $('.content_prices').addClass('hidden');
		}	
	});
	$('.title_gallery').click(function() {
		$('.content_gallery').toggleClass('hidden');
		
		if ($('.content_about').not('.hidden')) {
		     $('.content_about').addClass('hidden');
		}
		
		if ($('.content_prices').not('.hidden')) {
		    $('.content_prices').addClass('hidden');
		}
	});
	$('.title_prices').click(function() {
		$('.content_prices').toggleClass('hidden');
		
		if ($('.content_about').not('.hidden')) {
			$('.content_about').addClass('hidden');
		}
		
		if ($('.content_gallery').not('.hidden')) {
			$('.content_gallery').addClass('hidden');
		}
	});
});