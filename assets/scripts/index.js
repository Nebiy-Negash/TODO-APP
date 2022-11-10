const newTaskNameInput = document.querySelector("#name-field");
const newTaskDescription = document.getElementById("task-description-field")
const newAssigned = document.getElementById("assigned-field")
const newDueDate = document.getElementById("date-assign-field")
const form = document.getElementById('task_form')

const newError = document.getElementById('name-error')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function validFormFieldInput(data) {
    const name = newTaskNameInput.value;
    
    if(name.value === '' || name.value == null){
            newError.innerText = 'Task name is required'
            return false
    }  
};


const onSubmit = document.getElementById('btn');










