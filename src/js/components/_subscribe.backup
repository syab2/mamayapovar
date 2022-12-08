(function(){
  const buttonSubcribe = document.querySelector('[data-button-subscribe]');
  const buttonText = document.querySelector('[data-text-subscribe]');

  if (buttonSubcribe) {
    buttonSubcribe.addEventListener('click', () => {
      buttonSubcribe.classList.toggle('active');
      if (buttonSubcribe.classList.contains('active')) {
        buttonSubcribe.setAttribute('aria-label', 'Отменить подписку');
				buttonText.textContent = 'Вы подписаны'
      } else {
        buttonSubcribe.setAttribute('aria-label', 'Оформить подписку');
				buttonText.textContent = 'Подписаться'
      }
    });
  }
})();
