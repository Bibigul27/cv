// filter
console.log("filter")
let array = ["Balabay", "Yerkezhan", "Madina", "Talgat", "Bibigul"]

let filterWords = (array, word) => {
    return array.filter((element) => 
    element.includes(word)
    )
}

console.log(filterWords(array, "a"))
console.log(filterWords(array, "b"))

// map
console.log("map")
let nums = [4, 9, 12, 49, 81] 

let result = (elem) => elem * 2;
let output = nums.map(result)
console.log(output)


// sort
console.log("sort")
const sorted = (array) => {
    return array.sort()
}

console.log(sorted(array))

//reduce
console.log("reduce")

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const getAverage = (numbers) =>{
    const total = numbers.reduce((total, number) => {
        return total + number
    })
    return total/numbers.length
}

console.log(getAverage(numbers))