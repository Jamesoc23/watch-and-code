
var toDoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayToDos: function() {
      console.log("ToDos: ", this.todos)
    },
    addToDos: function(newToDo) {
        return this.todos.push(newToDo);
    },
    changeToDos: function(position, newToDo) {
        return this.todos[i] = newToDo;
    },
    removeToDos: function(position) {
        return this.todos.splice(position, 1);
    }
  }

