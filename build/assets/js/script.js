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

/////Animations scripts///
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};

const displayScrollElement = (element) => {
	element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
	element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
		if (elementInView(el, 1.25)) {
			displayScrollElement(el);
		} else if (elementOutofView(el)) {
			hideScrollElement(el)
		}
	})
}


$(document).ready(function () {
	handleScrollAnimation();
	window.addEventListener("scroll", () => {
		handleScrollAnimation();
	});
})