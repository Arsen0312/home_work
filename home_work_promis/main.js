const promis = new Promise((onResolve, onReject) => {
    setTimeout(() => {
        onResolve("Promise выполнено")
    }, 2000)


})
promis.then(respons => { console.log(respons) })


// Обработка ошибок: Создайте Promise, который завершается с ошибкой через 3 секунды. Затем обработайте ошибку с использованием метода .catch() и выведите сообщение об ошибке в консоль.


const promisError = new Promise ((onResolve, onReject) => {
    setTimeout(() => {
        onReject("Error")
    }, 3000)
})

promisError.catch(error => console.log(error))

// Promise с условием: Создайте функцию, которая возвращает Promise. Promise должен выполниться успешно, если переданное в функцию число четное, и завершиться с ошибкой, если число нечетное. Обработайте Promise и выведите результат в консоль.

function getPromisIf(num) {
    const promisIf = new Promise ((onReject, onResolve) => {
        if (num % 2 === 0) {
            setTimeout(() => {
                onResolve('Успешно')
            })
        } else {
            setTimeout(() => {
                onReject('Error GG')
            })
        }
    })
    promisIf.then(response => console.log(response)).catch(error => console.log(error))
}

getPromisIf(3)

// Асинхронный запрос к серверу: Используйте fetch для выполнения асинхронного GET-запроса к какому-либо публичному API (например, JSONPlaceholder). Обработайте полученные данные в виде Promise и выведите их в консоль.

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(res => console.log(res))

