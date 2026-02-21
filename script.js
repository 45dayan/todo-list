const input = document.getElementById("input");
const taskBtn = document.getElementById("btn");
const listContainer = document.getElementById("list-Container");
const taskBtn2 = document.getElementById("btn2");
taskBtn.addEventListener('click',function(){
    const taskText = input.value;
    if(taskText.trim() === ""){
        alert("Tasks cannot be empty!");
    } else {
        const li = document.createElement("li");
        li.textContent = taskText;
        listContainer.appendChild(li);
          input.value = "";
    }
})
 taskBtn2.addEventListener("click",function(){
    const lastTask = listContainer.lastElementChild;
    if(lastTask){
        listContainer.removeChild(lastTask);
    } else {
        alert("No tasks left to delete");
    }
})
