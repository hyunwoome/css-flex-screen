window.onload = function () {
	const decreaseButtonElement = document.querySelector('#decrease');
	const increaseButtonElement = document.querySelector('#increase');
	const paletteArticle = document.querySelector('.palette__article');

	// * Remove Box
	decreaseButtonElement.addEventListener('click', function () {
		let inputNumber = parseInt(document.querySelector('#number').value);
		if (1 < inputNumber) {
			inputNumber--;
			document.querySelector('#number').value = inputNumber;
			removeRandomColorBox();

			function removeRandomColorBox() {
				paletteArticle.removeChild(paletteArticle.lastElementChild);
			}
		}
	});

	// * Add Box
	increaseButtonElement.addEventListener('click', function () {
		let inputNumber = parseInt(document.querySelector('#number').value);
		if (20 > inputNumber) {
			inputNumber++;
			document.querySelector('#number').value = inputNumber;
			createRandomColorBox(inputNumber);

			function createRandomColorBox(inputNumber) {
				const divTag = document.createElement('div');
				const randomColor = Math.floor(Math.random() * 16777215).toString(16);
				divTag.className = 'palette__box';
				divTag.style.backgroundColor = `#${randomColor}`;
				let boxNumber = document.createTextNode(`${inputNumber}`);
				divTag.appendChild(boxNumber);
				paletteArticle.appendChild(divTag);
			}
		}
	});

	// * Get Flex Direction
	const flexDirectionSelectElement = document.querySelector(
		'.flex-direction__select',
	);
	flexDirectionSelectElement.addEventListener('change', function () {
		let selectedValue = flexDirectionSelectElement.value;
		paletteArticle.style.flexDirection = selectedValue;
	});
};
