(function () {
    let toDo = {
        todos: toDoStorage.todos,
        doneTodos: toDoStorage.doneTodos,
    };

    const addToDoBtn = document.getElementById('addBtn');
    const toDoValue = document.getElementById('todoInput');

    let source = document.getElementById("toDoTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(toDo);

    let toDosContainer = document.getElementById('toDosContainer');
    toDosContainer.innerHTML = html;

    addToDoBtn.addEventListener('click', function () {
        let value = checkValue(toDoValue.value);
        if (!toDoStorage.doesTaskExist(value)) {
            toDoStorage.addToDo(value);
        }
        toDoValue.value = '';
        printAllTasks(toDo);
    });

    printAllTasks(toDo);

    window.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target.className === 'remove-btn') {
            let value = target.parentElement.querySelector('span').innerText;
            toDoStorage.removeToDo(value);
            printAllTasks(toDo);
        } else if (target.className === 'to-be-done-task') {
            let value = target.parentElement.querySelector('span').innerText;
            toDoStorage.changeToDone(value);
            printAllTasks(toDo);
            //TODO: change the isDone property of the specific task
        } else if (target.className === 'done-task') {
            let value = target.parentElement.querySelector('span').innerText;   
            toDoStorage.changeToNotDone(value);
            printAllTasks(toDo);
        }
    });
})();