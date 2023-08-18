//Declarando o array "taskList" que vai armazenar as tarefas
let taskList = [];

//Aqui estamos selecionando os elementos html pelo seu Id
const taskForm = document.querySelector("#task-form"); //Representa o formulário de adição de tarefas
const taskTable = document.querySelector("#task-table"); //Tabela que irá mostrar as tarefas
const taskListContainer = document.querySelector("#task-list"); //Corpo da tabela onde as linhas de tarefa serão adicionadas.

taskForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    //Aqui estamos coletando os valores dos campos do formulario
    const taskDescription = document.querySelector("#task-description").value;
    const taskAuthor = document.querySelector("#task-author").value;
    const taskDepartment = document.querySelector("#task-department").value;
    const taskImportance = parseInt(document.querySelector("#task-importance").value);
    const taskValue = document.querySelector("#task-value").value;
    const taskDuration = document.querySelector("#task-duration").value;

    //Esse task vai ser adicionado ao array
    const task = {
        description: taskDescription,
        author: taskAuthor,
        department: taskDepartment,
        importance: taskImportance,
        value: taskValue,
        duration: taskDuration
    };

    //A função update é chamada pra atualizar a tabela de tarefas na interface
    taskList.push(task);
    updateTaskTable();
    taskForm.reset();
});

function updateTaskTable() {
    taskListContainer.innerHTML = "";
    
    //Criando um forEach pra cada elemento do Array
    taskList.forEach((task, index) => {
        const row = document.createElement("tr"); //Criando uma constante pra criar a tag la no html
        //Aqui a gnt pega essa const e com cada elemento do Array a gnt cria as tags
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
