

const inputBox = document.querySelector('#task');
const displayTaskTag = document.querySelector('#displayTask');

document.querySelector('#addTask').addEventListener('click', ()=>{
    const newTask = inputBox.value;

    // create the individual todo
    const individualTaskContainer = document.createElement('div');
    const tempSpan = document.createElement('span');
    tempSpan.innerText = newTask;
    const delTask = document.createElement('button');
    delTask.textContent = 'Delete';
    delTask.addEventListener('click',(e)=>{
        individualTaskContainer.remove();
    })
    const markImportantBtn = document.createElement('button');
    markImportantBtn.textContent = 'Mark Important';
    markImportantBtn.addEventListener('click',(e)=>{
        individualTaskContainer.classList.toggle('markImportant');
    })
    individualTaskContainer.append(tempSpan);
    individualTaskContainer.append(delTask);
    individualTaskContainer.append(markImportantBtn)
    displayTaskTag.append(individualTaskContainer);

    inputBox.value = '';
})

localStorage.setItem('name','naman');