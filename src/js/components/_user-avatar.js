import vars from "../_vars";

(function(){
	const userAvatar = vars.bodyEl.querySelector('.user-avatar--change')

	if (userAvatar) {
		const image = userAvatar.querySelector('.user-avatar__input')
		const input = userAvatar.querySelector('input[type="file"]')
		let uploadedImage = ""

		input.addEventListener('change', () => {
			if (!input.value == "") {
				const reader = new FileReader()
				reader.addEventListener('load', () => {
					uploadedImage = reader.result
					image.style.backgroundImage = `url(${uploadedImage})`
				})
				reader.readAsDataURL(input.files[0])
			}
		})
	}
})();

