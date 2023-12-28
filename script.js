let inputEl = document.getElementById("input");
let list = document.getElementById("ol");

function add(){
    let task = inputEl.value
    list.innerHTML += `<li>${task} <button class="btn btn-outline-secondary" type="button" onclick="remove()">remove</button></li>`
    inputEl.value = "";
}
function remove(){
    list.removeChild(list.firstElementChild);
}