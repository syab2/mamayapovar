if (document.querySelector('.new-recipe-section__field--time')) {
	(function(){
		const field = document.querySelector('.new-recipe-section__field--time')
		const inputMinutes = field.querySelector('.new-recipe-section__field--minutes input')
		const inputHours = field.querySelector('.new-recipe-section__field--hours input')

		const maxMinutes = 59
		const maxHours = 12

		inputMinutes.addEventListener('change', () => {
			if (inputMinutes.value >= maxMinutes) {
				inputMinutes.value = maxMinutes
			} else if (inputMinutes.value <= 0) {
				inputMinutes.value = 0
			}
		})

		inputHours.addEventListener('change', () => {
			if (inputHours.value >= maxHours) {
				inputHours.value = maxHours
				inputMinutes.removeAttribute('required')
				inputMinutes.setAttribute('min', '')
			} else if (inputHours.value >= 1) {
				inputMinutes.removeAttribute('required')
				inputMinutes.setAttribute('min', '')
			} else if (inputHours.value <= 0) {
				inputHours.value = 0
				inputMinutes.setAttribute('required', '')
				inputMinutes.setAttribute('min', '1')
			}
			if (inputMinutes.value <= 0) {
				inputMinutes.value = 0
			}
		})
	})();
}
