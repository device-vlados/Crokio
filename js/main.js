const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cricles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < cricles.length) {
        currentActive++;
    }
    update();
});

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    }
    update();
});

function update() {
    cricles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = ((currentActive - 1) / (cricles.length - 1)) * 100 + "%";

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === cricles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};


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
    });

    $(".head").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })
});

function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("active-item");
        }
    });
};

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".after__list-item");

for (let elm of elements) {
    observer.observe(elm);
};

