const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const taskHTML = `<div class="task">
  <div class="task__title">
    ${taskText}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`;

  tasksList.insertAdjacentHTML("afterBegin", taskHTML);

  taskInput.value = "";

  const removeButtons = tasksList.querySelectorAll(".task__remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      button.closest(".task").remove();
    });
  });
});
