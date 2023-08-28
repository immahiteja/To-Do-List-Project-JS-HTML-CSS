  const input = document.getElementById("new-task");
  const add = document.getElementById("add");
  const lists = document.querySelector(".lists");
  const form = document.getElementById("form1");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });

  function addTask() {
    const task = input.value;
    if (task) {
      const newTask = document.createElement("div");
      newTask.classList.add("task");
      const taskText = document.createElement("span");
      taskText.textContent = task;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("deleteButton");
      lists.appendChild(newTask);
      newTask.appendChild(taskText);
      newTask.appendChild(deleteButton);
      const checkButton = document.createElement("button");
      checkButton.textContent = "Not done";
      checkButton.classList.add("checkButton");
      newTask.insertBefore(checkButton, deleteButton);
      input.value = "";
      deleteButton.addEventListener("click", deleteTask);
      checkButton.addEventListener("click", checkTask);
    }
  }

  function deleteTask(e) {
    const target = e.target;
    const parent = target.parentElement;

    lists.removeChild(parent);
  }

  function checkTask(e) {
    const target = e.target;
    target.classList.toggle("checked");
    if (target.classList.contains("checked")) {
      target.textContent = "Done";
    } else {
      target.textContent = "Not done";
    }
  }

  add.addEventListener("click", addTask);

