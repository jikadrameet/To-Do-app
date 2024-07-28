let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (input.value == "") {
        alert("Enter somethimg task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value} <span class="material-symbols-outlined">
delete
</span>`;
        text.appendChild(newEle);
        input.value = ""
        newEle.querySelector("span").addEventListener("click",remove);
        function remove() {
            newEle.remove()
        }
    }
}