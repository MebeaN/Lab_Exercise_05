// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const dd = document.querySelectorAll(".dropdown-trigger")



// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

//dd.addEventListener("click", dropdown)

// Add New  Task Function definition 
function addNewTask(e) {
    if (taskInput.value === '') 
    { 
        taskInput.style.borderColor = "red";
        return;

    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);

    // Remove task event [event delegation]
   taskList.addEventListener('click', removeTask);

    e.preventDefault(); //disable form submission
}

// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Task Function definition 
function clearAllTasks() {

//This is the first way 
    // taskList.innerHTML = '';    

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

// Filter tasks function definition 
function filterTasks(e) {
    
    
    const inp = filter.value.toLowerCase();
    const ul = document.getElementById("lists")
    const li = ul.getElementsByTagName("li")
    for(var i = 0; i < li.length; i++){
        var x = li[i].firstChild
        var a = x.textContent.toLowerCase();
        if(a.indexOf(inp) > -1){
            li[i].style.display = ""
        }
        else{
            li[i].style.display = "none"
        }
    }
}

const reloadIcon = document.querySelector('.fa');   


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

var dropdowns = document.querySelectorAll('.dropdown-trigger')
for (var i = 0; i < dropdowns.length; i++){
    M.Dropdown.init(dropdowns[i]);
}

function dropdown(e){
    if(e.getElementById("ascend")){
        alert("Ascending")
    }
    else{
        alert("Descending")
    }
}