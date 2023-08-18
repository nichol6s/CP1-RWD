let listaTarefas = [];

const botaoAddTarefa = document.querySelector("#idButton");

botaoAddTarefa.addEventListener("click",( evt )=>{

    evt.preventDefault();

    const tarefaInput = document.querySelector("#idTask");

    listaTarefas.push(tarefaInput.value)

    const listaTarefasUL = document.querySelector("#task-list");

    let li = document.createElement("li");

    li.textContent = tarefaInput.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " X ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        
        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
      
        let indice = listaTarefas.indexOf(conteudoDoLi[0])

        
        listaTarefas.splice(indice,1);
        
        
        evt.target.parentNode.remove();

        console.log(listaTarefas);
    });

    console.log(listaTarefas);
    tarefaInput.value = "";
    
});