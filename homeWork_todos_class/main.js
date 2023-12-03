//* CRUD =  C - CREATE; R - READ; U - UPTADE; D - DELITE


const wrapper = document.getElementById("wpr")
const input = document.createElement("input")
const boxForIptBtn = document.createElement("div")
const btn = document.createElement("button")
const ul = document.createElement("ul")

const boxForUl = document.createElement("div")

input.setAttribute("id", "input")
btn.setAttribute("id", "btn")
boxForUl.setAttribute("id", "boxForUl")

boxForIptBtn.setAttribute("id", "box")
btn.innerText = "Add"

let id = 0
let data = JSON.parse(localStorage.getItem("data")) || []
let todoText = ""

class todos {
    creat(text) {
        data.unshift({
            title: text,
            zadacha: false,
            id: Date.now()
        })
        localStorage.setItem("data", JSON.stringify(data))
    }

    render(data) {
        ul.innerText = ""
        localStorage.setItem("data", JSON.stringify(data))
        data.forEach(danye => {
            const li = document.createElement("li")
            li.innerHTML = `
            <input class='inp' id=${danye.id} readonly value=${danye.title}>
            <input type="checkbox" class="chek" id="${danye.id}" ${danye.zadacha ? "checked": ""}/>
            <button class="delete" id="${danye.id}">delete</button>
            `
            ul.append(li)
        })
    }

    read(event) {
        if(event.target.closest('.inp')){
            const input = event.target
            console.log(input.value)
            input.removeAttribute(`readonly`)
            const id = +event.target.getAttribute("id")
            input.addEventListener("mouseout", ()=> {
                data.filter(elem => elem.id === id ? elem.title = input.value:elem)
                console.log(data)
                localStorage.setItem("data", JSON.stringify(data))
                todoApp.render(data)
            })
        }
    }

    delite(target) {
        if(target.classList.contains('delete')){
            console.log(+target.getAttribute("id"))
            data = data.filter(elem => elem.id !== +target.getAttribute("id"))
            localStorage.setItem("data", JSON.stringify(data))
            todoApp.render(data)
        }
    }
}

const todoApp = new todos()
btn.addEventListener("click", () => {
    if (input.value.trim().length > 0) {
        todoApp.creat(input.value)
        input.value = ""
        input.focus()
        todoApp.render(data)
    }
})

boxForUl.append(ul)
boxForIptBtn.append(boxForUl)
boxForIptBtn.append(input, btn)
wrapper.append(boxForIptBtn)
document.body.append(wrapper)

document.addEventListener(`dblclick`, (event) => {
    todoApp.read(event)
})

document.addEventListener('click', ({target}) => {
    todoApp.delite(target)
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("chek")){
        data.forEach(elem => {
            if(elem.id === +event.target.getAttribute("id")){
                 elem.zadacha = event.target.checked 
                }
        })
        localStorage.setItem("data", JSON.stringify(data))
        todoApp.render(data)
    }
})

todoApp.render(data)