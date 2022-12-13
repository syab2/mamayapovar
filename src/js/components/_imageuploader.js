import vars from "../_vars";

if (vars.bodyEl.querySelector('.imageuploader')) {
	(function(){
		vars.bodyEl.addEventListener('click', (e) => {
			const target = e.target
			if (target.classList.contains('imageuploader__input')) {
				const input = target.querySelector('input[type="file"]')
				const image = target.parentNode.querySelector('.imageuploader__input')
				const delBtn = target.parentNode.querySelector('.imageuploader__btn')
				const placeholder = target.querySelector('.imageuploader__placeholder')
				let uploadedImage = ""

				input.addEventListener('change', () => {
					if (!input.value == "") {
						const reader = new FileReader()
						reader.addEventListener('load', () => {
							uploadedImage = reader.result
							image.style.backgroundImage = `url(${uploadedImage})`
							placeholder.classList.add('hidden')
							delBtn.classList.remove('hidden')
						})
						reader.readAsDataURL(input.files[0])
					}
				})

				delBtn.addEventListener('click', (button) => {
					button.preventDefault()
					input.value = "";
					uploadedImage = ""
					image.style.backgroundImage = 'none'
					placeholder.classList.remove('hidden')
					delBtn.classList.add('hidden')
				})
			}
		})
	})();
}
