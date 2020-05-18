const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", CheckTodo);

function addTodo() {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const addTodoBtn = document.createElement("button");
  addTodoBtn.classList.add("complete-btn");
  addTodoBtn.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(addTodoBtn);

  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteTodoBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteTodoBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteTodo(e) {
  let selected = e.target;
  if (selected.classList[0] === "delete-btn") {
    const todo = selected.parentElement;
    todo.classList.add("delete-animation");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}

function CheckTodo(e) {
  let selected = e.target;
  if (selected.classList[0] === "complete-btn") {
    const todo = selected.parentElement;
    todo.classList.toggle("completed");
  }
}
