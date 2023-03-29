/*const addButton = document.querySelector('#add-button');
const taskForm = document.querySelector('.task-form');
const taskNameInput = document.querySelector('#task-name');
const saveButton = document.querySelector('#save-button');
const tasksDiv = document.querySelector('.tasks');

addButton.addEventListener('click', () => {
  taskForm.style.display = 'flex';
  taskNameInput.focus();
});

saveButton.addEventListener('click', () => {
  const taskName = taskNameInput.value.trim();
  if (taskName) {
    addTask(taskName)
    taskNameInput.value = '';
    taskForm.style.display = 'none';
  }
});*/

/*----- 1 function addTask(taskName) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  const taskContentDiv = document.createElement('div');
  taskContentDiv.classList.add('task-content');
  taskContentDiv.textContent = taskName;
  taskDiv.appendChild(taskContentDiv);
  taskDiv.addEventListener('mouseenter', () => {
    taskDiv.classList.add('hovered');
  });
  taskDiv.addEventListener('mouseleave', () => {
    taskDiv.classList.remove('hovered');
  });
  const confirmButton = document.createElement('button');
  confirmButton.classList.add('confirm-button');
  confirmButton.innerHTML = '&#10003;';
  confirmButton.addEventListener('click', () => {
    taskDiv.remove();
  });
  taskDiv.appendChild(confirmButton);
  tasksDiv.appendChild(taskDiv);
} ------ 1 
*/

/*
function addTask(taskName) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  
  const taskTitle = document.createElement('h2');
  taskTitle.classList.add('task-title');
  taskTitle.textContent = taskName;
  taskDiv.appendChild(taskTitle);
  
  const taskContentDiv = document.createElement('div');
  taskContentDiv.classList.add('task-content');
  taskContentDiv.textContent = taskName;
  taskDiv.appendChild(taskContentDiv);
  
  taskDiv.addEventListener('mouseenter', () => {
    taskDiv.classList.add('hovered');
  });
  
  taskDiv.addEventListener('mouseleave', () => {
    taskDiv.classList.remove('hovered');
  });
  
  const confirmButton = document.createElement('button');
  confirmButton.classList.add('confirm-button');
  confirmButton.innerHTML = '&#10003;';
  
  confirmButton.addEventListener('click', () => {
    taskDiv.remove();
  });
  
  taskDiv.appendChild(confirmButton);
  tasksDiv.appendChild(taskDiv);
}é esse*/

const addButton = document.querySelector('#add-button');
const taskForm = document.querySelector('.task-form');
const taskNameInput = document.querySelector('#task-name');
const taskTitleInput = document.querySelector('#task-title');
const saveButton = document.querySelector('#save-button');
const tasksDiv = document.querySelector('.tasks');

addButton.addEventListener('click', () => {
  taskForm.style.display = 'flex';
  taskTitleInput.focus();
});

saveButton.addEventListener('click', () => {
  const taskTitle = taskTitleInput.value.trim();
  const taskName = taskNameInput.value.trim();
  if (taskTitle && taskName) {
    addTask(taskTitle, taskName);
    taskTitleInput.value = '';
    taskNameInput.value = '';
    taskForm.style.display = 'none';
  }
});

function addTask(taskTitle, taskName) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  const taskTitleDiv = document.createElement('div');
  taskTitleDiv.classList.add('task-title');
  taskTitleDiv.textContent = taskTitle;
  taskDiv.appendChild(taskTitleDiv);
  const taskContentDiv = document.createElement('div');
  taskContentDiv.classList.add('task-content');
  taskContentDiv.textContent = taskName;
  taskDiv.appendChild(taskContentDiv);
  taskDiv.addEventListener('mouseenter', () => {
    taskDiv.classList.add('hovered');
  });
  taskDiv.addEventListener('mouseleave', () => {
    taskDiv.classList.remove('hovered');
  });
  const confirmButton = document.createElement('button');
  confirmButton.classList.add('confirm-button');
  confirmButton.innerHTML = '&#10003;';
  confirmButton.addEventListener('click', () => {
    taskDiv.remove();
  });
  taskDiv.appendChild(confirmButton);
  tasksDiv.appendChild(taskDiv);
}


