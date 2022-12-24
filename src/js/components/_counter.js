if (document.querySelector('.counter__input')) {
	(function(){
		const counterInput = document.querySelector('.counter__input')
		const counterPlus = document.querySelector('.counter__btn--plus')
		const counterMinus = document.querySelector('.counter__btn--minus')
		const counterMax = 20

		counterInput.addEventListener('change', () => {
			if (counterInput.value > counterMax - 1) {
				counterInput.value = counterMax
				counterPlus.classList.add('disabled')
			} else {
				counterPlus.classList.remove('disabled')
			}

			if (counterInput.value <= 1) {
				counterInput.value = 1
				counterMinus.classList.add('disabled')
			} else {
				counterMinus.classList.remove('disabled')
			}
		})

		counterPlus.addEventListener('click', (e) => {
			e.preventDefault()

			let currentValue = parseInt(counterInput.value)
			currentValue++
			counterInput.value = currentValue
			counterMinus.classList.remove('disabled')

			if (counterInput.value > counterMax - 1) {
				counterInput.value = counterMax
				counterPlus.classList.add('disabled')
			} else {
				counterPlus.classList.remove('disabled')
			}
		})

		counterMinus.addEventListener('click', (e) => {
			e.preventDefault()

			let currentValue = parseInt(counterInput.value)
			currentValue--
			counterInput.value = currentValue

			counterPlus.classList.remove('disabled')

			if (counterInput.value <= 1) {
				counterInput.value = 1
				counterMinus.classList.add('disabled')
			} else {
				counterMinus.classList.remove('disabled')
			}
		})
	})();
}
