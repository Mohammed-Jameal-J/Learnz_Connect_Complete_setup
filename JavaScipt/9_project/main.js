let tasks = [];


let result = document.getElementById("result");

function renderTaks() {
    result.innerHTML = "";

  tasks.forEach((item,index) => {
    result.innerHTML += `<div>
             <h1>${item}</h1>
        <button onclick="deleteTask(${index})">Delete</button>
        </div>
       
        `;
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  let value = document.getElementById("taskInput").value;
  
  tasks.push(value);
  renderTaks()
  
});


function deleteTask(index){
    tasks.splice(index,1)
    renderTaks()
}

document.getElementById('searchInput').addEventListener("keyup",()=>{
    let searchKey=document.getElementById('searchInput').value

    let searchTasks=tasks.filter(item=>{
        return item.includes(searchKey)
    })
})