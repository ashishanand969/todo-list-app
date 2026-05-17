document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // Load tasks from localStorage on page load
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTaskToDOM(task));

    // Add a task and save it in localStorage
    document.getElementById("todo-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const task = todoInput.value.trim();
        if (task) {
            addTaskToDOM(task);
            saveTask(task);
            todoInput.value = "";
        }
    });

    function addTaskToDOM(task) {
        const li = document.createElement("li");
        li.textContent = task;
        todoList.appendChild(li);
    }

    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});