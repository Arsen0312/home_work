//* Задание номер 1

console.log('------Задание номер 1------')

const age = 17

if (age >= 18) {
    console.log('Совершенноелетьний')
} else if (age < 18) {
    console.log('Не совершенноелетьний')
}

//* Задание номер 2

console.log('------Задание номер 2------')

const isStudent = true

 if (isStudent == true) {
    console.log('Студент')
 } else {
    console.log('Не студент')
 }

//* Задание номер 3

console.log('------Задание номер 3------')

const num1 = 1000
const num2 = 7

console.log(num1 + num2)

//* Задание номер 4

console.log('------Задание номер 4------')

const day = 3

switch (day) {
    case 1: {
        console.log('Пониделник')
    }
    case 2: {
        console.log('Вторник')
    }
    case 3: {
        console.log('Среда')
    }
    case 4 : {
        console.log('Четверг')
    }
    case 4 : {
        console.log('Четверг')
    }
    case 4 : {
        console.log('Четверг')
    }
    case 4 : {
        console.log('Четверг')
    }
}

//* Задание номер 5

console.log('------Задание номер 5------')

const temperature = 26 

if (temperature <= 15) {
    console.log('Холодно')
} else if (temperature <= 30) {
    console.log('Тепло')
} else {
    console.log('Горячо')
}

//* Задание номер 6

console.log('------Задание номер 6------')

const score = 50

score > 60 
    ? console.log("Сдал")
    : console.log("Не сдал")

//* Задание номер 7

console.log('------Задание номер 7------')

const num = 777

if (num % 2 == 0) {
    console.log('Четное число')
} else {
    console.log('Не четное число')
}

//* Задание номер 8

console.log('------Задание номер 8------')

const language = 'Pythone'

if (language == "JavaScript") {
    console.log("Поддерживается")
} else {
    console.log("Не поддерживается")
}

//* Задание номер 9

console.log('------Задание номер 9------')

const userRole = "wiewer"

if (userRole == "admin" || userRole || "editor" || userRole == "wiewer") {
    if (userRole == "admin" ) {
        console.log("Доступ разрешен")
    } else if (userRole == "editor") {
        console.log("Доступ ограничен")
    } else {
        console.log("Доступ запрещен")
    }
} else {
    console.log("Нарушитель")
}

//? Ну я типа сделал защиту от нарушителей 

//* Задание номер 10

console.log('------Задание номер 10------')

const a = 21
const b = 34
const c = 98

if (a > b && a ) {
    console.log(a,"a", "Больше всех")
} else if (b > a && b > c) {
    console.log(b,"b", "Больше всех")
} else {
    console.log(c, "c", "Больше всех")
}

//* Задание номер 11

console.log('------Задание номер 11------')

const fruit = 'Драконий фрукт'

if (fruit == 'Яблоко') {
    console.log('Красный')
} else if (fruit == 'Банан') {
    console.log('Желтый')
} else if (fruit == 'Апельсин') {
    console.log('Оранжевый')
} else {
    console.log('Другой цвет')
}

//* Задание номер 12

console.log('------Задание номер 12------')

const income = 40000

income <= 20000
    ?console.log('Низкий доход')
    :income <= 50000
        ?console.log('Средний доход')
        :income <= 80000
            ?console.log('Высокий доход')
            :console.log('Доход очень хороший')

//* Задание номер 13

console.log('------Задание номер 13------')

const grade = 'F'

switch (grade) {
    case 'A': {
        console.log('Отлично')
    } break
    case 'B': {
        console.log('Хорошо')
    } break
    case 'C': {
        console.log('Нормально')
    } break
    case 'D': {
        console.log('Низкая оценка')
    } break
    case 'F': {
        console.log('Ситуация очень херова для тебя')
    } break
}

//* Задание номер 14

console.log('------Задание номер 14------')

const password = 'hello_World'

if (password.length >= 8) {
    console.log('Пороль надежный')
} else {
    console.log('Пороль не надежный')
}


//* Задание номер 15

console.log('------Задание номер 15------')

const x = 5 
const y = 10 

x < y
    ?console.log('y больше x')
    :x > y
        ?console.log('x больше y')
        :console.log('x и y равны')

//* Задание номер 16

console.log('------Задание номер 16------')

const isRaining = false

if (isRaining == true) {
    console.log('Идет дожд')
} else {
    console.log('Дождя нет')
}

//* Задание номер 17

console.log('------Задание номер 17------')

const isLeapYear = true 

if (isLeapYear == true) {
    console.log('Год високосный')
} else {
    console.log('Год не високосный')
}

//* Задание номер 18

console.log('------Задание номер 18------')

const userInput = ''

if (userInput == '') {
    console.log('Строка пустая')
} else {
    console.log('Строка не пустая')
}

//* Задание номер 19

console.log('------Задание номер 19------')

const num01 = -9

if (num01 >= 1) {
    console.log('Число положительное')
} else if (num01 <= -1) {
    console.log(' Число отритсательное')
} else {
    console.log('Число равно нулю или находиться между 1 и -1')
}

//* Задание номер 20

console.log('------Задание номер 20------')

const dayOfWeek = 6

switch (dayOfWeek) {
    case 1: {
        console.log('Рабочий день')
    }break
    case 2: {
        console.log('Рабочий день')
    }break
    case 3: {
        console.log('Рабочий день')
    }break
    case 4: {
        console.log('Рабочий день')
    }break
    case 5: {
        console.log('Рабочий день')
    }break
    case 6: {
        console.log('Выходной')
    }break
    case 7: {
        console.log('Выходной')
    }break
}

//* Доп задание 1

console.log('------Доп задание 1------')

const int = 17

function isPrime(int) {

    if (int <= 1) {
        return false;
    }

    if (int <= 3) {
        return true; 
    }

    if (int % 2 === 0 || int % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= int; i += 6) {
        if (int % i === 0 || int % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(int)) {
    console.log(int + "Является простым числом");
} else {
    console.log(int + "Не является простым числом");
}

//* Доп задание 2

console.log('------Доп задание 2------')

const text = 'lorol'
const poll = 'lrol'

function rev(text) {
    const textn = text.replace(/\s/g, '').toLowerCase('')
    const textrev = textn.split('').reverse().join('')
    if (text == textrev) {
        return true
    }
}
if (rev(text)) {
    console.log('Евляется палиндромом')
} else {
    console.log('не евляется палиндромом')
}

//* Доп задание 3

console.log('------Доп задание 3------')

const examScore = 43
const homeworkScore = 39
const full = examScore + homeworkScore

if(full >= 90){
    console.log('A')
} else if (full >= 80 && full <= 89) {
    console.log('B')
} else if (full >= 70 && full <= 79) {
    console.log('C');
} else if (full >= 60 && full <= 69) {
    console.log('D');
} else {
    console.log('F');
}

//* Доп задание 4

console.log('------Доп задание 4------')

const balanse = 19300
const withdrawal = 10000

if (balanse >= withdrawal) {
    console.log('Средств достаточно');
} else {
    console.log('Недостаточно средств');
}

//* Доп задание 5

console.log('------Доп задание 5------')

const m = prompt('Номер месяца')
const g = prompt('Год')

if (m <= 3) {
    console.log('Зима'+g)
} else if (m <= 6) {
    console.log('Весна'+g);
} else if (m <= 9) {
    console.log('Лето'+g);
} else if (m <= 12) {
    console.log('Осень'+g);
}
