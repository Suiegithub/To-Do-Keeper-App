// Get references to DOM elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to create a new to-do item
function createTodoItem(todoText) {
    const listItem = document.createElement("li");

    // Add text to the list item
    listItem.innerText = todoText;

    // Create a delete button for each item
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        listItem.remove(); // Remove the item when delete button is clicked
    };

    // Add the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the todo list
    todoList.appendChild(listItem);
}

// Event listener for the add button
addButton.addEventListener("click", function() {
    const todoText = todoInput.value.trim(); // Get the input value

    if (todoText !== "") {
        createTodoItem(todoText); // Add the to-do item
        todoInput.value = ""; // Clear the input field
    }
});

// Allow pressing Enter to add tasks
todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addButton.click(); // Simulate clicking the add button
    }
});
