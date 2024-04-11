const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const deleteElement = document.getElementById("delete");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } 
    inputBox.value = "";
    saveData ()
}

taskList.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ()
    }   else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData ()
    }
}, false);

function saveData () {
    localStorage.setItem("data",taskList.innerHTML);
}

function showList () {
    taskList.innerHTML = localStorage.getItem("data");
}

showList ();
