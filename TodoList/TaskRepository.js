function TaskRepository(){

    this.salvar = function(dados){
        if(typeof(Storage) !== "undefined"){
            localStorage.setItem("tarefas", JSON.stringify(dados));
        }
    }

    this.updateTask = function(objTask, index){
        tarefas = this.carregarTasks();
        tarefas[index] = objTask;
        this.salvar(tarefas);
    }

    this.removeTask = function(index){
        tarefas = this.carregarTasks();
        console.log("Carregadas: ", tarefas)
        tarefas.splice(index, 1);
        this.salvar(tarefas);
    }

    this.carregarTasks = function(){
        var tarefasJson = JSON.parse(localStorage.getItem("tarefas"));
        return  tarefasJson ? tarefasJson : [];
    }

}