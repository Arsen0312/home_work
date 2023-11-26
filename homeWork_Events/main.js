// По нажатию клавиш меняйте цвет заднего фон - body
// R - red
// G - green;
// B - blue;
// W - white;
// SHIFT + B - black
// SHIFT + G - gray;

const colorobj = {
    "R":"red",
    "G":"green",
    "B":"blue",
    "W":"white"
}

let oldKey = ""

document.addEventListener('keydown', (event)=>{
    console.log(event.key)
    document.body.style.backgroundColor = colorobj[event.key.toLocaleUpperCase()]
    document.body.style.backgroundColor = oldKey === 'Shift' && event.key === "B"? "black" : oldKey === 'Shift' && event.key === "G"? "gray":oldKey = event.key 


})

// Создайте переменную let i=0, по нажатию на кнопку выводите в консоль переменную i и увеличивайте её в 2 раза;

let i = 1

const btn = document.getElementById('btn')
const clearBtn = document.getElementById('clearContecnt')
const p = document.getElementById('paragraf')

btn.addEventListener('click', () => {
    p.innerText = i *= 2
})

clearBtn.addEventListener('click', () => {
    clear()
    i = 1
})

function clear() {
    p.innerText = ''
}

// Вставьте картинку и кнопку в html. При нажатии на кнопку скройте картинку путем затухания до прозрачного состояния.

function opacity() {
const image = document.getElementById("myImage");
image.style.opacity = 0;
}

const imgBtn = document.getElementById('imgBtn')

const img = document.getElementById('myImage')
img.style = 'transition: opacity 1s ease-in-out; width: 25%; height: 60%;'

const imgBtnReverse = document.getElementById('imgBtnReverse')

imgBtnReverse.addEventListener('click', () => {
    const img = document.getElementById('myImage')
    img.style = 'transition: opacity 1s ease-in-out; width: 25%; height: 60%;'
})

// Создайте h1 с классом "output-text". Создайте input type="text" с классом "input-text". При каждом изменении ".input-text" меняйте содержимое ".output-text" на значение из ".input-text".

const h1 = document.getElementsByClassName('output-text')[0]
const input = document.getElementsByClassName('input-text')[0]

input.addEventListener('input', ({target:{value}}) => {
    console.log(value)
    h1.innerText = value
})

// Создайте div размером 500px * 500px, по нажатию на неё выводите в консоль позицию места куда вы нажали относительно div- а;

const div = document.getElementById('div')
const p2 = document.getElementById("pForKor")

div.addEventListener('click', (event) => {
    const y = event.clientY - div.getBoundingClientRect().top
    const x = event.clientX - div.getBoundingClientRect().left

    p2.innerText = `Y: ${y} 'X:', ${x}`
    console.log('Y:', y, 'X:', x)
})

// Создайте input type color. При изменении инпута меняйте цвет заднего фона body на значение из этого инпута

const colorInout = document.getElementById('colorInout')

colorInout.addEventListener('input', () => {
    console.log(colorInout.value)
    document.body.style.backgroundColor = colorInout.value
})

// Создайте гоночную игру с двумя машинами. Когда кнопка старта нажата, две машины должны двигаться по экрану, пока одна из них не окажется в другом конце экрана. Когда один из блоков дойдет до конца - вы должны поздравить победителя при помощи модального окна.

const carOne = document.getElementById("carOne")
const carTwo = document.getElementById("carTwo")
const start = document.getElementById("start")
const modalWin = document.getElementById("modal-window")
const btnX = document.getElementById("X")
const red = document.getElementById('red')
const blue = document.getElementById('blue')


start.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        carOne.classList.add("carOne_win")
        carTwo.classList.add("carTwo_no_win")
        blue.classList.add("win_blue_Dis_none")
        red.classList.remove("win_red_Dis_none")
        setTimeout(() => {
            modalWin.classList.add('activeModal')
            carOne.classList.remove("carOne_win")
            carTwo.classList.remove("carTwo_no_win")
        }, 6000)
    } else {
        carOne.classList.add("carTwo_no_win")
        carTwo.classList.add("carTwo_win")
        red.classList.add("win_red_Dis_none")
        blue.classList.remove("win_blue_Dis_none")
        setTimeout(() => {
            modalWin.classList.add('activeModal')
            carOne.classList.remove("carTwo_no_win")
            carTwo.classList.remove("carTwo_win")
        }, 6000)
    }
})

btnX.addEventListener('click', () => {
    modalWin.classList.remove('activeModal')
})

// Создайте скрипт, реализующий игру Крестики-нолики http://htmllab.ru/krestiki-noliki/
let player = 0;

const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

document.addEventListener("click", (event) => {
    const kletka = event.target;
    if (kletka.classList.contains("kletki")) {
        player += 1;
        if (kletka.textContent.length === 0) {
            console.log(player % 2);
            if (player % 2 === 0) {
                kletka.innerText = "O";
            } else {
                kletka.innerText = "X";
            }
        }
    }

    winGame();
});

const modalKr = document.getElementById("modalWinForGame");

function winGame() {
    win.forEach(patern => {
        const one = document.getElementById(patern[0]);
        const two = document.getElementById(patern[1]);
        const three = document.getElementById(patern[2]);

        if (one.textContent.length === 1 && two.textContent.length === 1 && three.textContent.length === 1) {
            if (one.textContent === two.textContent) {
                if (three.textContent === two.textContent) {
                    console.log(`Виграл ${one.textContent}`)
                    modalKr.classList.add("winKr")
                    XXX.classList.add("X")
                    XXX.classList.remove("poz1")
                    poz.classList.remove("poz1")
                    poz.classList.add("poz")
                    X.classList.remove("poz1")
                    X.classList.add("X")
                
                    
                    win.forEach(elem => {
                        document.getElementById(elem[0]).textContent = ""
                        document.getElementById(elem[1]).textContent = ""
                        document.getElementById(elem[2]).textContent = "" })
                }
            }
        }
    })
}

const poz = document.getElementById("poz")
const X = document.getElementById("X")
const XXX = document.getElementById("XXX")

XXX.addEventListener("click", ()=> {
    poz.classList.add("poz1")
    poz.classList.remove("poz")
    X.classList.add("poz1")
    X.classList.remove("poz")
    modalKr.classList.remove("winKr")
    XXX.classList.remove("X")
    XXX.classList.add("poz1")
    player = 0

})

