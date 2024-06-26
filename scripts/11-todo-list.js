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

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
