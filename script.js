const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

var today = new Date().toISOString().split('T')[0];
document.getElementById("exprieDate").setAttribute('min',today);
var expire = document.getElementById("exprieDate");

function addTask(){
    if(inputBox.value == ""){
        alert("You should enter task.")
    }else if(expire.value == ""){
        alert("You should enter expire date.")
    }
    else{

        let li = document.createElement('li');
        listContainer.appendChild(li);

    
        let textDiv = document.createElement('div'); 
        let dateDiv = document.createElement('div');
        textDiv.classList.add("tasks"); 
        dateDiv.classList.add("dates"); 
        li.appendChild(textDiv);
        li.appendChild(dateDiv);


        let span = document.createElement('span'); 
        span.innerHTML = inputBox.value; 
        textDiv.appendChild(span); 
        
        let img = document.createElement('img');
        img.src = "img/notcheck.png";
        img.classList.add("close"); 
        textDiv.appendChild(img); 

        let startDate = document.createElement('span');
        startDate.innerText = "Start: "+today;
        let expireDate = document.createElement('span');
        expireDate.innerHTML = "Expire: "+expire.value;
        dateDiv.appendChild(startDate); 
        dateDiv.appendChild(expireDate); 

    }

    inputBox.value = "";

    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked"); 
        saveData();
    }

    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
    
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();


