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

// show error function for name input
function showError(input, message) {
        const displayError = input.parentElement;
        displayError.className = 'form-control error-message';
        const showErrorMessage = displayError.querySelector('small');
        showErrorMessage.innerText = message;
}


// eventlistener
form.addEventListener('submit', (e) => {
        e.preventDefault()

        if(newTaskNameInput.value == '') {
                showError(newTaskNameInput, 'Task name is required')
        } else {
                showError(newTaskNameInput, '');
        }
        if(newTaskDescription.value == '') {
                showError(newTaskDescription, 'Task description is required')
        } else {
                showError(newTaskDescription, '');
        }
        if(newAssigned.value == '') {
                showError(newAssigned, 'Task assignment is required')
        } else {
                showError(newAssigned, '');
        }
})

