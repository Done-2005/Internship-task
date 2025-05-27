const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
});

