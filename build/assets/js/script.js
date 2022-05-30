/////////////////////////////////
// Navbar
$('.nav-link').on('click', function () {
	let scrollAnchor = $(this).attr('data-scroll');
	let scrollPoint = $('#' + scrollAnchor).offset().top - 90;
	$('body,html').animate({
		scrollTop: scrollPoint
	}, 100);
	return false;
})

function section_active(i) {
	$('.nav-link.active').removeClass('active');
	$('.nav-link').eq(i).addClass('active');
}

// Fixed navbar
$(window).on("scroll", function () {
	const nav = $(".navbar");
	let windscroll = $(window).scrollTop();
	const scrollPoint = windscroll + 110;
	const bottom = Math.round(windscroll + $(window).height());

	if (windscroll >= nav.height()) {
		nav.addClass("fixed");
		$('.section').each(function (i) {
			if ($(this).position().top <= scrollPoint) section_active(i)
			if (bottom == $(document).height()) section_active(i)
		});
		if ($('.section:first-child').position().top > scrollPoint) $('.nav-link.active').removeClass('active');
	} else {
		nav.removeClass("fixed");
	}
});