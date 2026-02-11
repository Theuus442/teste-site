document.addEventListener('DOMContentLoaded', () => {

	// Header START
	$('.hamburger').on('click', function() {
		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.header-mobile-wrap').hide();
		}
		else {
			$(this).addClass('is-active');
			$('.header-mobile-wrap').show();
		}
	});

	function scrollHeader() {
		let headerTopHeight = $('.header-top').height();
		if($(this).scrollTop() > headerTopHeight) {
			$('.header-bottom').addClass('is-fixed');
		}
		else {
			$('.header-bottom').removeClass('is-fixed');
		}
	}
	function showArrowUp() {
		if($(this).scrollTop() > 1500) {
			$('.go-up').addClass('is-active');
		}
		else {
			$('.go-up').removeClass('is-active');
		}
	}

	$(window).on('scroll', function () {
		scrollHeader();
		showArrowUp();
	});

	$(window).trigger('scroll');
	// Number counter END

	scrollHeader();
	showArrowUp();

	$('.anchor-link').on('click', function () {
	    let href = $(this).attr('href');
	    let targetOffset = $(href).offset().top;

	    window.scrollTo(0, targetOffset);
		$('.header-mobile-wrap').hide();
		$('.hamburger').removeClass('is-active');
	    return false;
	});

	$('.go-up').on('click', function () {
	    window.scrollTo(0, 0);
	    return false;
	});
	// Header END
	
	// Banner START
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 0,
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	// Banner END


	// Services START
	// Modal form removed
	// Services END

	// Gallery START
	// Gallery END


	// Reviews START
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 0,
		spaceBetween: 30,
		pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	// Reviews END

	

})