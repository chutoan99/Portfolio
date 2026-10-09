// From shared/carousel.config.ts. Mapped from react-slick settings to Swiper options:
//   dots            -> pagination { clickable }
//   autoplay + autoplaySpeed(5000) -> autoplay { delay: 5000 }
//   infinite        -> loop
//   arrows          -> kept hidden via #experience CSS (no navigation module)
//   speed(500), slidesToShow(1) preserved
export const CarouselConfig = {
	slidesPerView: 1,
	loop: true,
	speed: 500,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		clickable: true
	}
}
