import vars from '../_vars';

(function(){
  if (document.querySelector('[data-more-menu]')) {
		vars.bodyEl.addEventListener('click', (e) => {
			const target = e.target
			if (target.closest('[data-more-menu-toggle]')) {
				const moreToggle = target;
				const moreMenu = target.nextElementSibling;

				moreToggle.classList.toggle('active')
				moreMenu.classList.toggle('active')

				if (moreMenu.classList.contains('active')) {
					moreToggle.setAttribute('aria-expanded', 'true');
					moreToggle?.setAttribute('aria-label', 'Закрыть меню действий');
				} else {
					moreToggle.setAttribute('aria-expanded', 'false');
					moreToggle.setAttribute('aria-label', 'Открыть меню действий');
				}
			}
		})

    vars.bodyEl.addEventListener('click', (e) => {
      const target = e.target
      if (!target.closest('[data-more-menu-toggle]') && !target.closest('[data-more-menu]')) {
				const moreToggle = document.querySelectorAll('[data-more-menu-toggle]')
				const moreMenu = document.querySelectorAll('[data-more-menu]')

				moreToggle.forEach((e) => {
					e.setAttribute('aria-expanded', 'false');
					e.setAttribute('aria-label', 'Открыть меню действий');
					e.classList.remove('active')
				})

				moreMenu.forEach((e) => {
					e.classList.remove('active');
				})
      }
    });
  }
})();
