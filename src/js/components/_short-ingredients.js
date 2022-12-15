import vars from '../_vars';

(function(){
  if (document.querySelector('[data-short-ingredients]')) {
		vars.bodyEl.addEventListener('click', (e) => {
			const target = e.target
			if (target.closest('[data-short-ingredients-toggle]')) {
				const shortIngredientsToggle = target;
				const shortIngredients = target.nextElementSibling;

				shortIngredientsToggle.classList.toggle('active')
				shortIngredients.classList.toggle('active')

				if (shortIngredients.classList.contains('active')) {
					shortIngredientsToggle.setAttribute('aria-expanded', 'true');
					shortIngredientsToggle.setAttribute('aria-label', 'Закрыть список ингредиентов');
				} else {
					shortIngredientsToggle.setAttribute('aria-expanded', 'false');
					shortIngredientsToggle.setAttribute('aria-label', 'Открыть список ингредиентов');
				}
			}
		})

    vars.bodyEl.addEventListener('click', (e) => {
      const target = e.target
      if (!target.closest('[data-short-ingredients-toggle]') && !target.closest('[data-short-ingredients]')) {
				const shortIngredientsToggle = document.querySelectorAll('[data-short-ingredients-toggle]')
				const shortIngredients = document.querySelectorAll('[data-short-ingredients]')

				shortIngredientsToggle.forEach((e) => {
					e.setAttribute('aria-expanded', 'false');
					e.setAttribute('aria-label', 'Открыть список ингредиентов');
					e.classList.remove('active')
				})

				shortIngredients.forEach((e) => {
					e.classList.remove('active');
				})
      }
    });
  }
})();
