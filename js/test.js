$().ready(function() {
	$('.foo').on('mouseenter', '*', function() {
		$(this).toggleClass('overlay');
	});
	$('.foo').on('mouseleave', '*', function() {
		$(this).toggleClass('overlay');
	});
});