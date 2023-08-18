let taskList = [];

const taskForm = document.querySelector("#task-form");
const taskTable = document.querySelector("#task-table");
const taskListContainer = document.querySelector("#task-list");

taskForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const taskDescription = document.querySelector("#task-description").value;
    const taskAuthor = document.querySelector("#task-author").value;
    const taskDepartment = document.querySelector("#task-department").value;
    const taskImportance = parseInt(document.querySelector("#task-importance").value);
    const taskValue = document.querySelector("#task-value").value;
    const taskDuration = document.querySelector("#task-duration").value;

    const task = {
        description: taskDescription,
        author: taskAuthor,
        department: taskDepartment,
        importance: taskImportance,
        value: taskValue,
        duration: taskDuration
    };

    taskList.push(task);
    updateTaskTable();
    taskForm.reset();
});

function updateTaskTable() {
    taskListContainer.innerHTML = "";

    taskList.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.description}</td>
            <td>${task.author}</td>
            <td>${task.department}</td>
            <td>${task.importance}</td>
            <td>${task.value}</td>
            <td>${task.duration}</td>
            <td><button onclick="deleteTask(${index})">Excluir</button></td>
        `;
        taskListContainer.appendChild(row);
    });
}

function deleteTask(index) {
    taskList.splice(index, 1);
    updateTaskTable();
}
