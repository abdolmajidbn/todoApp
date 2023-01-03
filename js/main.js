let task_id = 0;
const add_task_btn = document.querySelector("#add_task_btn");
const remove_task_btn = document.querySelectorAll(".remove_task_btn");
const add_task_input = document.querySelector("#add_task_input");
let todo = document.querySelector(".todo");
let modal = document.querySelector(".edit_task_modal");
let edit_input = modal.querySelector(".edit_input");
let close_btn = modal.querySelector(".close");
let cancel_btn = modal.querySelector(".cancel");
let save_btn = modal.querySelector(".save");
let todos = JSON.parse(localStorage.getItem("todo-list"));
localStorage.setItem("todo-list", JSON.stringify("tset"));

function showTodo(filter) {
  let liTag = "";
  if (todos) {
    todos.forEach((todo, id) => {
      let completed = todo.status == "completed" ? "checked" : "";
      if (filter == todo.status || filter == "all") {
        liTag += `
        <li class="task">
          <label for="${id}">
              <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
              <p class="${completed}">${todo.name}</p>
          </label>
          <div class="settings">
              <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
              <ul class="task-menu">
                  <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                  <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
              </ul>
          </div>
        </li>`;
      }
    });
  }
  taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
  let checkTask = taskBox.querySelectorAll(".task");
  !checkTask.length
    ? clearAll.classList.remove("active")
    : clearAll.classList.add("active");
  taskBox.offsetHeight >= 300
    ? taskBox.classList.add("overflow")
    : taskBox.classList.remove("overflow");
}
showTodo("all");
//add new task
add_task_btn.addEventListener("click", () => {
  if (add_task_input.value != "") {
    ++task_id;
    todo.innerHTML += task_format(add_task_input.value);
    add_task_input.value = "";
  }
});

add_task_input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    add_task_btn.click();
  }
});

function task_format(task_name) {
  return `
        <div class="task" id="${task_id}">
        <div class="checkbox">
          <input type="checkbox" />
        </div>
        <h4 class="task_name text-secondary">
          ${task_name}
        </h4>
        <div class="task_buttons">
          <button
            class="edit_task_btn btn btn-outline-secondary"
            onclick="edit_task(this)"
          >
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button
            onclick="remove_task(this)"
            class="remove_task_btn btn btn-outline-danger"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
`;
}
//end add task

//remove task

function remove_task(e) {
  e.parentElement.parentElement.remove();
}
// end remove task
//edit task

// function edit_task(e) {
//   let task = e.parentElement.parentElement;
//   let task_name = task.querySelector(".task_name");
//   modal.style.display = "flex";
//   edit_input.value = task_name.innerHTML;
// }

// end edit task
