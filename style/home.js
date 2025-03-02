// to fixed date
const date = new Date('2025-03-02');

const format = { year: 'numeric', month: 'long', day: 'numeric'};
const dateFormat = date.toLocaleDateString('en-US', format);

document.getElementById("date").textContent = dateFormat;

// for clear data 

document.getElementById('clr-data')
.addEventListener('click', function clearData(){
  document.getElementById("history").textContent = '';
})




// task count
function task(number){


   // task count minus
   alert("Board updated Successfully");
   const taskCount = document.getElementById("task-count");
   const taskCountFormat = parseInt(taskCount.textContent);
   let taskCountValue = taskCountFormat - 1;
   taskCount.textContent = taskCountValue;

   

   // task count plus
   const allTask = document.getElementById("all-task");
   const allTaskFormat = parseInt(allTask.textContent);
   let allTaskValue = allTaskFormat + 1;
   allTask.textContent = allTaskValue;

   //  task name
   const taskName = document.getElementById("task-name-" + number);
   const taskNameFormat = taskName.textContent;

  //  time set
   const time = new Date();
   const timeFormat = time.toLocaleTimeString();

  

   // add task list
   document.getElementById("history").innerHTML += 
   `<p class="
    bg-blue-50
     p-4 
     rounded-lg
     mb-3 
     text-secondary opacity-50
     ">
     You have Complete The Task ${taskNameFormat}  
      at ${timeFormat}
     </p>`



     // task count
     const length = document.getElementById("history").children.length;
     for (let i = 1; i <= length; i++) {
      if(length == 6){
        alert("Congratulation!! You have Completed All current Task");
        break;
      }
     }
     

    //  disable button;
    const taskBtn = document.getElementById(number);
    taskBtn.style.background = "#3752FD";
    taskBtn.style.cursor = "not-allowed";
    taskBtn.style.color = "white";
    taskBtn.style.opacity = "0.5";
    taskBtn.disabled = true;
}



