import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
	updateURL: false,
	offset: 150
});
