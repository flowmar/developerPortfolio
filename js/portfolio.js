$(document).ready(function() {
	$('body').addClass('loaded');
	pageLoad();
});

var viewportWidth = $(window).width();

// if (viewportWidth < 576) {
// 	$('.nav-list').addClass('navbar-nav');
// }
if (viewportWidth >= 576) {
	// $('.nav-item').addClass('list-inline-item');
	$('.nav-list')
		.removeClass('navbar-nav')
		.addClass('list-inline');
}
if (viewportWidth >= 768) {
	$('.navbar').removeClass('navbar-nav');
	$('.nav-list').addClass('navbar-tablet list-inline');
	// $('.nav-item').addClass('list-inline-item');
}
if (viewportWidth >= 992) {
}
if (viewportWidth >= 1200) {
}

$(window).resize(function() {
	if (viewportWidth < 576) {
		$('.nav-list')
			.removeClass('list-inline')
			.addClass('navbar-nav');
		$('.nav-link').removeClass('btn-lg');
	}
	if (viewportWidth >= 576) {
		// $('.nav-list').removeClass('navbar-nav').addClass('list-inline');
		// $('.nav-link').addClass('btn-lg');
		// $('.nav-item').addClass('list-inline-item');
	}
	if (viewportWidth >= 768) {
		$('.nav-list')
			.removeClass('navbar-nav')
			.addClass('list-inline justify-content-center navbar-tablet nav');
		$('.nav-item').addClass('list-inline-item');
	}
});

// $(window).resize(function () {
//     var viewportWidth = $(window).width();
//     if (viewportWidth >= 1100) {
//         $("#flow").addClass("moveFlow mt-5");
//     }
// });
