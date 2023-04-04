const form = document.getElementById("form")
const input = document.getElementById("input")      //needed variables
const todosUL = document.getElementById("todos")
const todos= JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}
form.addEventListener('submit', (e) =>{
    e.preventDefault()                  

     addTodo()
})

function addTodo(todo){
    let todoText = input.value          //receives input and creates variable for it


if(todo){
    todoText = todo.text
}
if(todoText){
    const todoEl = document.createElement('li')    
    if(todo && todo.completed){
        todoEl.classList.add('completed')       //for list item, turn to complete 
    }
    todoEl.innerText = todoText
    
    todoEl.addEventListener('click', () => todoEl.
    classList.toggle('completed'))

    todoEl.addEventListener('contextmenu', function (e) {
            e.preventDefault()

            todoEl.remove()
            updateLS()              //delete upon request
        })

    todosUL.appendChild(todoEl)

    input.value =''
    updateLS()
}

}
function updateLS(){
    todoEl = document.querySelectorAll('li')        //save to local storage function
    
    const todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains
            ('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}