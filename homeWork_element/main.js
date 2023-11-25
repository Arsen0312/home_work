// Всем <h3> поставьте текст '!!!'.

const allH3 = document.querySelectorAll("h3")
allH3.forEach(elem => {elem.innerText = "!!!"})
// Всем <h3> сделайте текст зеленого цвета.

allH3.forEach(elem => {elem.style.color = 'green'})

// Создайте маркированный список. При помощи цикла добавьте в маркированный список 30 li - элементов с текстом:

const ul = document.createElement("ul")

for (i = 0;i < 30;i++) {
    const li = document.createElement("li")
    li.innerText = `${i + 1} - овечка`
    ul.append(li)
}

document.body.append(ul)

// В css создайте класс .active в котором пропишите цвет текста blue. Добавьте всем span элементам класс active через document.getElementsByTagName.

const span = document.getElementsByTagName("span")

for (i = 0;i < span.length;i++) {
    span[i].classList.add("active")
}

// Найдите все HTML-теги strong и окрасьте их в зеленый цвет.

const strong = document.querySelectorAll("strong")

strong.forEach(elem => {
    elem.style.color = 'green'
})

// Найдите все HTML-теги em и добавьте им класс .selected.

const em = document.querySelectorAll("em")

em.forEach(elem => {
    elem.classList.add('selected')
})

// Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им класс .selected

const mark = document.querySelectorAll("mark")

mark.forEach(elem => {
    elem.classList.add('selected')
})

// Найдите все гиперссылки и удалите у них подчеркивания.

const a = document.querySelectorAll('a')

a.forEach(elem => {
    elem.style.textDecoration = "none"
})

// Переключите HTML-теги strong с классом .some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.

const strongDeleteOrAda = document.querySelectorAll('strong')

strongDeleteOrAda.forEach(elem => {
    elem.classList.toggle("some")
})

// Среди набора элементов с классом .row, удалите этот класс у второго элемента.

const row = document.getElementsByClassName('row')

// console.log(row.length)
// row[1].classList.remove('row')
// console.log(row.length)


// Выведите CSS-свойство color у второй гиперсылки в тексте(при помощи метода getComputedStyle())

const a2 = document.getElementsByTagName("a")
const style = window.getComputedStyle(a2[1])
console.log(style.color)

// Задайте третьему row дополнительный класс .third .

const row3 = document.getElementsByClassName("row")
row3[2].classList.add('third')

// Обратитесь к элементу с классом .row-inner и задайте ему цвет текста розовый.

const row_inner = document.getElementsByClassName("row-inner")
console.log(row_inner[0]);
row_inner[0].style.color = 'pink'

// обавтье элемент input type="text" с классом .input внутри div с классом .row-input.

const input = document.createElement("input")

input.setAttribute("type", "text")
input.setAttribute("class", "input")

const divWithClass = document.getElementsByClassName("row-input")

divWithClass[0].append(input)

document.body.append(divWithClass)
console.log(divWithClass)

// Сделайте фон желтым у нового элемента input.

input.style.backgroundColor = 'yellow'

// Добавтье placeholder этому элементу input с классом .input.

input.setAttribute("placeholder", "It's input")
input.style.color = "black"

// Обратитесь к элементу с классом .row-outer и задайте ему размер шрифта 20px.

const elemWithClassRow_Outer = document.getElementsByClassName("row-outer")

elemWithClassRow_Outer[0].style.fontSize = "20px"
console.log(elemWithClassRow_Outer[0])

// Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least"

const elemWithClassLast = document.getElementsByClassName("last")

elemWithClassLast[0].innerText = "Last but not least"

console.log(elemWithClassLast[0])

// Сделайте последний текст, который вы добавили, жирным.
elemWithClassLast[0].style.fontWeight = "900"

