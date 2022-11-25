

// function deleteField(a) {
//  var contDiv = a.parentNode;
//  // Удаляем этот ДИВ из DOM-дерева
//  contDiv.parentNode.removeChild(contDiv);
//  // Уменьшаем значение текущего числа полей
//  countOfFields--;
//  // Возвращаем false, чтобы не было перехода по сслыке
//  return false;
// }

(function(){
  let countOfFields = 1;
  const ingredientSection = document.querySelector('.ingredient');
  const ingredientList = ingredientSection.querySelector('.ingredient__list')
  const ingredientAddBtn = document.querySelector('.ingredient__btn')
  const ingredientDelBtn = document.querySelectorAll('.ingredient-item__delete')

  ingredientAddBtn.addEventListener('click', e => {
    e.preventDefault();
    countOfFields++;

    ingredientList.innerHTML += `
			<div class="ingredient-item" id="ingredient-${countOfFields}">
			<input type="text" name="ingredient-name-${countOfFields}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off" required>
			<input type="number" name="ingredient-amount-${countOfFields}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="1" max="5000" autocomplete="off" required>
			<div class="select  ingredient-item__select">
				<select name="ingredient-measure-${countOfFields}" aria-label="Единица измерения" required>
					<option>Ед. измерения</option>
					<option>шт</option>
					<option>г</option>
					<option>кг</option>
					<option>мл</option>
					<option>л</option>
					<option>столовая ложка</option>
					<option>чайная ложка</option>
					<option>стакан</option>
				</select>
				<svg class="icon  select__icon" aria-hidden="true" focusable="false">
					<use href="img/sprite.svg#chevron-down"/>
				</svg>
			</div>
			<a class="btn-reset  ingredient-item__delete" aria-label="Удалить ингредиент">
				<svg class="icon  icon--16  ingredient-item__icon" aria-hidden="true" focusable="false">
					<use href="img/sprite.svg#cross" />
				</svg>
			</a>
		</div>
    `;
  })

  ingredientDelBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      let contDiv = btn.parentNode;
      contDiv.parentNode.removeChild(contDiv);
      countOfFields--;
      return false;
    })
  })
})();

