var buttons = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;

for(var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputValue = input.innerHTML;
		var btnValue = this.innerHTML;

		if(btnValue == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		else if(btnValue == '=') {
			var equation = inputValue;
			var lastChar = equation[equation.length - 1];
			equation = equation.replace(/x/g, '*');
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			if(equation)
				input.innerHTML = eval(equation);	
			decimalAdded = false;
		}
		else if(operators.indexOf(btnValue) > -1) {
			var lastChar = inputValue[inputValue.length - 1];
			if(inputValue != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnValue;
			else if(inputValue == '' && btnValue == '-') 
				input.innerHTML += btnValue;
			if(operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
				input.innerHTML = inputValue.replace(/.$/, btnValue);
			}
			
			decimalAdded =false;
		}
		else if(btnValue == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnValue;
				decimalAdded = true;
			}
		}
		else {
			input.innerHTML += btnValue;
		}
		e.preventDefault();
	} 
}