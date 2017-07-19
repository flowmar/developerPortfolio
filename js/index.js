$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 768) {
        $(".navbar-right").removeClass("navbar-nav");
        $('.navbar').addClass("navbar-tablet");
    }
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 1100) {
        $("#flow").addClass("moveFlow mt-5");
    }
});