var taskCounter = 1;

function addTask() {
  var taskTitleInput = document.getElementById("taskTitleInput");
  var taskDescriptionInput = document.getElementById("taskDescriptionInput");
  var taskList = document.getElementById("taskList").getElementsByTagName("tbody")[0];
  var warningMsg = document.getElementById("warningMsg");

  if (taskTitleInput.value === "" || taskDescriptionInput.value === "") {
    warningMsg.textContent = "Please fill in both the Title and Description fields.";
    return;
  }

  warningMsg.textContent = "";

  var newRow = taskList.insertRow();
  newRow.id = "task-" + taskCounter;

  var cell1 = newRow.insertCell(0);
  cell1.textContent = taskCounter;

  var cell2 = newRow.insertCell(1);
  cell2.textContent = taskTitleInput.value;

  var cell3 = newRow.insertCell(2);
  cell3.textContent = taskDescriptionInput.value;

  var cell4 = newRow.insertCell(3);
  var deleteButton = document.createElement("span");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = "&#10060;";
  deleteButton.onclick = function () {
    var taskId = this.parentNode.parentNode.id;
    var taskToRemove = document.getElementById(taskId);
    taskToRemove.remove();
  };
  cell4.appendChild(deleteButton);

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  taskCounter++;
}