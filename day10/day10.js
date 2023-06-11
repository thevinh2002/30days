var input = document.querySelector('.input');
var button = document.querySelector('.add');
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let value = input.value.trim()
    if(value){
       addElement({text: value})
       saveTodolist()
    }
    
    input.value =''
})


function addElement(todo){
    var li = document.createElement('li')
    li.innerHTML =`    
                    <span>${todo.text}</span>
                    <i class='bx bx-trash' ></i>
    `
    if(todo.status === 'completed'){
        li.setAttribute('class', 'completed')
       
    }

    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        saveTodolist()
    })

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
        saveTodolist()
    })
    todos.appendChild(li)
}


function saveTodolist(){
    let todolist = document.querySelectorAll('li')
    let todostore = []
    todolist.forEach(function(item){
        let text = item.querySelector('span').innerHTML
        let status = item.getAttribute('class')

        todostore.push({
            text:text,
            status:status
        })
    })
    localStorage.setItem('todolist',JSON.stringify(todostore))
}
function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function(item){
        addElement(item);
    })
}
init()