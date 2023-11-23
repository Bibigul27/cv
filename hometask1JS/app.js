// First task
let firstNumber = document.getElementById('first')
let secondNumber = document.getElementById('second')
let sumOfNumbers = document.getElementById('sum')
let resultSum = document.getElementById('result')

sumOfNumbers.onclick = function() {

    resultSum.textContent = Number(firstNumber.value) + Number(secondNumber.value)
}

// Second task
let someEl = document.getElementById('some')
let checkEl = document.getElementById('check')
let resultEl = document.getElementById('result2')

checkEl.onclick = function()
{
    let myValue = Number(someEl.value)
    if(myValue>0)
    {
        resultEl.textContent = "Positive"
    }

    else if (myValue==0)
    {
        resultEl.textContent = "Zero"
    }

    else {
        resultEl.textContent = "Negative"
    }
}

// Third task
let inputEl = document.getElementById('input')
let check2El = document.getElementById('check2')
let result3El = document.getElementById('result3')

check2El.onclick = function(){
    let myValue2 = Number(inputEl.value)
    if (myValue2 % 2 == 0) {
        result3El.textContent = "Четное"
    }
    else {
        result3El.textContent ="Нечетное"
    }
}

// Task 4

let numberOneEl = document.getElementById('numberOne')
let numberTwoEl = document.getElementById('numberTwo')
let calcEl = document.getElementById('calc')
let plusEl = document.getElementById('plus')
let minusEl = document.getElementById('minus')
let multEl = document.getElementById('mult')
let divEl = document.getElementById('div')

calcEl.onclick = function() {
    plusEl.textContent =  +numberOneEl.value + +numberTwoEl.value
    minusEl.textContent = +numberOneEl.value  - +numberTwoEl.value 
    multEl.textContent = +numberOneEl.value  * +numberTwoEl.value 
    divEl.textContent = +numberOneEl.value  / +numberTwoEl.value 
}