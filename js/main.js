//TODO: get elmant
const add_task_btn = document.querySelector("#add_task_btn");
const remove_task_btn = document.querySelectorAll(".remove_task_btn");
const add_task_input = document.querySelector("#add_task_input");
const edit_task_modal = document.querySelector(".edit_task_modal");
let todo = document.querySelector(".todo");

//add new task
add_task_btn.addEventListener("click", () => {
  if (add_task_input.value != "") {
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
        <div class="task">
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

function edit_task(e) {
  let paragraph = e.parentElement.parentElement.querySelector(".task_name");
  let edit_input = edit_task_modal.querySelector(".edit_input");
  let save_btn = edit_task_modal.querySelector(".save");
  let close_btn = edit_task_modal.querySelector(".close");
  let cancel_btn = edit_task_modal.querySelector(".cancel");
  edit_task_modal.style.display = "flex";
  edit_input.value = paragraph.innerHTML;
  save_btn.addEventListener("click", () => {
    paragraph.innerHTML = edit_input.value;
    close_btn.click();
  });
  close_btn.addEventListener("click", () => {
    console.log(edit_input.value);
    edit_task_modal.style.display = "none";
  });
  cancel_btn.addEventListener("click", () => {
    close_btn.click();
  });
  console.log(e.parentElement.parentElement);
}

// end edit task
