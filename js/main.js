//TODO: get elmant
const add_task_btn = document.querySelector("#add_task_btn");
const remove_task_btn = document.querySelectorAll(".remove_task_btn");
const add_task_label = document.querySelector("#add_task_label");
let todo = document.querySelector(".todo");

//add new task
add_task_btn.addEventListener("click", () => {
  if (add_task_label.value != "") {
    todo.innerHTML += task_format(add_task_label.value);
    add_task_label.value = "";
  }
});

add_task_label.addEventListener("keypress", (e) => {
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
  <button
    onclick="remove_task(this)"
    class="remove_task_btn btn btn-outline-danger"
  >
    <i class="bi bi-trash"></i>
  </button>
</div>
`;
}
//end add task
//remove task

function remove_task(e) {
  e.parentElement.remove();
}
// end remove task
//edit task

function edit_task(e) {
  let paragraph = document.querySelector(".task_name");
  // const end_button = document.getElementById("end-editing");

  paragraph.contentEditable = true;
  paragraph.click;
  // paragraph.style.backgroundColor = "#dddbdb";
}

// edit_button.addEventListener("click", function () {
//   paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "#dddbdb";
// });

// end_button.addEventListener("click", function () {
//   paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "#ffe44d";
// });
// end edit task
