(function(){
  const menuProfileToggle = document.querySelector('[data-menu-profile-toggle]');
  const menuProfile = document.querySelector('[data-menu-profile]');
  const menuProfileLinks = document.querySelectorAll('[data-menu-profile-link]');

  if (menuProfileToggle) {
    menuProfileToggle.addEventListener('click', () => {
      menuProfile.classList.toggle('active');
			menuProfileToggle.classList.toggle('active')

      if (menuProfile.classList.contains('active')) {
        menuProfileToggle.setAttribute('aria-expanded', 'true');
        menuProfileToggle.setAttribute('aria-label', 'Закрыть меню');
      } else {
        menuProfileToggle.setAttribute('aria-expanded', 'false');
        menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
      }
    });

    window.addEventListener('click', (e) => {
      const target = e.target
      if (!target.closest('[data-menu-profile-toggle]') && !target.closest('[data-menu-profile]')) {
        menuProfileToggle.setAttribute('aria-expanded', 'false');
        menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
        menuProfile.classList.remove('active');
				menuProfileToggle.classList.remove('active')
      }
    });

    menuProfileLinks.forEach(el => {
      el.addEventListener('click', () => {
        menuProfileToggle.setAttribute('aria-expanded', 'false');
        menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
        menuProfile.classList.remove('active');
				menuProfileToggle.classList.remove('active')
      });
    });
  }
})();
