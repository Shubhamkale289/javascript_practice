const inputBox = document.querySelector('#task');
const displayTaskTag = document.querySelector('#displayTask');




function addTodoListInLocalStorage(newTask){
    const localStorageTodolist = JSON.parse(localStorage.getItem('todoList')) || [];
    const newTodoObj = {
        name: newTask
    }
    localStorageTodolist.push(newTodoObj);
    localStorage.setItem('todoList', JSON.stringify(localStorageTodolist));
}

function removeTodoListFromLocalStorage(taskToBeDeleted){
    let localStorageTodolist = JSON.parse(localStorage.getItem('todoList')) || [];
    localStorageTodolist = localStorageTodolist.filter((todo)=>{
        return todo.name !== taskToBeDeleted
    })
    console.log(localStorageTodolist);
    localStorage.setItem('todoList', JSON.stringify(localStorageTodolist)); 
}

function addTaskInDom(task){
    const individualTaskContainer = document.createElement('div');
    const tempSpan = document.createElement('span');
    tempSpan.innerText = task;

    const delTask = document.createElement('button');
    delTask.textContent = 'Delete';
    delTask.addEventListener('click',(e)=>{
        removeTodoListFromLocalStorage(task)

        individualTaskContainer.remove();
    })
    // delete from local storage

    const markImportantBtn = document.createElement('button');
    markImportantBtn.textContent = 'Mark Important';
    markImportantBtn.addEventListener('click',(e)=>{
        individualTaskContainer.classList.toggle('markImportant');
    })
    individualTaskContainer.append(tempSpan);
    individualTaskContainer.append(delTask);
    individualTaskContainer.append(markImportantBtn)
    displayTaskTag.append(individualTaskContainer);
}
document.querySelector('#addTask').addEventListener('click', ()=>{
    const newTask = inputBox.value;

    // create the individual todo
    const individualTaskContainer = document.createElement('div');
    const tempSpan = document.createElement('span');
    tempSpan.innerText = newTask;

    // Append in local storage
    addTodoListInLocalStorage(newTask);


    inputBox.value = '';
})

// localStorage.setItem('name','naman'); //create
// localStorage.setItem('age','10'); // create

// localStorage.setItem('name','shubham'); // update

// const newName = localStorage.getItem('name'); 
// console.log(newName) // read
 
// localStorage.removeItem('name') // delete
// localStorage.removeItem('age') // delete
// localStorage.setItem('user',JSON.stringify({
//         '`name':'naman',
//         'age': 10
// })
// )

document.querySelector().addEventListenerx