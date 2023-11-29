// function enterButton(event) {
//    if (event.key === 'Enter') {
//       addToDo();
//    }
// };


// const toDoList = [
//    // { name: '', dueDate: '2023-11-20' },
//    // { name: '', dueDate: '2023-11-20' }
// ];

// renderTodoList();
// function updateToDoStatus(index) {
//    const todoObject = toDoList[index];
//    const { name } = todoObject;
//    const { dueDate } = todoObject;

//    // Update the todo object's name by adding a CSS class
//    const updatedName1 = `<span class="strikethrough">${name}</span>`;
//    const updatedName2 = `<span class="strikethrough">${dueDate}</span>`
//    toDoList[index].name = updatedName1;
//    toDoList[index].dueDate = updatedName2;
//    renderTodoList();
// }
// function renderTodoList() {
//    let toDoListHTML = '';
// // toDoList.shift()
//    for (let i = 0; i < toDoList.length; i++) {
//       const todoObject = toDoList[i];
//       // const name = todoObject.name;
//       const { name } = todoObject;
//       // const dueDate = todoObject.dueDate;
//       const { dueDate } = todoObject;
      
//       const html =
//          `
//    <div class="datascss">${name}</div> 
//    <div class="datascss">${dueDate}</div>
//    <button onclick="
//    toDoList.splice(${i}, 1);
//    renderTodoList();
//    " class="delete-btn">Delete</button>
//   <button onclick="
//   updateToDoStatus(${i});
//   ">Done</button>
//    `;
//       toDoListHTML += html;
//    }

//    document.querySelector('.js-todo-list-div')
//       .innerHTML = toDoListHTML
// }
// function addToDo() {

//    const inputElem = document.querySelector('.js-name-input');
//    const name = inputElem.value;
//    emptySpace(inputElem.value);
//    const dateInputElem = document.querySelector('.js-input-dueDate');
//    const dueDate = dateInputElem.value
//    toDoList.push({
//       //name: name, 
//       // dueDate: dueDate,
//       name,
//       dueDate
//    });

//    inputElem.value = '';
//    renderTodoList();




// };

// function emptySpace(value) {
//    if (value === '') {
//       return alert('please, write a task');
//    }
// }

function enterButton(event) {
   if (event.key === 'Enter') {
      addToDo();
   }
}

const toDoList = [];

renderTodoList();

function updateToDoStatus(index) {
   const todoObject = toDoList[index];
   const { name, dueDate } = todoObject;

   // Update the todo object's name by adding a CSS class
   const updatedName1 = `<span class="strikethrough">${name}</span>`;
   const updatedName2 = `<span class="strikethrough">${dueDate}</span>`;
   toDoList[index].name = updatedName1;
   toDoList[index].dueDate = updatedName2;
   renderTodoList();
}

function renderTodoList() {
   let toDoListHTML = '';

   for (let i = 0; i < toDoList.length; i++) {
      const todoObject = toDoList[i];
      const { name, dueDate } = todoObject;

      const html = `
            <div class="datascss">${name}</div>
            <div class="datascss">${dueDate}</div>
            <button onclick="toDoList.splice(${i}, 1); renderTodoList();" class="delete-btn" style="padding: 11px 47px 11px 47px ";>Delete</button>
            <button onclick="updateToDoStatus(${i});" class="done-btn" style="padding: 11px 47px 11px 47px">Done</button>
        `;
      toDoListHTML += html;
   }

   document.querySelector('.js-todo-list-div').innerHTML = toDoListHTML;
}

function addToDo() {
   const inputElem = document.querySelector('.js-name-input');
   const name = inputElem.value;
   if (emptySpace(name)) {
      return;
   }

   const dateInputElem = document.querySelector('.js-input-dueDate');
   const dueDate = dateInputElem.value;

   toDoList.push({
      name,
      dueDate,
   });

   inputElem.value = '';

   // Conditionally render the todo list
   if (toDoList.length > 0) {
      renderTodoList();
   }        
}

function emptySpace(value) {
   if (value === '') {
      alert('Please write a task');
      return true; // Return true to indicate that the input is empty
   }
   return false; // Return false if the input is not empty
}


//local storage
