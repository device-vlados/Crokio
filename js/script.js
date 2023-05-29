const btns = document.querySelectorAll('.source__btn')

btns.forEach((btn, index) =>{
    btn.addEventListener('click', () =>{
        console.log(index)
    const divs = document.querySelectorAll('.price__content-box')
    divs.forEach(div =>{
        div.classList.remove('active')
    });
    divs[index].classList.add('active')
    });
});





$(function () {
// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------
    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__acc-link--active')) {
            $(this).removeClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideUp()
        } else {
            $('.faq__acc-link').removeClass('faq__acc-link--active')
            $('.faq__acc-text').slideUp()
            $(this).addClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideDown()
        }
    })

    $('.maintenance__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('maintenance__acc-link--active')) {
            $(this).removeClass('maintenance__acc-link--active')
            $(this).children('.maintenance__acc-info').slideUp()
        } else {
            $('.maintenance__acc-link').removeClass('maintenance__acc-link--active')
            $('.maintenance__acc-info').slideUp()
            $(this).addClass('maintenance__acc-link--active')
            $(this).children('.maintenance__acc-info').slideDown()
        }
    })

    $(".prices-btn").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

    // $('.busines__btn').click(function(){
    //     $(".price__content-box").fadeToggle(100, 0, 100);
    // });  
    // $('.commerce__btn').click(function(){
    //     $(".price__content-boxs").fadeToggle(100, 0, 100);
    // });  
})