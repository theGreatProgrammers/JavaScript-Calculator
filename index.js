let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (event) => {
        buttonText = event.target.innerText;
        // console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            screen.value = Math.sin(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'tan') {
            screen.value = Math.tan(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'log') {
            screen.value = Math.log10(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == '√') {
            screen.value = Math.sqrt(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'x²') {
            screen.value = Math.pow(screenValue, 2);
            screenValue = screen.value;
        }
        else if (buttonText === 'x !') {

            let number = 1;
            if (screen.value === 0) {
                screen.value = '1';
            } else if (screen.value < 0) {
                screen.value = NaN;
            } else {
                let number = 1;
                for (let i = screen.value; i > 0; i--) {
                    number *= i;
                }
                screen.value = number;
                screenValue = screen.value;
            }

        }
        else if (buttonText == 'CE') {
            screenValue = '';
            screen.value = screenValue;

        }
        else if (buttonText == 'π') {
            if ((screenValue * Math.PI) != 0) {
                screenValue = screenValue * Math.PI;
                screen.value = screenValue;
            }
            else {
                screen.value = Math.PI;
                screenValue = screen.value;
            }

        }
        else if (buttonText == 'C') {
            screenValue = screen.value.toString().slice(0, -1);
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            if (screenValue.indexOf('^') > -1) {
                let base = screenValue.slice(0, screenValue.indexOf('^'));
                let exponent = screenValue.slice(screenValue.indexOf('^') + 1);
                screen.value = eval('Math.pow(' + base + ',' + exponent + ')');
                screenValue = screen.value;
            }
            else {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}