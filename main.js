

let toDoList=[];

const btnAdd = document.querySelector('button.addTask');
const inputAdd = document.querySelector('input.addTask');
let tasksNumber = document.querySelector('h1 span');
let ul = document.querySelector('ul');
  const liList = document.querySelectorAll('li');
let searchInput = document.querySelector('.searchInput')




 const removeTask = (e)=>{
    e.target.parentNode.remove();
    const index = e.target.parentNode.id;
    toDoList.splice(index,1)
    tasksNumber.textContent = ul.childElementCount
    console.log(toDoList)
}



const searchTask = (e)=>{
   e.preventDefault();
    const searchText = e.target.value.toLowerCase()
    let tasks = toDoList
   
    tasks = tasks.filter(ul => ul.textContent.toLowerCase().includes(searchText))
    
    ul.textContent = "";
    
    tasks.forEach(li => ul.appendChild(li))

}
searchInput.addEventListener('input', searchTask)





addElement =(e)=>{
    e.preventDefault();
    const titleTask = inputAdd.value
    if(titleTask === "")return alert("enter some value");
   let task = document.createElement('li');
   toDoList.push(task);
   tasksNumber.textContent = toDoList.length;
   ul.textContent = "";
   toDoList.forEach((toDoElement,key) =>{
      toDoElement.id = key;
      ul.appendChild(toDoElement)
   })




   ul.appendChild(task);
    inputAdd.value = "";
    task.innerHTML = titleTask + " - " + "<button>Delete</button>";

 
task.querySelector('button').addEventListener('click', removeTask)
    
}

btnAdd.addEventListener('click', addElement)



