const addButton = document.querySelector('#add-button');
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
});

function addTask(taskName) {
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
}

