$(document).ready(function(){


    $("#banner-area .owl-carousel").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $("#hero-area .owl-carousel").owlCarousel({
        items:2,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $("#section-area .owl-carousel").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $("#cta-area .owl-carousel").owlCarousel({
        items:3,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $("#footer-area .owl-carousel").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $("#navigation-area .owl-carousel").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay:true,
     
    });

    $(".case-studies-carousel").owlCarousel({
        items:3,
        margin:30,
        dots:true,
        loop:true,
        nav:false,
     
    });

    // $(".popular-item-carousel").owlCarousel({
    //     items:3,
    //     margin:30,
    //     dots:true,
    //     loop:true,
    //     nav:true,
    //     navText:
    //     autoplay:false,
     
    // });

    $(".popular-item-carousel").owlCarousel({
        items:3,
        dots:true,
        loop:true,
        nav:true,
        autoplay:false,
        margin:30,
        navText:["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        autoplay:false,
     
    });

    $(".feature-carousel").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        nav:false,
        autoplay:false
     
    });

    $(".testimonial-carousel").owlCarousel({
        items:1,
        dots:false,
        loop:true,
        nav:false,
     
    });

    $(".logo-carousel").owlCarousel({
        items:6,
        margin:30,
        dots:false,
        loop:true,
        nav:false,
     
    });

    



});








