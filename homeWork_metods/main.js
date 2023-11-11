console.log('Task_1');

function concatString(str, str2) {
    return str.concat(str2)
}

console.log(concatString('Hello', 'world'));

console.log('Task_2');

const replaceTwoStr = function(text, podstroca, zamenitel) {
    return text.replaceAll(podstroca, zamenitel)
}

console.log(replaceTwoStr('hello', 'l', 'o'));

console.log('Task_3');

const stringToLowerCase = function(textForLowerCase) {
    return textForLowerCase.toLowerCase()
}

console.log(stringToLowerCase('LOGO'));

console.log('Task_4');

const includStrFn = function(textForInclud, textForRetrieval) {
    if (textForInclud.includes(textForRetrieval)) {
        return true
    } else return false 
}

console.log(includStrFn('lololoshka', 'p'));

console.log('Task_5');

const getIndexOf = (textForIdexOf, textForIndexOfMetods) => {
    return textForIdexOf.indexOf(textForIndexOfMetods)
}

console.log(getIndexOf('lololoshka', 'l'));

console.log('Task_6');

function splitString(textForSplit) {
    return textForSplit.split(' ')
}

console.log(splitString('lolo loshka'));

console.log('Task_7');

const sliceString = function(textForSlice, index1, index2) {
    return textForSlice.slice(+index1, +index2)
}

console.log(sliceString('textForSlice', 4, 7));

console.log('Task_8');

function converToString(number) {
    return number.toString()
}

console.log(converToString(99));

console.log('Task_9');

const converTofloat = function(itemForConverTofloat) {
    return parseFloat(itemForConverTofloat)
}

console.log(converTofloat('123.123'));

console.log('Task_10');

let fruits = ['apple', 'painapple', 'orange']
fruits.push('dragonFruits')
console.log(fruits);
fruits.pop()
console.log(fruits);

console.log('Task_11');

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newNum = numbers.slice()
let evenNumbers = []


for (let i of newNum) {
    if (i % 2 == 0) {
        evenNumbers = evenNumbers.concat(i)
    }
}
console.log(evenNumbers.join(''))

console.log('Task_12')

let colors = ['red', 'purpul', 'orange']
colors.unshift('yellow')
console.log(colors)
colors.shift()
console.log(colors)

console.log('Task_13')

let firstArray = ['Hello']
let secondArray = ['World']
let mergedArray = firstArray.concat(secondArray)
console.log(mergedArray.includes('World'))

console.log('Task_14')

let animals = ['whiteMishka', 'mishka', 'grizli']
animals.push('neWhiteMishka')
console.log(animals)
console.log(animals.indexOf('neWhiteMishka'))

console.log('Task_15')

let numbersOne = [1,2,3,4,5]
let newNumbers = numbersOne.slice(0, 2)
newNumbers.reverse()
newNumbers = newNumbers.toString()
console.log(typeof newNumbers, newNumbers);

console.log('Task_16')

let fruitsOne = ['dragonFruits', 'apple', 'grusha']
fruitsOne.unshift('painApple')
fruitsOne.shift()
console.log(fruitsOne)

console.log('Task_17')

let firstArrayOne = [1,2,3,[4,5,6]]
firstArray= firstArrayOne.flat(1)
console.log(firstArray.join(','))

console.log('Hard_Task_1')
// Создайте функцию findUniqueWords, которая принимает строку и возвращает массив уникальных слов (без повторений) в этой строке, игнорируя регистр букв. В данном случае, вы можете использовать объект для отслеживания уникальных слов
function findUniqueWords(inputString) {
    const words = inputString.toLowerCase().split(/\s+/);
    const finalResult = []
    const seen = new Set()
    for (const word of words) {
        if (seen.has(word)) {
            continue
        }
        finalResult.push(word)
        seen.add(word)
    }
    return finalResult
}

const inputString = "This is a test. This is only a test."
const result0 = findUniqueWords(inputString)
console.log(result0)

const seen9 = new Set()
console.log(typeof seen9);

console.log('Hard_Task_2')

let newStr = ''
let userWord = 'hello'

const Fn = function(str) {
    for (let i of str) {
        if (i == 'a'||i == 'A' ||i == 'e' ||i == 'E' ||i == 'i' ||i == 'I' ||i == 'o' ||i == 'O' ||i == 'u' ||i == 'U' ||i == 'y'||i == 'Y') {
            i = '*'
        }
        newStr += i
    }
    return newStr
}

console.log(Fn(userWord))

console.log('Hard_Task_3')

let result = 0

function calculateAverage(num) {
    for (let i of num) {
        result += +i
    }
    console.log(result / num.length);
}

calculateAverage([1,2,3,4,5])

console.log('Hard_Task_4')

let numString = "1,2,3,4,5"
let newArray = []
let nn = []

const Fn1 = function(num) {
    newArray = num.split(",")
    for (let i of newArray) {
        nn.push(parseInt(i))
    }
    console.log(nn);
}
Fn1(numString)

console.log('Hard_Task_5')

const reversWordFn = (text) => {
    text = text.split(" ")
    text.reverse()
    text.join(" ")
    console.log(text);
}

reversWordFn('Lorem ipsum dolor sit amet')

console.log('Hard_Task_6')

const numBers = [1,2,3,4,5,6,2,4,6]

const filterUniqueNumbers = function(num) {
    const res = num.filter((elem, indx) => {
    return num.indexOf(elem) === indx
    
})
console.log(res);
}
filterUniqueNumbers(numBers)