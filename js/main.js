class Todo {
  constructor(todoInputId, todoAddBtnId, todoListId, editModalId) {
    this.todoInput = document.getElementById(todoInputId);
    this.todoList = document.getElementById(todoListId);
    this.todoAddBtn = document.getElementById(todoAddBtnId);
    this.editModal = document.getElementById(editModalId);
    this.todos = [];
    this.storage = window.localStorage;
    this.loadList();

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
      infoMessage.innerText =
        "لیست کارها خالیه از قسمت پایین میتونید اضافه کنید !!!";
      infoMessage.classList.add("message", "alert", "alert-info");
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
      this.saveList();
      this.render();
    }
  }
  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.saveList();
    this.render();
  }
  editTodo(todo) {
    this.editModal.classList.add("show_modal");
    const modalInput = this.editModal.querySelector(".edit_input");
    const saveBtn = this.editModal.querySelector(".save");
    const close = this.editModal.querySelector(".close");
    modalInput.value = todo;
    modalInput.focus();
    modalInput.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        saveBtn.click();
      }
    });
    saveBtn.addEventListener("click", () => {
      const index = this.todos.indexOf(todo);
      this.todos[index] = modalInput.value;
      this.render();
      this.saveList();
      close.click();
    });
    close.addEventListener("click", () => {
      this.editModal.classList.remove("show_modal");
    });
  }

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
    editButton.addEventListener("click", () => {
      this.editTodo(todo);
    });

    return task;
  }
  saveList() {
    const str = JSON.stringify(this.todos);
    console.log(str);
    this.storage.setItem("todos", str);
  }
  loadList() {
    const todos = this.storage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }
}

new Todo("add_task_input", "add_task_btn", "todo_list", "edit_modal");
