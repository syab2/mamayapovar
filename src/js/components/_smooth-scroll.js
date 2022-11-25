import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
	header: '.header',
	updateURL: false,
	offset: 150
});
