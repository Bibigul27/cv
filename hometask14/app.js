// 1 sort join split
let inputEl = document.querySelector(".hometask .input")
let btnEl = document.querySelector(".hometask .btn1")

function Sort(str){
    return str.split('').sort().join('')
}

function showResult() {
    let s = inputEl.value
    let result = Sort(s)
    let paragraph1 = document.createElement("p")
    paragraph1.textContent = result
    document.body.append(paragraph1)
}

btnEl.addEventListener('click', showResult)

//2 push
let input2El = document.querySelector(".two .input2")
let btn2El = document.querySelector(".two .btn2") 

let list = ['Astana', 'Almaty', 'Amsterdam', 'Antalya', 'Ankara']
let paragraph = document.createElement("p")
paragraph.textContent = `Мой массив: ${list}`
paragraph.style.background = "blue"
document.body.append(paragraph)


function check(){
    let paragraph = document.createElement("p")
    let s = input2El.value.toString().split('')
    if (s[0] === 'A'){
        list.push(input2El.value)
    }
    paragraph.textContent = `${list}`
    paragraph.style.background = "green"
    document.body.append(paragraph)
}

btn2El.addEventListener('click', check)

// 3 filter
let employees = ['Bob', 'Ann', 'Chris', 'Bonny', 'Tom', 'Ben', 'Alex']
let paragraph2 = document.createElement("p")
paragraph2.textContent = `Список сотрудников: ${employees}`
document.body.append(paragraph2)

let filteredList = employees.filter(function (employees){
    return employees.startsWith('A') 
})

let paragraph3 = document.createElement("p")
paragraph3.textContent = `Отфильтрованный список: ${filteredList}`
document.body.append(paragraph3)

// 4 concat
let group1 = ['Balabay', 'Yerkezhan', 'Madina', 'Talgat', 'Bibigul', 'Nurgazy', 'Aidarkhan']
let group2 = ['Daniyar', 'Adilkhan', 'Askar', 'Anel', 'Nariman']

let paragraph41 = document.createElement("p")
paragraph41.textContent = `Первая группа: ${group1}`
document.body.append(paragraph41)

let paragraph42 = document.createElement("p")
paragraph42.textContent = `Вторая группа: ${group2}`
document.body.append(paragraph42)

let allstudents = group1.concat(group2)
let paragraph43 = document.createElement("p")
paragraph43.textContent = `Все сутденты: ${allstudents}`
document.body.append(paragraph43)

// 5 Shift

let someList =["pencil", "milk", "bread", "juice", "potato", "apple"]
let paragraph5 = document.createElement("p")
paragraph5.textContent = `Список продуктов: ${someList}`
document.body.append(paragraph5)

    if(someList[0] === 'pencil'){
        someList.shift()
    }
let paragraph51 = document.createElement("p")
paragraph51.textContent = someList
document.body.append(paragraph51)