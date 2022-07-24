const taskInput = document.querySelector('#task__input');
const btnTaskAdd = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');
let savedTaskArray = [];

function fillSavedTasks() {
  savedTaskArray = JSON.parse(localStorage.getItem('savedTaskArray'));
  savedTaskArray.forEach(savedTask => {
    createTask(savedTask);
  });
}

function createTask(taskText) {
  //create task
  const taskNode = document.createElement('div');
  taskList.appendChild(taskNode);
  taskNode.outerHTML = `<div class="task"><div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a></div>`;
}

function removeTask(taskElement) {
  //remove task from local storage
  const taskText = taskElement.firstChild.textContent;
  const taskIndex = savedTaskArray.findIndex(item => item === taskText);
  savedTaskArray.splice(taskIndex, 1);
  localStorage.setItem('savedTaskArray', JSON.stringify(savedTaskArray));
  //remove task
  taskElement.remove();
}

if (localStorage.getItem('savedTaskArray')) {
  fillSavedTasks();
}

//activate remove buttons
taskList.addEventListener('click', e => {
  if (e.target.classList.contains('task__remove')) {
    e.preventDefault();
    removeTask(e.target.parentElement);
  } 
})

//add task from input
btnTaskAdd.addEventListener('click', e => {
  e.preventDefault();
  if (taskInput.value !== '') {
    createTask(taskInput.value);
    //save task to local storage
    savedTaskArray.push(taskInput.value);
    localStorage.setItem('savedTaskArray', JSON.stringify(savedTaskArray));
  }
  //clear input
  taskInput.value = '';
});