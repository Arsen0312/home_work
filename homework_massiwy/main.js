//? Задание номер 1
console.log('Задание номер 1')

const person = {
    name: 'Arsen',
    age: 17,
    city: 'Bishkek'

}

console.log(person)

//? Задание номер 2
console.log('Задание номер 2')

person.age = 18

console.log(person)

//? Задание номер 3
console.log('Задание номер 3')

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Всего "+numbers.length+" обектов в массиве")

//? Задание номер 4
console.log('Задание номер 4')

const animals = []

animals[0] = 'miska'
animals[1] = 'obizunka'
animals[2] = 'gorila'

console.log(animals)

//? Задание номер 5
console.log('Задание номер 5')

const people = [{
    name: 'Sasha',
    age: 27,
    city: 'Moscow'
},{
    name: 'Eldos',
    age: 23,
    city: 'Astana'
},{
    name: 'Arsen',
    age: 17,
    city: 'Bishkek'
}]

const people1 = ['lupi', 28, 'laguna',['Milyudus', 3000, 'ad'],['Aynakodji', 17, 'none']]

console.log(people);
console.log(people1);

//? Задание номер 6
console.log('Задание номер 6')

const data = [5,{time: '5:55'}, 'time', Boolean, null, undefined, 1n, Object]

console.log(data);

//? Задание номер 7
console.log('Задание номер 7')

const fruits = ['apple', 'pineappple', 'orange']

console.log(fruits[fruits.length - 1]);

//? Задание номер 8
console.log('Задание номер 8')

const book = {
    title: 'War and Peace',
    autor: 'Lev Tolstoy',
    yuar: 1876
}

const bookautor = book.autor

console.log(book.autor, bookautor)