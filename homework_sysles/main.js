// // Задание 1

// for (let number = 2; number <= 50; number++) {
//     let chek = true
//     for (let i = 2;i < number; i++) {
//         if (number % i === 0) {
//             chek = false
//             break
//         }
//     }
//     if (chek) {
//         console.log(number);
//     }
// }

// // Задание 2

// const userNum = +prompt('Ведите чесло до которого вы хотите увидеть числа')
// for (let i = 1;i <= userNum; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         console.log(i);
//     }
// }

// // Задание 3

// for (let i = 10;i >= 1; i--) {
//     console.log(i);
// }

// // Задание 4

// const userNum = +prompt('Num')
// let result = 0
// for (let i = 0;i <= userNum;i++) {
//     result += i
// }
// console.log(result);

// // Задание 5

// let result = 0
// for (let i = 0;i <= 10;i++) {
//     result = i * 7
//     console.log(i+" * 7 = "+result);
// }

// // Задание 6

// const userNum = +prompt('Num')
// let result = 0
// for (let i = 0;i <= userNum;i++) {
//     result += i
// }
// console.log(result);

// // Задание 7


// // Доп задание 

const romanNumerals = {
    C: 100,
    IC: 90,
    L: 50,
    IL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

let result = ''
let num = 98

for(const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
        result += key
        num -= romanNumerals[key]
    }
}

console.log(result)


