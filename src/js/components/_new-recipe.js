import vars from '../_vars';

// ИГРЕДИЕНТЫ
if (vars.bodyEl.querySelector('.ingredient')) {
	(function(){
		const ingredientSection = document.querySelector('.ingredient');
		const ingredientList = ingredientSection.querySelector('.ingredient__list')

		let countOfFields = 2;
		let fieldIndex = 1;

		ingredientSection.addEventListener('click', sec => {
			sec.preventDefault()

			// добавление
			if (sec.target.classList.contains('ingredient__btn')) {
				countOfFields++;
				fieldIndex++;

				ingredientList.innerHTML += `
					<div class="ingredient-item" id="ingredient-${fieldIndex}">
						<input type="text" name="ingredient-name-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off" required>
						<input type="number" name="ingredient-amount-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="1" max="5000" autocomplete="off" required>
						<div class="select  ingredient-item__select">
							<select name="ingredient-measure-${fieldIndex}" aria-label="Единица измерения" required>
								<option value="">Ед. измерения</option>
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
			}

			// удаление
			if (sec.target.classList.contains('ingredient-item__delete') && countOfFields > 1) {
				countOfFields--;
				fieldIndex--;
				sec.target.parentElement.remove()
			}
		})
	})();
}

// ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ
if (vars.bodyEl.querySelector('.step')) {
	(function(){
		const stepSection = document.querySelector('.step');
		const stepList = stepSection.querySelector('.step__list')

		let countOfFields = 2;
		let fieldIndex = 1;

		stepSection.addEventListener('click', sec => {
			sec.preventDefault()

			// добавление
			if (sec.target.classList.contains('step__btn')) {
				countOfFields++;
				fieldIndex++;

				stepList.innerHTML += `
					<div class="step-item" id="step-${fieldIndex}">
					<div class="step-item__header">
						<span class="input__label  step-item__number"></span>
						<a href="#" class="btn-reset  step-item__delete" aria-label="Удалить шаг">
							<svg class="icon  step-item__icon" aria-hidden="true" focusable="false">
								<use href="img/sprite.svg#cross" />
							</svg>
						</a>
					</div>
					<div class="step-item__body">
						<div class="imageuploader  step-item__imageuploader">
							<label class="input  input--photo  imageuploader__input">
								<input type="file" name="step-photo-${fieldIndex}" accept=".jpg, .jpeg, .png" required>
								<svg class="icon  input__icon" aria-hidden="true" focusable="false">
									<use href="img/sprite.svg#image"/>
								</svg>
								Загрузите фото блюда
							</label>
							<a class="btn  btn--other  imageuploader__btn  hidden">
								<svg class="icon  icon--16  btn__icon" aria-hidden="true" focusable="false">
									<use href="img/sprite.svg#delete" />
								</svg>
							</a>
						</div>
						<textarea name="step-description-${fieldIndex}" class="input  input--textarea  step-item__input"
							placeholder="Замешиваем тесто для блинов. В 1 литр теплого молока добавляем 4 яйца..."
							autocomplete="off" maxlength="5000" required></textarea>
					</div>
				</div>
				`;
			}

			// удаление
			if (sec.target.classList.contains('step-item__delete') && countOfFields > 1) {
				countOfFields--;
				fieldIndex--;
				sec.target.parentElement.parentElement.remove()
			}
		})
	})();
}

