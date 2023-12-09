// обратный цикл
/*for (let i = 100; i > 0; i = i - 2) {
    console.log(i);
}*/

//while 
/*let n = prompt("Enter a number: ")
let i = 1
while (i * i <= n){
    console.log(i * i)
    i++
}*/

//N factorial
/*let number = document.querySelector(".enter .input")
let element = document.querySelector(".enter .btn")

function calculate(n){
    let fact = 1
    for(let i = 1; i <= n; i++) {
         fact = fact * i;
    }
    return fact
}

function showResult(){
    let num = Number(number.value)
    let result = calculate(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result
    document.body.append(paragraph)
}

element.addEventListener('click', showResult)*/

// Вычислить 2 в степени N:
/*let number = document.querySelector(".second .input2")
let btn = document.querySelector(".second .calc2")

function powerOfTwo(n){
    let val = 1
    for(let i = 1; i<=n; i++){
        val *=i
    }
    return val
}

function showResult2(){
    let num = Number(number.value)
    let result2 = powerOfTwo(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result2
    document.body.append(paragraph)
}

btn.addEventListener('click', showResult2)*/

//Натуральный делитель
/*let number = document.querySelector(".third .input3")
let btnEl = document.querySelector(".third .btn")

function divider(n){
    let val 
    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            val = i
            break;
        }
    }
    return val
}

function showResult3(){
    let num = Number(number.value)
    let result3 = divider(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result3
    document.body.append(paragraph)
}

btnEl.addEventListener('click', showResult3)*/

// Все делители числа
/*let number = document.querySelector(".four .input4")
let btnEl = document.querySelector(".four .btn4")

function allDividers(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            console.log(i)
        }
    }
}

function showResult4(){
    let num = Number(number.value)
    let result4 = allDividers(num)
}

btnEl.addEventListener('click', showResult4)*/

//Сумма натуральных чисел
/*let number = document.querySelector(".five .input5")
let btnEl = document.querySelector(".five .btn5")

function sum(n) {
    let s = 0
    for(let i = 1; i <= n; i++){
        s +=i;
    }
    return s
}

function showResult5() {
    let num = Number(number.value)
    let result5 = sum(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result5
    document.body.append(paragraph)
}

btnEl.addEventListener('click', showResult5)*/

//Сумма квадратов
/*let number = document.querySelector(".six .input6")
let btnEl = document.querySelector(".six .btn6")

function sumOfSquares(n){
    let s = 0
    for (let i = 1; i <= n; i++){
        s += i*i
    }
    return s
}

function showResult6(){
    let num = Number(number.value)
    let result6 = sumOfSquares(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result6
    document.body.append(paragraph)
}

btnEl.addEventListener('click', showResult6)*/

//Является ли число простым
let number = document.querySelector(".seven .input7")
let btnEl = document.querySelector(".seven .btn7")

function prime(n){
    let p = "Yes"
    for(let i = 2; i < n; i++){
        if(n % i === 0){
        p = "No"
        }
        else {
            p 
        }
    }
    return p
}

function showResult7(){
    let num = Number(number.value)
    let result7 = prime(num)
    let paragraph = document.createElement("p")
    paragraph.textContent = result7
    document.body.append(paragraph)
}

btnEl.addEventListener('click', showResult7)