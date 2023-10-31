//* task 1
// map: Создайте функцию, которая принимает массив чисел и возвращает новый массив, где каждое число увеличено на 10.
const array = [1,2,3,4,5]
const getArrayX10 = array.map(elem => elem * 10)
console.log(getArrayX10);

//* task 2
// filter: Создайте функцию, которая принимает массив слов и возвращает новый массив, содержащий только слова, длина которых больше 5 символов.
const arrayWord = ['hello', 'my', 'name', 'is', 'djeriki']
const getArrayWord = arrayWord.filter(elem => elem.length >= 5)
console.log(getArrayWord);

//* task 3
// forEach: Создайте функцию, которая принимает массив чисел и выводит в консоль квадрат каждого числа.

const arrayNumbers = [1,9,3,3,5]
const arrayKvadratNum = arrayNumbers.forEach(elem => console.log(elem ** 2))

//* task 4
// reduce: Создайте функцию, которая принимает массив чисел и возвращает сумму всех чисел в массиве.

const getSumArray = arrayNumbers.reduce((prev, cur) => {
    return prev + cur
})
console.log(getSumArray);

//* task 5
//some: Создайте функцию, которая проверяет, есть ли в массиве чисел хотя бы одно четное число. Функция должна возвращать true или false.

const getTrueOrFalse = arrayNumbers.some((elem) => {
    if (elem % 2 === 0 ) {
        return console.log(true);
    }
})

//* task 6
//every: Создайте функцию, которая проверяет, все ли числа в массиве положительные. Функция должна возвращать true или false.

const getFalseOrTrue = arrayNumbers.every(elem => elem > 0)
console.log(getFalseOrTrue);

//* task 7
//find: Создайте функцию, которая находит первое четное число в массиве чисел и возвращает его. Если в массиве нет четных чисел, функция должна вернуть null.

function findFirstEvenNumber(numbers) {
    let evenNumber = numbers.find(function(number) {
        return number % 2 === 0;
    });
    return evenNumber !== undefined ? evenNumber : null;
}
console.log(findFirstEvenNumber(array))

//* task 8 
//map: Создайте функцию, которая принимает массив строк и возвращает новый массив, где каждая строка преобразована в верхний регистр.

const text = ['MY NAME IS GEROIN']
const getArrayLower = text.map(elem => elem.toLocaleLowerCase())
console.log(getArrayLower)

//* task 9 
//filter: Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.

const arra1 = [-1,1,2,3,4,5]
const getArrayEven = arra1.filter(elem => elem > 0)
console.log(getArrayEven);

//* task 10
//forEach: Создайте функцию, которая принимает массив имён и выводит в консоль приветствие для каждого имени, например, "Привет, [имя]!"


const obj = ['Anna', 'Olov', 'GerodotBaykehe']

function getHelloName(obj) {
        obj.forEach((elem) => {
        console.log('hello', elem);
    })
}
getHelloName(obj)

//* task 11
//reduce: Создайте функцию, которая принимает массив чисел и возвращает произведение всех чисел в массиве.

function reduceArray(array) {
    let ooo = array.reduce((prev, cur) => prev * cur)
    console.log(ooo);
}
reduceArray(array)

//* task 11 
//some: Создайте функцию, которая проверяет, есть ли в массиве строк хотя бы одна строка длиной больше 10 символов. Функция должна возвращать true или false.

function getWordBolshe10Bukv (obj) {
    let res = obj.some(elem => elem.length >= 10)

}

console.log(getWordBolshe10Bukv(obj))
