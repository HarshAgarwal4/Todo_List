let input = document.getElementById("input")
let main = document.querySelector(".main")

function createNew() {
    let task = input.value
    if (task == '') {
        alert("task cannot be empty")
    }
    else {
        let html = `<div class="task">
        <div class="do">${task}</div>
        <div class="btn1">
        <button class="done">Done</button>
        <button class="remove">Remove</button>
        </div>`
        main.insertAdjacentHTML("beforeend", html)
        input.value = ''
        let newTask = main.lastElementChild
        newTask.querySelector(".done").addEventListener("click", () => {
            if (!newTask.hasAttribute("style")) {
                newTask.setAttribute("style", "box-shadow: 0px 0px 10px rgb(39, 230, 39); background: rgb(39, 230, 39);");
                newTask.querySelector(".done").innerHTML = "undo"
            } else {
                newTask.removeAttribute("style");
                newTask.querySelector(".done").innerHTML = "Done"
            }
            saveData()
        })
        newTask.querySelector(".remove").addEventListener("click", () => {
            newTask.remove();
            saveData()
        });
    }
    saveData()
}

function saveData() {
    localStorage.setItem('c' , main.innerHTML)
}

function loadData() {
    main.innerHTML = localStorage.getItem('c')
}

window.addEventListener('load' , () => {
    loadData()
    let tasks = main.querySelectorAll(".task")
    console.log(tasks);
    
    tasks.forEach((e) => {
        e.querySelector(".done").addEventListener("click", () => {
            if (!e.hasAttribute("style")) {
                e.setAttribute("style", "box-shadow: 0px 0px 10px rgb(39, 230, 39); background: rgb(39, 230, 39);");
                e.querySelector(".done").innerHTML = "undo"
            } else {
                e.removeAttribute("style");
                e.querySelector(".done").innerHTML = "Done"
            }
            saveData()
        })
        e.querySelector(".remove").addEventListener("click", () => {
            e.remove();
            saveData()
        });
    })
})

function removeAll() {
    localStorage.clear()
    loadData()
}

