function taskValidation(title) {
    const cleanedTitle = title.trim();

    if (cleanedTitle === "") {
        return {
            isValid: false,
            message: "Error: Task title cannot be empty!",
        };
    }

    if (cleanedTitle.length > 100) {
        return {
            isValid: false,
            message: "Error: Task title cannot exceed 100 characters!",
        };
    }

    return {
        isValid: true,
        message: "Success",
    };
}

const btnOpenForm = document.getElementById("btn-open-form");
const btnCloseForm = document.getElementById("btn-close-form");
const formContainer = document.getElementById("form-container");

const taskForm = document.getElementById("task-form");
const inputTaskTitle = document.getElementById("input-task-title");
const selectTaskPriority = document.getElementById("select-task-priority");
const errorBox = document.getElementById("error-box");
const successBox = document.getElementById("success-box");

btnOpenForm.addEventListener("click", () => {
    formContainer.classList.remove("d-none");
    inputTaskTitle.focus();
});

btnCloseForm.addEventListener("click", () => {
    formContainer.classList.add("d-none");
    clearError();
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleValue = inputTaskTitle.value;
    const priorityValue = selectTaskPriority.value;

    const validationResult = taskValidation(titleValue);

    if (!validationResult.isValid) {
        showError(validationResult.message);
        return;
    }

    clearError();
    showSuccess(`Successfully added!\nTask: ${titleValue.trim()}\nPriority: ${priorityValue}`);
    inputTaskTitle.value = "";
});

function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("d-none");
}

function showSuccess(message) {
    successBox.textContent = message;
    successBox.classList.remove("d-none");
}

function clearError() {
    errorBox.classList.add("d-none");
}