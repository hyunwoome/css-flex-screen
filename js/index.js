window.onload = function () {
	const decreaseButtonElement = document.querySelector('#decrease');
	const increaseButtonElement = document.querySelector('#increase');
	const paletteArticle = document.querySelector('.palette__article');
	const paletteBox = document.querySelector('.palette__box');
	const flexDirectionElement = document.querySelector('#flex-direction');
	const flexWrapElement = document.querySelector('#flex-wrap');
	const JustifyContentElement = document.querySelector('#justify-content');
	const alignItemsElement = document.querySelector('#align-items');
	const alignContentElement = document.querySelector('#align-content');
	const flexGrowElement = document.querySelector('#flex-grow');

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
	flexDirectionElement.addEventListener('change', function () {
		let selectedValue = flexDirectionElement.value;
		paletteArticle.style.flexDirection = selectedValue;
	});

	// * Get Flex Wrap
	flexWrapElement.addEventListener('change', function () {
		let selectedValue = flexWrapElement.value;
		paletteArticle.style.flexWrap = selectedValue;
	});

	// * Get Justify Content
	JustifyContentElement.addEventListener('change', function () {
		let selectedValue = JustifyContentElement.value;
		paletteArticle.style.justifyContent = selectedValue;
	});

	// * Get Align Items
	alignItemsElement.addEventListener('change', function () {
		let selectedValue = alignItemsElement.value;
		paletteArticle.style.alignItems = selectedValue;
	});

	//* Get Align Content
	alignContentElement.addEventListener('change', function () {
		let selectedValue = alignContentElement.value;
		paletteArticle.style.alignContent = selectedValue;
	});

	// * Get Flex Grow
	flexGrowElement.addEventListener('change', function () {
		let selectedValue = flexGrowElement.value;
		paletteBox.style.flexGrow = selectedValue;
	});
};

window.onbeforeunload = function () {
	return 'Data will be lost if you leave the page, are you sure?';
};
