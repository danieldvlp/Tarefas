
  function addTask() {
    var taskContainer = document.getElementById("task-container");

    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    var deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-task");
    deleteButton.title = "Delete task";
    deleteButton.onclick = function() {
      taskContainer.removeChild(taskDiv);
    };
    deleteButton.innerHTML = "X";

    var taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.contentEditable = true;

    taskDiv.appendChild(deleteButton);
    taskDiv.appendChild(taskContent);

    taskContainer.appendChild(taskDiv);
  }