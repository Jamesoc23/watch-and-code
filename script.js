
var toDoList = {
    todos: [],
    displayToDos: function() {
      console.log("ToDos: ", this.todos)
    },
    addToDos: function(newToDo) {
        this.todos.push({
            toDoText: newToDo,
            completed: false
        });
    },
    changeToDos: function(position, changeToDo) {
        this.todos[i] = {
            toDoText: changeToDo,
            completed: false
        };
    },
    removeToDos: function(position) {
        this.todos.splice(position, 1);
    },
    toggleToDos: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    }
  }

