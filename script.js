function addTask() {
  const task = document.getElementById('new-task').value;
  const tasksElement = document.getElementById('tasks');
  const newTask = document.createElement('div');
  newTask.textContent = task;
  newTask.style.marginBottom = '10px';
  newTask.style.backgroundColor = '#e0f7fa';
  tasksElement.appendChild(newTask);
  document.getElementById('new-task').value = '';
}
