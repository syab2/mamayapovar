if (document.querySelector('.new-recipe-field--time')) {
	(function(){
		const field = document.querySelector('.new-recipe-field--time')
		const inputMinutes = field.querySelector('.new-recipe-field--minutes input')
		const inputHours = field.querySelector('.new-recipe-field--hours input')

		const maxMinutes = inputMinutes.getAttribute('max')
		const maxHours = inputHours.getAttribute('max')

		inputMinutes.addEventListener('change', () => {
			if (inputMinutes.value > maxMinutes - 1) {
				inputMinutes.value = maxMinutes
			} else if (inputMinutes.value <= 0) {
				inputMinutes.value = 0
			}
		})

		inputHours.addEventListener('change', () => {
			if (inputHours.value > maxHours - 1) {
				inputHours.value = maxHours
			} else if (inputHours.value <= 0) {
				inputHours.value = 0
			}
		})
	})();
}
