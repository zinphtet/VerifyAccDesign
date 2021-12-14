let inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
	input.addEventListener('keydown', function (e) {
		console.log(e);
		if (e.keyCode >= 48 && e.keyCode <= 57) {
			input.value = '';
			setTimeout(() => {
				if (index < 5) {
					inputs[index + 1].focus();
				}
			}, 20);
		}

		if (e.key == 'Backspace') {
			input.value = '';
			setTimeout(() => {
				if (index > 0) {
					inputs[index - 1].focus();
				}
			}, 20);
		}
	});
});
