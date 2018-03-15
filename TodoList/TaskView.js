var controller = new TaskController();
carregarTasks();

function addTask(labelText, checked = false, id = null){
    if(labelText){
        var taskList = document.getElementById("taskList");
        var check = document.createElement("input");
        var label = document.createElement("label");
        
        var id = id != null ? id: controller.addTask(labelText, checked);
        
        check.type= "checkbox";
        check.id = id;
        check.value = id;
        check.checked = checked ? checked : false;
        check.onchange = function(){
            updateTask(check.checked, labelText, check.value); // value é o index na lista
            console.log("Atualizando");
        }
        
        label.htmlFor = check.id;
        label.appendChild(document.createTextNode(labelText));
        
        taskList.appendChild(check);
        taskList.appendChild(label);
        taskList.appendChild(document.createElement("br"));
    
        // limpa o input
        document.getElementById('newTaskInput').value = "";
    }
}

function updateTask(paramChecked, paramText, index) {
    console.log("Update called ", index, " - ", paramChecked);
    // updatedTask = controller.tasks[index];
    // updatedTask.checked = paramChecked;
    controller.updateTask(paramText, paramChecked, index);
    // console.log("Update: ", updatedTask);
}

function removerTask(index){
    controller.removerTask(index);
    document.getElementById(index).remove();
    // carregarTasks();
}

function carregarTasks(){
    var tarefas = controller.carregarTasks();
    tarefas.forEach(function(element) {
        this.addTask(element.descricao, element.checked, element.id);
    });
}