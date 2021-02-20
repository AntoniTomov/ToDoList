let printAllTasks = function(todos) {
    let tasksContainer = document.getElementById('toDosContainer');
    let source = document.getElementById("toDoTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(todos);
    
    tasksContainer.innerHTML = html;
};