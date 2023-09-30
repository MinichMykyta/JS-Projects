const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList () {
    let todoListHTML = ``;

    for (let i = 0; i < todoList.length; i += 1) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector(`.js-todo-list`)
        .innerHTML = todoListHTML;
    }

function addTodo() {
    const inputElement = document.querySelector(`.js-name-input`);
    const name = inputElement.value;
    let paragraph = document.querySelector(`js-todo-list`);

    todoList.push(name);
    paragraph = (todoList);

    inputElement.value = ``;

    renderTodoList();
}