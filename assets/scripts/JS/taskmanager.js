//html card template

const cardTemplates = (taskName, description, assignedTo, dueDate, taskStatus, currentId) => {
        const html = `<div class="task-cards">
        <li class = "parentTask" id = "${currentId}">  
        <div class="card" style="width: 30rem;">
            <div class="card-body">
            <h3 class="card-title">Task Name: ${taskName}</h3>
            <p class="assignment">Assigned to: ${assignedTo}</p>
            <p class="due">Due: ${dueDate}</p>
            <p class="card-text">Task Description: ${description}</p>
            <span class="status"> ${taskStatus}</span>
            <div class="card-footer">
            <a href="#" class="btn btn-outline-danger">Delete</a> 
            <button type="button" class="btn btn-outline-success done-button" >Mark as Done</button>
            </div>
            </div>
        </div>
    </li>
    </div>`
        return html

};

//task manager to manage tasks
class TaskManager {
    constructor(){
        this.tasks = []
        this.currentId = 0
    }
    addTask(newTaskNameInput, newTaskDescription,newAssignedTo, newDueDate, taskStatus){
        taskStatus = "TODO"
        this.tasks.push({_taskName : newTaskNameInput,
            _description : newTaskDescription,
            _assignedTo : newAssignedTo,
            _dueDate : newDueDate,
            _taskStatus : taskStatus,
            currentId : this.currentId
        })
        this.currentId++
    }
// render method to render the html and taskmanager  
    render() {
        let htmlTaskList = []
        for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
            let currentTask = this.tasks[taskNumber]
            let date = new Date(currentTask._dueDate)
            let formattedDate = (date.getMonth() +1) + "/" + (date.getDate() +1) + "/" + date.getFullYear();
            let htmlTask = cardTemplates(currentTask._taskName, currentTask._description, currentTask._assignedTo, formattedDate, currentTask._taskStatus, this._currentId)
            htmlTaskList.push(htmlTask); console.log(currentTask)
        }
        let tasksHtml = htmlTaskList.join('\n')

        taskList.innerHTML = tasksHtml;
    }
// TO-DO 
    getTaskById(e){
        let key = parseInt(e.closest('li').getAttribute('id'))
        return this.tasks[key]
    }
}



// insatiate a new taskmanager
const newTask = new TaskManager()

// getting the input fields. through various document selection


const newTaskNameInput = document.querySelector("#name-field");
const newTaskDescription = document.getElementById("task-description-field");
const newAssigned = document.getElementById("assigned-field");
const newDueDate = document.getElementById("date-assign-field");
const form = document.getElementById('task_form');

// getting the error showing div element

const nameError = document.getElementById('name-error');
const descriptionError = document.getElementById('description-error')
const assignError = document.getElementById('assign-error');

// show error function for all inputs

function showError(input, message) {
        const displayError = input.parentElement;
        displayError.className = 'form-control error-message';
        const showErrorMessage = displayError.querySelector('small');
        showErrorMessage.innerText = message;
}

// this function informs user of an empty input field
// form.addEventListener('submit', (e) => {
//         e.preventDefault()

//         if(newTaskNameInput.value == '') {
//                 showError(newTaskNameInput, 'Task name is required')
//         } else  {
//                 showError(newTaskNameInput, '');
//         }
//         if(newTaskDescription.value == '') {
//                 showError(newTaskDescription, 'Task description is required')
//         } else {
//                 showError(newTaskDescription, '');
//         }
//         if(newAssigned.value == '') {
//                 showError(newAssigned, 'Task assignment is required')
//         } else {
//                 showError(newAssigned, '');
//         }
// });

function validFormFields(e) {
        e.preventDefault()

        if (newTaskNameInput.value == '' || newTaskDescription.value == '' || newAssigned.value == '') {
            showError(newTaskNameInput, 'Task name is required')
            showError(newTaskDescription, 'Task description is required')
            showError(newAssigned, 'Task assignment is required')
            console.log('1')

        } 

        else if (newTaskNameInput.value != '' || newTaskDescription.value != '' || newAssigned.value != '') {
            showError(newTaskNameInput, '')
            showError(newTaskDescription, '')
            showError(newAssigned, '')

            newTask.addTask(newTaskNameInput.value, newTaskDescription.value, newAssigned.value, newDueDate.value)
            newTask.render()
        } 
        
        
}

// addtask btn
const submitTask = document.querySelector('.submit-task')
submitTask.addEventListener('click', function (e) {validFormFields(e)})


//TO-DO
let taskList = document.querySelector('.task-cards')
taskList.addEventListener('click', e => { 
    let doneClicked = e.target.classList.contains('done-button')
    if(doneClicked){
        taskList = e.target.closest('li');
        let task = newTask.getTaskById(e.target);
        task._taskStatus = "Done";
        newTask.render();
        console.log(task)
    }
})
