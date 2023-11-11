// Создайте объект "Пользователь" с полями "имя" и "возраст". Напишите метод в объекте, который будет выводить информацию о пользователе в консоль, используя this.

const user = {
    name: 'User',
    age: 18
}
const { name, age } = user
console.log(name, age)

//Создайте объект "Автомобиль" с полем "марка". Напишите метод, который будет возвращать строку "Моя машина - [марка]" с использованием this.

const car = {
    brend: 'BMW M9',
    logBrendCar: function () {
        console.log(`My car - ${this.brend}`);
    }
}
car.logBrendCar()

// Создайте объект "Круг" с полем "радиус". Добавьте метод, который будет возвращать площадь круга, используя this.

const krug = {
    radius: 20,
    logPloshadKruga: function () {
        console.log('площадь круга:', this.radius * 3.14);
    }
}

krug.logPloshadKruga()

//Создайте объект "Калькулятор" с полями "число1" и "число2". Добавьте методы для сложения и умножения чисел, используя this.



const Калькулятор = {
    число1: 10,
    число2: 10,
    kalkulytor: function (wat) {
        if (wat == '*') {
            console.log(this.число1 * this.число2);
        } else if (wat == '+') {
            console.log(this.число1 + this.число2);
        }
    }
}

Калькулятор.kalkulytor('+')

// Создайте функцию "День недели", которая будет возвращать текущий день недели с использованием this.
function logDayWeek() {
const dni = {
    fullDay: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскрисение', 'Понидельник'],
    dayweek: function () {
        let res = new Date().getDate()
        console.log(this.fullDay[res]);
    }
}
dni.dayweek()
}
logDayWeek()

// Создайте объект "Продукт" с полями "название" и "цена". Добавьте метод, который будет выводить информацию о продукте вида "Продукт [название] стоит [цена] долларов", используя this.

const Продукт = {
    название: 'Чипсы Лейс 150грамов',
    цена: 190,
    показатьИнформациюОПродукте: function () {
        console.log(`Продукт: ${this.название} Стоит: ${this.цена} сом`);
    }
}

Продукт.показатьИнформациюОПродукте()

const prodykts = {
    name: 'Чипсы Лейс 150грамов',
    price: 190,
    logInfo: function () {
        console.log(`Продукт: ${this.name} Стоит: ${this.price} сом`);
    }
}

prodykts.logInfo()

// Создайте объект "Животное" с полем "имя". Добавьте метод, который будет издавать звук, связанный с этим животным, вида "[имя] издает звук [звук]", используя this.

const Animals = {
    name: 'Cat',
    sound: 'may may',
    logNameSound: function () {
        console.log(`Животное: ${this.name} Издает звук ${this.sound}`);
    }
}
Animals.logNameSound()

// Создайте свой reduce, изучите sort и также создайте свой sort

// mySort и myReduce - сделайте наиболее похожий функционал, учитывая даже ошибки

Array.prototype.myReduce = function (callBack, initial = 0) {
    if(this.length === 0) throw new Error("Массив не может быт пустым бечара")
    let result = initial
    for (let i = 0; i < this.length; i++) {
        callBack(result, this[i], i, this)
        result += this[i]
    }
    return result
}

const array01 = [1, 2, 3, 4, 5]

const resultPro = array01.myReduce((prev, cur, i, array) => {
    console.log(array, i);
    return  prev += cur
}, 10)
console.log(resultPro);

//sort ----------------------- //

function mySort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return mySort(left).concat(pivot, mySort(right));
}

const unsortedArray = ['c', 'b', 'a']
const sortedArray = mySort(unsortedArray)
console.log(sortedArray)
