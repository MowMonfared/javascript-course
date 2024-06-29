const todoList1 = [];
const todoList2 = [];

function addTodo1() {
  const inputElement = document.querySelector('.js-name-input-1');
  const name = inputElement.value;
  console.log(name);

  todoList1.push(name);
  console.log(todoList1);

  inputElement.value = '';
}

function addTodo2() {
  const inputElement = document.querySelector('.js-name-input-2');
  const name = inputElement.value;
  console.log(name);

  todoList2.push(name);
  console.log(todoList2);

  inputElement.value = '';

  renderTodoList2();
}

function renderTodoList2() {
  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list2').innerHTML = todoListHTML;
}

const todoList3 = [];

function renderTodoList3() {
  let todoListHTML = '';

  todoList3.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>
    ${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList3.splice(${index}, 1);
    renderTodoList3();
    "
    class="delete-todo-button"
    >Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list3').innerHTML = todoListHTML;
}

function addTodo3() {
  const inputElement = document.querySelector('.js-name-input-3');
  const name = inputElement.value;
  console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input3');
  const dueDate = dateInputElement.value;

  todoList3.push({
    name: name,
    dueDate: dueDate,
  });

  inputElement.value = '';

  renderTodoList3();
}
