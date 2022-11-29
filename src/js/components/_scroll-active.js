import vars from '../_vars';

(function(){
	if (vars.sidebarTab) {
		const fieldsets = document.querySelectorAll('fieldset[id]')

		function scrollActive(){
			const scrollY = window.pageYOffset

			fieldsets.forEach(current => {
					const fieldsetHeight = current.offsetHeight + 40
					const fieldsetTop = current.offsetTop - vars.headerHeight - 205;
					const fieldsetId = current.getAttribute('id')
					const fieldsetIdLast = fieldsets[fieldsets.length - 1].getAttribute('id')
					const fieldsetItems = document.querySelectorAll('.sidebar-tree__list li')

					if (window.scrollY + 1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
						fieldsetItems.forEach(e => {
							e.classList.remove('active')
						})
						document.querySelector('.sidebar-tree__list a[href*=' + fieldsetIdLast + ']').parentElement.classList.add('active')
					} else {
						if (scrollY > fieldsetTop && scrollY <= fieldsetTop + fieldsetHeight){
							document.querySelector('.sidebar-tree__list a[href*=' + fieldsetId + ']').parentElement.classList.add('active')
						} else {
								document.querySelector('.sidebar-tree__list a[href*=' + fieldsetId + ']').parentElement.classList.remove('active')
						}
					}
			})
		}
		window.addEventListener('scroll', scrollActive)
	}
})();
