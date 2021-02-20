const toDoStorage = (function () {
    class ToDo {
        constructor(value) {
            this.value = value;
            this.class = 'to-be-done-task';
        }
    }
    class ToDoStorage {
        constructor() {
            this.todos = [];
            if (localStorage.getItem('todos')) {
                this.todos = JSON.parse(localStorage.getItem('todos'));
            } else {
                this.todos = [
                    new ToDo("Edno ToDo"),
                    new ToDo("Dve ToDo"),
                ];
                localStorage.setItem("todos", JSON.stringify(this.todos));
            }
        }

        doesTaskExist(value) {
            let doesTheTaskExist = false;
            this.todos.forEach(el => {
                if (el.value === value) {
                    doesTheTaskExist = true;
                }
            });
            return doesTheTaskExist;
        }

        addToDo(value) {
            if (value.length > 0) {
                this.todos.push(new ToDo(value));
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        }

        removeToDo(value) {
            let itemToRemove = this.todos.indexOf(this.todos.find(el => el.value === value));
            this.todos.splice(itemToRemove, 1);
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }

        changeToDone(value) {
            let itemToBeChanged = this.todos.indexOf(this.todos.find(el => el.value === value));
            this.todos[itemToBeChanged].class = 'done-task';
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }

        changeToNotDone(value) {
            let itemToBeChanged = this.todos.indexOf(this.todos.find(el => el.value === value));
            this.todos[itemToBeChanged].class = 'to-be-done-task';
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }

    }

    return new ToDoStorage();
})();