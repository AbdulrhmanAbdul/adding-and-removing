let inputEl = document.getElementById("input");
let list = document.getElementById("ol");

function add(){
    let task = inputEl.value
    list.innerHTML += `<li>${task}</li>`
    inputEl.value = "";
}
function remove(){
    list.removeChild(list.lastElementChild);
}
