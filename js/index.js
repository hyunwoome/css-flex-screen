window.onload = function () {
	const decreaseButton = document.querySelector('#decrease');
	const increaseButton = document.querySelector('#increase');

	decreaseButton.addEventListener('click', function () {
		let inputNumber = parseInt(document.querySelector('#number').value);
		if (1 < inputNumber) {
			inputNumber--;
			document.querySelector('#number').value = inputNumber;
		}
	});

	increaseButton.addEventListener('click', function () {
		let inputNumber = parseInt(document.querySelector('#number').value);
		if (10 > inputNumber) {
			inputNumber++;
			document.querySelector('#number').value = inputNumber;
			createRandomColorBox(inputNumber);

			// * Add Random Color Box
			function createRandomColorBox(inputNumber) {
				const divTag = document.createElement('div');
				const randomColor = Math.floor(Math.random() * 16777215).toString(16);
				divTag.className = 'palette__box';
				divTag.style.backgroundColor = `#${randomColor}`;
				let boxNumber = document.createTextNode(`${inputNumber}`);
				divTag.appendChild(boxNumber);
				const paletteArticle = document.querySelector('.palette__article');
				paletteArticle.appendChild(divTag);
			}
		}
	});
};
