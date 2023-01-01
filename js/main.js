let task_id = 0;
const add_task_btn = document.querySelector("#add_task_btn");
const remove_task_btn = document.querySelectorAll(".remove_task_btn");
const add_task_input = document.querySelector("#add_task_input");
let todo = document.querySelector(".todo");

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
        <div class="task" task_id="${task_id}">
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

function create_modal() {
  return `
        <div class="edit_task_modal" id="${task_id}">
          <div class="modal_content bg-light p-3 border border-secondary">
            <div class="modal_header border-bottom border-secondary mb-2 pb-2">
              <button class="btn btn-info close">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="modal_body border-bottom border-secondary mb-2 pb-2">
              <textarea name="" id="edit_input" class="edit_input" cols="30" rows="3"></textarea>
            <div class="modal_footer">
              <button class="btn btn-primary save">ثبت</button>
              <button class="btn btn-outline-secondary cancel">لغو</button>
            </div>
          </div>
        </div>
  `;
}
//remove task

function remove_task(e) {
  e.parentElement.parentElement.remove();
}
// end remove task
//edit task

function edit_task(e) {
  todo.innerHTML += create_modal(task_id);
  let task_name = e.parentElement.parentElement.querySelector(".task_name");
  console.log(task_name);
  let edit_task_modal = document.querySelector(".edit_task_modal");
  let edit_input = edit_task_modal.querySelector(".edit_input");
  let save_btn = edit_task_modal.querySelector(".save");
  let close_btn = edit_task_modal.querySelector(".close");
  let cancel_btn = edit_task_modal.querySelector(".cancel");
  edit_task_modal.style.display = "flex";
  edit_input.value = task_name.innerHTML;
  save_btn.addEventListener("click", () => {
    console.log(edit_input.value);
    task_name.value = "";
    console.log(task_name);
    console.log(task_name.parentElement);
    // close_btn.click();
  });
  close_btn.addEventListener("click", () => {
    edit_task_modal.remove();
  });
  cancel_btn.addEventListener("click", () => {
    close_btn.click();
  });
  console.log(e.parentElement.parentElement);
}
// end edit task
