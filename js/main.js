const circles = document.querySelectorAll(".circle"),
    progressBar = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");
let currentStep = 1;
const updateSteps = (e) => {
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
    if (currentStep === circles.length) {
        buttons[1].disabled = true;
    } else if (currentStep === 1) {
    buttons[0].disabled = true;
    } else {
    buttons.forEach((button) => (button.disabled = false));
    }
};
buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
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
    $('.case__slider').slick({
        slidesToShow: 2,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
        responsive: 
        [
            {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1,
            },
            },
        ]
    })
    $('.case__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickPrev')
    })
    $('.case__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickNext')
    })
// -----------------------------------------------------------------------------
    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
    })
})