var todoInput=document.querySelector(".todo-input")
var todoButton=document.querySelector(".todo-button")
var todoList=document.querySelector(".todo-list")
var filterOption=document.querySelector(".filter-todo")
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);



function addTodo(event){
    event.preventDefault();
    
    var todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    var newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    var completeButton=document.createElement('button');
    
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    var trashButton=document.createElement('button');
    
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";
}

function deleteCheck(e){    
    var item=e.target;

    if(item.classList[0]==="trash-btn"){
        var todo=item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
       // todo.remove();
    }

    if(item.classList[0]==="complete-btn"){
        var tod=item.parentElement;
        tod.classList.toggle("completed");
    }



}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos.length)
    for(var i = 1;i<todos.length;i++){
        //console.log(i,e.target.value)
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;

            case "completed":
                console.log('dddd')
                if (todos[i].classList.contains("completed")) {
                    
                    todos[i].style.display = "flex";

                } 
                
                else {
                    todos[i].style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todos[i].classList.contains("completed")) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
      }
    }
    // todos.forEach(function(todo) {
    //     console.log('d')
    
  }





