// Создайте объект person с информацией о человеке (имя, возраст, пол, город и т. д.). Используя деструктуризацию объекта, извлеките и выведите на экран информацию об этом человеке.

const human = {
    name: 'Lolbek',
    age: 17,
    gender: 'men',
    city: 'Dublin',
}

const { name, age, gender, city } = human

console.log(name, age, gender, city)

// Создайте массив с несколькими числами. Используя деструктуризацию массива, извлеките и выведите на экран первый и последний элементы массива.

const array = [1,2,3]

const { ...numbers } = array

console.log(numbers)

// Напишите функцию, которая принимает объект, представляющий собой информацию о человеке, и использует деструктуризацию объекта, чтобы извлечь и вернуть имя и возраст этого человека.

function fnArray (arr) {
    const { name, age } = arr
    const fullInfo = name + ' ' + age
    return fullInfo
}

console.log(fnArray(human))

// Создайте две переменные a и b. Используя деструктуризацию, обменяйте значения между этими переменными без использования временной переменной.

const a = 10
const b = 20

const [a1, b1] = [b, a]

console.log(a1, b1)

// Создайте объект, представляющий собой информацию о компании (название, адрес, информация о сотрудниках и т. д.). Используя вложенную деструктуризацию объекта, извлеките информацию о названии компании и имени первого сотрудника.

const google = {
    name: 'Google',
    legalAddress: 'Маунтин-Вью, Штат Калифорния США',
    foundingDate: 1998,
    founder: [ 'Larro Page', 'Sergey Brin',],
    capital: '1,5 трилион долоров за 2022'
}

const { name: nameG, foundingDate, founder: [...cadrs] } = google

console.log(nameG, cadrs, foundingDate)

// Создайте массив объектов, представляющих собой список студентов. Используя цикл и деструктуризацию объектов, выведите на экран имена и возраст каждого студента из списка.

const array1 = new Array(new Array('Nurbol', 19, 'JS'), new Array('Jamilu', 23, 'Python'), new Array('Rustam', 18, 'JS'))

for (i of array1) {
    const [name, age] = i
    console.log(name, age);
}