
var toDoList = {
    todos: [],
    displayToDos: function() {
      console.log("ToDos: ", this.todos)
      if (this.todos.length === 0) {
          console.log("Your to do list is empty")
      } else {
        for (i=0; i < this.todos.length; i++){
            if (this.todos.completed === true) {
                console.log("(x)", this.todos[i].toDoText);
            } else {
                console.log("( )", this.todos[i].toDoText);
                }
        }
      }

    },
    addToDos: function(newToDo) {
        this.todos.push({
            toDoText: newToDo,
            completed: false
        });
    },
    changeToDos: function(position, changeToDo) {
        this.todos[position] = {
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
        this.displayToDos();
    }
    toggleAll: function() {
        // If everything is true, make it false
        todosAll = this.todos.length;
        todosCompleted = 0;
        for (i=0; i < this.todos.length; i++){
            if (this.todos.completed === true) {
                todosCompleted++;
            }

        if (todosCompleted === todosAll) {
            for (i=0; i < this.todos.length; i++){
                this.todosCompleted.completed[i] = false;
            }
        } else {
            for (i=0; i < this.todos.length; i++){
                this.todosCompleted.completed[i] = true;
            }
        }

    }

  }

