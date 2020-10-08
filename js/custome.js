// isotope code start
$("document").ready(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});
// isotope code end

// Owl Carousel Start testimonial
$("document").ready(function () {
    $(".testimonial-carousel").owlCarousel({
        items: 2,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            }
        }
    });
});
// Owl Carousel testimonial End 

// Owl Carousel Start Logos
$("document").ready(function () {
    $(".client-carousel").owlCarousel({
        items: 5,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            }
        }
    });
});
// Owl Carousel Logos end

// Counter up code
$("document").ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});