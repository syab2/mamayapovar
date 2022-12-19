import GraphModal from 'graph-modal';

const modal = new GraphModal({
	isOpen: (modal) => {
		const registerName = document.querySelector('#username-register')
		const authEmail = document.querySelector('#email-auth')

		if (registerName) {
			setTimeout(function(){
				registerName.focus()
			}, 100);
		}
		if (authEmail) {
			setTimeout(function(){
				authEmail.focus()
			}, 100);
		}
	},
});
