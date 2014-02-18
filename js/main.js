$(document).ready(function() {
	$('.who').click(function() {
		$('.text_who').toggleClass('hidden');
		
		if ($('.text_what').not('.hidden')) {
		    $('.text_what').addClass('hidden');
		}
		
		if ($('.text_much').not('.hidden')) {
		    $('.text_much').addClass('hidden');
		}	
	});
	$('.what').click(function() {
		$('.text_what').toggleClass('hidden');
		
		if ($('.text_who').not('.hidden')) {
		     $('.text_who').addClass('hidden');
		}
		
		if ($('.text_much').not('.hidden')) {
		    $('.text_much').addClass('hidden');
		}
	});
	$('.much').click(function() {
		$('.text_much').toggleClass('hidden');
		
		if ($('.text_who').not('.hidden')) {
			$('.text_who').addClass('hidden');
		}
		
		if ($('.text_what').not('.hidden')) {
			$('.text_what').addClass('hidden');
		}
	});
});