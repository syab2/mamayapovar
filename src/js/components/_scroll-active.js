import vars from '../_vars';

if (vars.sidebarTab) {
	const fieldsets = document.querySelectorAll('fieldset[id]')

	function scrollActive(){
    const scrollY = window.pageYOffset

    fieldsets.forEach(current => {
        const fieldsetHeight = current.offsetHeight + 40
        const fieldsetTop = current.offsetTop - vars.headerHeight - 205;
        const fieldsetId = current.getAttribute('id')
				const fieldsetIdFirst = fieldsets[0].getAttribute('id')
				const fieldsetIdPreLast = fieldsets[fieldsets.length - 2].getAttribute('id')
				const fieldsetIdLast = fieldsets[fieldsets.length - 1].getAttribute('id')

				if (window.scrollY + 1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
					document.querySelector('.sidebar a[href*=' + fieldsetIdLast + ']').parentElement.classList.add('active')
					document.querySelector('.sidebar a[href*=' + fieldsetIdPreLast + ']').parentElement.classList.remove('active')
					document.querySelector('.sidebar a[href*=' + fieldsetIdFirst + ']').parentElement.classList.remove('active')
				} else {
					if (scrollY > fieldsetTop && scrollY <= fieldsetTop + fieldsetHeight){
            document.querySelector('.sidebar a[href*=' + fieldsetId + ']').parentElement.classList.add('active')
					} else {
							document.querySelector('.sidebar a[href*=' + fieldsetId + ']').parentElement.classList.remove('active')
					}
				}
    })
	}
	window.addEventListener('scroll', scrollActive)
}
