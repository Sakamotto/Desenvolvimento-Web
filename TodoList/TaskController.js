var repository = new TaskRepository();

function TaskController(){
    this.tasks = new Array();

    this.addTask = function(descricao){
        var id = this.tasks.length;
        var tarefa = new TaskJson(descricao, false, id);
        this.tasks.push(tarefa);
        
        repository.salvar(this.tasks);
        
        return id;
    }

    this.removeTask = function(index){
        if(index){
            console.log("Remover: ", index);
            repository.removeTask(index);
            this.tasks.splice(index, 1);            
        }
    }

    this.updateTask = function(descricao, checked, index){
        // var tarefas = repository.carregarTasks();
        var novaTarefa = new TaskJson(descricao, checked, index);
        this.tasks[index]= novaTarefa;
        repository.updateTask(novaTarefa, index);
    }

    this.in = function(lista, id){
        lista.forEach(function(element) {
            if (element.id == id) return true;
        });
        return false;
    }

    this.carregarTasks = function() {
        this.tasks = repository.carregarTasks();
        return this.tasks;
    }
}