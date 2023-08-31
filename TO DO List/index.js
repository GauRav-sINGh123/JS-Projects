const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("addTask")
const button=document.getElementById("butn")

button.addEventListener('click',(e)=>{
    if(inputBox.value ===''){

        alert("Please Enter a Task");

    }
    else{
        let li=document.createElement('li');
        const addText=document.createTextNode(inputBox.value)
        li.appendChild(addText);
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
})
listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

//Adding it local storage (browser)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
show();