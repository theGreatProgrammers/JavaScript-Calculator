let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'CE'){
            screenValue = '';
            screen.value = screenValue;
            
        }
        else if(buttonText == 'C'){
            screenValue = screen.value.toString().slice(0, -1);
            screen.value = screenValue;
            
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}