class Todo {
  constructor(todoInputId, todoAddBtnId, todoListId) {
    this.todoInput = document.getElementById(todoInputId);
    this.todoList = document.getElementById(todoListId);
    this.todoAddBtn = document.getElementById(todoAddBtnId);

    this.todos = [];
    this.todoAddBtn.addEventListener("click", () => {
      this.addTodo();
      this.render();
    });

    this.todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.todoAddBtn.click();
      }
    });
    this.render();
  }

  render() {
    this.todoList.innerText = "";
    if (this.todos.length == 0) {
      const infoMessage = document.createElement("p");
      infoMessage.innerText = "لیست خالی است";
      this.todoList.append(infoMessage);
    } else {
      const todoOutPut = document.createElement("div");
      for (const todo of this.todos) {
        todoOutPut.append(this.renderTodo(todo));
      }
      this.todoList.append(todoOutPut);
    }
  }
  addTodo() {
    if (this.todoInput.value != "") {
      const todo = this.todoInput.value;
      this.todoInput.value = "";
      this.todos.push(todo);
      this.render();
    }
  }
  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.render();
  }
  //   <div class="task" task_id="14">
  //   <div class="checkbox">
  //     <input type="checkbox" />
  //   </div>
  //   <h4 class="task_name text-secondary">سلام 14 این یک تست است</h4>
  //   <div class="task_buttons">
  //     <button class="edit_task_btn btn btn-outline-secondary">
  //       <i class="bi bi-pencil-fill"></i>
  //     </button>
  //     <button
  //       onclick="remove_task(this)"
  //       class="remove_task_btn btn btn-outline-danger"
  //     >
  //       <i class="bi bi-trash"></i>
  //     </button>
  //   </div>
  // </div>
  renderTodo(todo) {
    const task = document.createElement("div");
    const divCheckbox = document.createElement("div");
    const inputCheckbox = document.createElement("input");
    const h4 = document.createElement("h4");
    const divButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const editIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    h4.innerText = todo;
    inputCheckbox.type = "checkbox";
    task.classList.add("task");
    h4.classList.add("task_name");
    divCheckbox.classList.add("checkbox");
    divButtons.classList.add("task_buttons");
    editButton.classList.add("edit_task_btn", "btn", "btn-outline-secondary");
    editIcon.classList.add("bi", "bi-pencil-fill");
    deleteButton.classList.add("remove_task_btn", "btn", "btn-outline-danger");
    deleteIcon.classList.add("bi", "bi-trash");

    divCheckbox.append(inputCheckbox);
    editButton.append(editIcon);
    deleteButton.append(deleteIcon);
    divButtons.append(editButton, deleteButton);
    task.append(divCheckbox, h4, divButtons);

    deleteButton.addEventListener("click", () => {
      this.deleteTodo(todo);
    });

    return task;
  }
}

new Todo("add_task_input", "add_task_btn", "todo_list");
