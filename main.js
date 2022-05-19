const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const alltask = document.querySelector(".alltask")
console.log(input,btn);

btn.addEventListener("click",()=>{
    if(input.value==""){
        error.textContent= "Bhai Kuch to Add Kar";
    }
    else{
        alltask.innerHTML += 
        `<div class="task">
        <span class="taskname">${input.value}</span>
        <button class="delete">Delete</button>
        </div>`
    }
    let taskToDelete = document.querySelectorAll(".delete")
    console.log(taskToDelete);

    taskToDelete.forEach((task)=>{
        task.addEventListener("click",()=>{
            task.parentNode.remove();
        })
    })
    input.value="";
})

