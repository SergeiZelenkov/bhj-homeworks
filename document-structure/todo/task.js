const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
  `;

  tasksList.insertAdjacentElement("afterBegin", task);


  const removeButton = task.querySelector(".task__remove");
  removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    task.remove(); 
  });

  taskInput.value = "";
});
