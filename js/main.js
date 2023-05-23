$(function () {

    $('.testimonials__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
    })
    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.case__slider').slick({
        slidesToShow: 2,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
    })
    $('.case__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickPrev')
    })
    $('.case__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickNext')
    })

})