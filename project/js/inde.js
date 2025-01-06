const input = document.getElementById("input-box");
const container = document.getElementById("list-container")

function addTask(){
    if(input.value === ''){
        alert('You must write something')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        container.appendChild(li);
       let spa = document.createElement("span")
       spa.innerHTML = "\u00d7";
       li.appendChild(spa)

    }
    input.value = "";
    saveData();
}

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();