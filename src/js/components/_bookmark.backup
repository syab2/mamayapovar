import vars from "../_vars";

(function(){
  const buttonBookmark = document.querySelector('[data-button-bookmark]');

	if (buttonBookmark) {
		vars.bodyEl.addEventListener('click', (e) => {
			const target = e.target

			if (target.classList.contains('content-footer__btn--bookmark')) {
				const buttonIcon = target.querySelector('use')
				target.classList.toggle('active');

				if (target.classList.contains('active')) {
					target.setAttribute('aria-label', 'Убрать из закладок');
					buttonIcon.setAttribute('href', `${svgBookmarkFilled}`)
				} else {
					target.setAttribute('aria-label', 'Добавить в закладки');
					buttonIcon.setAttribute('href', `${svgBookmark}`)
				}
			}
		})
  }

  // if (buttonBookmark) {
	// 	vars.bodyEl.addEventListener('click', (e) => {
	// 		const target = e.target

	// 		if (target.classList.contains('content-footer__btn--bookmark')) {
	// 			const buttonIcon = target.querySelector('use')
	// 			target.classList.toggle('active');

	// 			if (target.classList.contains('active')) {
	// 				target.setAttribute('aria-label', 'Убрать из закладок');
	// 				buttonIcon.setAttribute('href', `${svgBookmarkFilled}`)
	// 			} else {
	// 				target.setAttribute('aria-label', 'Добавить в закладки');
	// 				buttonIcon.setAttribute('href', `${svgBookmark}`)
	// 			}
	// 		}
	// 	})
  // }
})();
