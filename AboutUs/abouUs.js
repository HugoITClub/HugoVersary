$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    nav: true,
    dots: false,
    margin: -48,
    responsiveClass: true,
    item: 3,
    navText: ["<span class='fa-solid fa-angle-left'></span>","<span class='fa-solid fa-angle-right'></span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

