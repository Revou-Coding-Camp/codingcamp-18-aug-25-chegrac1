document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const filterInput = document.getElementById("filterInput");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskInput.value = "";
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
  });

  filterInput.addEventListener("input", () => {
    const filterText = filterInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");
    Array.from(tasks).forEach(task => {
      const taskText = task.querySelector("span").textContent.toLowerCase();
      task.style.display = taskText.includes(filterText) ? "flex" : "none";
    });
  });
});
