function enterButton(event){
      if (event.key === 'Enter') {
         addToDo();
      }
};


const toDoList = [
   {name:'', dueDate:'2023-11-20'},
   {name:'', dueDate:'2023-11-20'}
];

renderTodoList();

function renderTodoList(){

let toDoListHTML = '';

for (let i = 0; i < toDoList.length; i++) {
   const todoObject = toDoList[i];
   // const name = todoObject.name;
   const {name} = todoObject;
   // const dueDate = todoObject.dueDate;
   const {dueDate} = todoObject;

   const html = 
   `
   <div class="datascss">${name}</div> 
   <div class="datascss">${dueDate}</div>
   <button onclick="
   toDoList.splice(${i}, 1);
   renderTodoList();
   " class="delete-btn">Delete</button>
   `;
   toDoListHTML += html;
}

document.querySelector('.js-todo-list-div')
.innerHTML = toDoListHTML
}
function addToDo(){
   const inputElem = document.querySelector('.js-name-input');

   const name = inputElem.value;

   const dateInputElem = document.querySelector('.js-input-dueDate');
   const dueDate = dateInputElem.value
   toDoList.push({
      //name: name, 
     // dueDate: dueDate,
     name,
     dueDate
   });
   
   inputElem.value = '';
   renderTodoList();
};

// function emptySpace(){
//    if (inputElem.value = '') {
//       alert('please, write a task');
//    }
// }
