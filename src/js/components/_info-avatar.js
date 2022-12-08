import vars from "../_vars";

(function(){
	const infoAvatar = vars.bodyEl.querySelector('.info-avatar--change')

	if (infoAvatar) {
		const image = infoAvatar.querySelector('.info-avatar__input')
		const input = infoAvatar.querySelector('input[type="file"]')
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

