// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}


