// Task 1
let number1El = document.getElementById('number1')
let number2El = document.getElementById('number2')
let avgEl = document.getElementById('avg')
let result1El = document.getElementById('result1')

avgEl.onclick = function () {
    result1El.textContent = (+number1El.value + +number2El.value) / 2
}

// Task 2
let numberOneEl = document.getElementById('numberOne')
let numberTwoEl = document.getElementById('numberTwo')
let calcEl = document.getElementById('calc')
let result2El = document.getElementById('result2')
let result22El = document.getElementById('result22')

calcEl.onclick = function(){
    if ((+numberOneEl.value) % (+numberTwoEl.value)!=0 && +numberOneEl.value > +numberTwoEl.value) {
        result2El.textContent = (+numberOneEl.value) % (+numberTwoEl.value)
    }
    else if ((+numberOneEl.value) % (+numberTwoEl.value)!=0 && +numberOneEl.value < +numberTwoEl.value) {
        result2El.textContent = (+numberOneEl.value) % (+numberTwoEl.value)
        result22El.textContent = (+numberTwoEl.value) - (+numberOneEl.value)
    }

    else {
        result2El.textContent = "OK";
    }
}

// Task 3

let hourEl = document.getElementById('hour')
let minuteEl = document.getElementById('minute')
let timetypeEl = document.getElementById('timetype')
let convertEl = document.getElementById('convert')
let result3El = document.getElementById('result3')

convertEl.onclick = function() {
    if(timetypeEl.value == 'pm') {
        result3El.textContent = +hourEl.value + 12 + ":" + minuteEl.value
    }
    else {
        result3El.textContent = hourEl.value +":"+ minuteEl.value
    }

}

// Task 4
 let number41El = document.getElementById('number41')
 let number42El = document.getElementById('number42')
 let maxEl = document.getElementById('max')
 let result4El = document.getElementById('result4')

 maxEl.onclick = function(){
    if(+number41El.value > +number42El.value) {
    result4El.textContent = +number41El.value
    }
    else {
        result4El.textContent = +number4El.value
    }
 }

 // Task 5
 let yearEl = document.getElementById('year')
 let checkEl = document.getElementById('check')
 let result5El = document.getElementById('result5')

 checkEl.onclick = function(){
    if(+yearEl.value % 4 == 0){
        result5El.textContent = 'Високосный год'
    }
    else {
        result5El.textContent = 'Не високосный год'
    }
 }

 // Task 6 
 let number61El = document.getElementById('number61')
 let number62El = document.getElementById('number62')
 let number63El = document.getElementById('number63')
 let max6El = document.getElementById('max6')
 let result6El = document.getElementById('result6')

 max6El.onclick = function(){
    if(+number61El.value > +number62El.value && +number62El.value > +number63El.value) {
    result6El.textContent = +number61El.value
    }
    else if (+number62El.value > +number61El.value && +number61El.value > +number63El.value) {
        result6El.textContent = +number62El.value
    }
    else {
        result6El.textContent = +number63El.value
    }
 }

  // Task 7
  let number71El = document.getElementById('number71')
  let number72El = document.getElementById('number72')
  let number73El = document.getElementById('number73')
  let max7El = document.getElementById('max7')
  let result7El = document.getElementById('result7')
 
  max7El.onclick = function(){
     if(+number71El.value < +number72El.value && +number71El.value < +number73El.value) {
        result7El.textContent = +number71El.value
     }
     else if(+number72El.value < +number71El.value && +number72El.value < +number73El.value){
        result7El.textContent = +number72El.value
     }

     else {
        result7El.textContent = +number73El.value
     }
  }
  // Task 8
  let aEl = document.getElementById('a')
  let bEl = document.getElementById('b')
  let findXEl = document.getElementById('findX')
  let result8El = document.getElementById('result8')

  findXEl.onclick = function(){
    let somenumber
    somenumber = - (+bEl.value) / (+aEl.value)
    if (somenumber > 0 && somenumber < 1) {
        result8El.textContent = "-1 " + "(" + somenumber + ")"
    }
    else if(somenumber >= 1) {
        result8El.textContent = "1 " + "(" + somenumber + ")"

    }
  }

  // Task 9
  let rubEl = document.getElementById('rubl1')
  let kop1El = document.getElementById('kop1')
  let rub2El = document.getElementById('rubl2')
  let kop2El = document.getElementById('kop2')
  let exchangeEl = document.getElementById('exchange')
  let result9El = document.getElementById('result9')

  exchangeEl.onclick = function(){
    result9El.textContent = (Number(rub2El.value) - Number(rubEl.value)) + " р. " 
    + (Number(kop2El.value) - Number(kop1El.value)) + " к."
  }

  // Task 10
  let iceEl = document.getElementById('ice')
  let check10El = document.getElementById('check10')
  let result10El = document.getElementById('result10')

  check10El.onclick = function(){
    if (+iceEl.value % 3 == 0 || +iceEl.value % 5 == 0) {
        result10El.textContent = 'Yes'
    }
    else {
        result10El.textContent = 'No'
    }
  }