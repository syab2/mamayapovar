import vars from '../_vars';

// ИГРЕДИЕНТЫ
if (vars.bodyEl.querySelector('.ingredient')) {
	(function(){
		const ingredientSection = document.querySelector('.ingredient');
		const ingredientList = ingredientSection.querySelector('.ingredient__list')
		const ingredientAdd = ingredientSection.querySelector('.ingredient__btn')
		let countOfFields = 2;
		let maxOfFields = 50;

		function randomID() {
			return Math.floor(Math.random() * Date.now())
		}

		function decimalAdjust(type, value, exp) {
			if (typeof exp === 'undefined' || +exp === 0) {
				return Math[type](value);
			}
			value = +value;
			exp = +exp;
			if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
				return NaN;
			}
			value = value.toString().split('e');
			value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
			value = value.toString().split('e');
			return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
		}

		function round10(value, exp) {
			return decimalAdjust('round', value, exp);
		}

		// проверка кол-ва ингредиентов
		vars.bodyEl.addEventListener('click', () => {
			let ingredientAmounts = ingredientSection.querySelectorAll('.ingredient-item__input--amount')

			ingredientAmounts.forEach((input) => {
				const max = input.getAttribute('max')

				input.addEventListener('change', () => {
					let currentValue = String(input.value)

					if (input.value > max - 1) {
						input.value = max
					} else if (input.value > 0.1 && currentValue.length > 3) {
						input.value = round10(input.value, -1)
					} else if (input.value <= 0.1) {
						input.value = 0.1
					}
				})
			})
		})

		// удаление ингредиента
		ingredientList.addEventListener('click', (e) => {
			e.preventDefault()
			let target = e.target
			if (target.classList.contains('ingredient-item__delete') && countOfFields > 1) {
				countOfFields--;
				target.parentNode.remove()

				if (countOfFields == 1) {
					const item = ingredientList.querySelector('.ingredient-item')
					const del = item.querySelector('.ingredient-item__delete')
					del.classList.add('disabled')
				}

				if (countOfFields < maxOfFields) {
					ingredientAdd.classList.remove('disabled')
				}
			}
		})

		// добавление ингредиента
		ingredientAdd.addEventListener('click', e => {
			e.preventDefault()
			countOfFields++;
			const fieldIndex = randomID()

			if (countOfFields == maxOfFields) {
				ingredientAdd.classList.add('disabled')
			}

			if (countOfFields > 1) {
				const items = ingredientList.querySelectorAll('.ingredient-item')
				items.forEach(e => {
					const del = e.querySelector('.ingredient-item__delete')
					del.classList.remove('disabled')
				})
			}

			let ingredientItem = document.createElement("div")
			ingredientItem.classList.add('ingredient-item')
			ingredientItem.setAttribute('id', `ingredient-${fieldIndex}`)
			ingredientItem.innerHTML += `
				<input type="text" name="ingredient-name-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off" required>
				<input type="number" name="ingredient-amount-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="0.1" max="999" step="0.1" autocomplete="off" required>
				<div class="select  ingredient-item__select">
					<select name="ingredient-measure-${fieldIndex}" aria-label="Единица измерения" required>
						<option value="">Ед. измерения</option>
						<option>шт</option>
						<option>г</option>
						<option>кг</option>
						<option>мл</option>
						<option>л</option>
						<option>стакан</option>
						<option>чайная ложка</option>
						<option>столовая ложка</option>
						<option>щепотка</option>
						<option>зубчик</option>
					</select>
					<svg class="icon" aria-hidden="true" focusable="false">
						<use href="${svgChevron}"/>
					</svg>
				</div>
				<button type="button" class="btn-reset  ingredient-item__delete" aria-label="Удалить ингредиент">
					<svg class="icon  icon--16" aria-hidden="true" focusable="false">
						<use href="${svgCross}" />
					</svg>
				</button>
				<label class="form-field__error  hidden">
					<svg class="icon  icon--16" aria-hidden="true" focusable="false">
						<use href="${svgCircleCross}"/>
					</svg>
					<span class="form-field__text">Здесь будет текст ошибки</span>
				</label>
			`;
			ingredientList.append(ingredientItem)
		})
})();
}

// ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ
if (vars.bodyEl.querySelector('.step')) {
	(function(){
		const stepSection = document.querySelector('.step');
		const stepList = stepSection.querySelector('.step__list')
		const stepAdd = stepSection.querySelector('.step__btn')
		let countOfFields = 2;
		let maxOfFields = 30;

		function randomID() {
			return Math.floor(Math.random() * Date.now())
		}

		// удаление шага
		stepList.addEventListener('click', (e) => {
			let target = e.target
			if (target.classList.contains('step-item__delete') && countOfFields > 1) {
				e.preventDefault()
				countOfFields--;
				target.parentNode.remove()
			}

			if (countOfFields < maxOfFields) {
				stepAdd.classList.remove('disabled')
			}

			if (countOfFields == 1) {
				const item = stepList.querySelector('.step-item')
				const del = item.querySelector('.step-item__delete')
				del.classList.add('disabled')
			}
		})

		// добавление шага
		stepAdd.addEventListener('click', e => {
			e.preventDefault()
			countOfFields++;
			const fieldIndex = randomID()

			if (countOfFields == maxOfFields) {
				stepAdd.classList.add('disabled')
			}

			if (countOfFields > 1) {
				const items = stepList.querySelectorAll('.step-item')
				items.forEach(e => {
					const del = e.querySelector('.step-item__delete')
					del.classList.remove('disabled')
				})
			}

			let stepItem = document.createElement("div")
			stepItem.classList.add('step-item')
			stepItem.setAttribute('id', `step-${fieldIndex}`)
			stepItem.innerHTML += `
				<label class="form-field__label  step-item__number" for="step-description-${fieldIndex}"></label>
				<button type="button" class="btn-reset  step-item__delete" aria-label="Удалить шаг">
					<svg class="icon" aria-hidden="true" focusable="false">
						<use href="${svgCross}" />
					</svg>
				</button>
				<div class="step-item__body">
					<div class="imageuploader  imageuploader--small  step-item__imageuploader">
						<label class="input  input--photo  imageuploader__input">
							<input type="file" name="step-photo-${fieldIndex}" accept=".jpg, .jpeg, .png">
							<div class="imageuploader__placeholder">
								<svg class="icon" aria-hidden="true" focusable="false">
									<use href="${svgImage}"/>
								</svg>
								Загрузите фото шага
							</div>
						</label>
						<button type="button" class="btn  btn--other  imageuploader__btn  hidden">
							<svg class="icon  icon--16" aria-hidden="true" focusable="false">
								<use href="${svgDelete}" />
							</svg>
						</button>
					</div>
					<textarea name="step-description-${fieldIndex}" id="step-description-${fieldIndex}" class="input  input--textarea  step-item__input" placeholder="Замешиваем тесто для блинов. В 1 литр теплого молока добавляем 4 яйца..." autocomplete="off" maxlength="5000" required></textarea>
					<label class="form-field__error  hidden" for="step-description-${fieldIndex}">
						<svg class="icon  icon--16" aria-hidden="true" focusable="false">
							<use href="${svgCircleCross}"/>
						</svg>
						<span class="form-field__text">Здесь будет текст ошибки</span>
					</label>
				</div>
			`;
			stepList.append(stepItem)
		})
	})();
}
