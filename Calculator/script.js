// Create variables for calculator
let a = ''; //first number
let b = ''; //second number
let sign = ''; // operation sign
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['-', '+', '/', '*']

// screen
const out = document.querySelector('.calc-screen p');

function ClearALL ()
{
    a = ''; //first number and result
    b = ''; //second number
    sign = ''; // sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = ClearALL;

document.querySelector('.buttons').onclick = (event) => {
    //pressed non button space
    if(!event.target.classList.contains('btn')) return;
    //pressed button ClearAll (ac)
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    //получить нажатую кнопку
    const key = event.target.textContent;

    //если нажата 0-9 или . 
    if(digits.includes(key))  {
        if (b === '' && sign === ''){
            a += key;
            out.textContent = a;
        }

        else if(a !== '' && b !=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }

        else {
            b +=key; 
            out.textContent = b;
        }
        console.log(a, b, sign);
        return; 
    }

    //если нажата + - / *
    if(operators.includes(key))  {
        sign = key
        out.textContent = sign; 
        console.log(a, b, sign);
        return;
    }
    
    //нажата =
    if(key === '='){
        if (b === ''){
            b = a;
        }
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0')
                {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return; 
                }
                a = a / b;
                break;
        }
        finish = true; 
        out.textContent = a;
        console.log(a, b, sign);
    }

}