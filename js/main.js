class Todo {
  constructor(todoInputId, todoListId) {
    //get static add-input and todolist
    this.todoInput = document.getElementById(todoInputId);
    this.todoList = document.getElementById(todoListId);
    //TODO:add dynamic todo
    this.todos = ["learn vue.js", "buy a ticket"];
    this.render();
  }

  render() {
    const todoOutPut = document.createElement("div");
    for (const todo of this.todos) {
      todoOutPut.append(this.renderTodo(todo));
    }
    this.todoList.append(todoOutPut);
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

    return task;
  }
}

new Todo("add_task_input", "todo_list");
