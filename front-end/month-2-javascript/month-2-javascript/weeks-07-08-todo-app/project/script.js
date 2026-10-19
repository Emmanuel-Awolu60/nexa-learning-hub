// 1. Select the elements we need
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const message = document.getElementById("message");

// 2. A function that adds a task to the list
function addTask() {
  const text = input.value.trim();

  // Do not allow empty tasks
  if (text === "") {
    message.textContent = "Please type a task first.";
    return;
  }
  message.textContent = "";

  // Create the new list item
  const li = document.createElement("li");

  // The task text: clicking it toggles "done"
  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // The delete button: removes the whole item
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Put the pieces together and add to the page
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear the box and get ready for the next task
  input.value = "";
  input.focus();
}

// 3. Run addTask on click and when Enter is pressed
addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
