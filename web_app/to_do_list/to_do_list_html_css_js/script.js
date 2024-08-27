let todos = []

function addToDo() {
    const inputItem = document.getElementById("input-to-do");
    if (!inputItem.value) {
        alert("Please specify to-do description");
        return;
    }

    todos.push({
        done: false,
        description: inputItem.value
    });

    inputItem.value = "";
    render();
}

function deleteToDo(idx) {
    todos.splice(idx, 1);
    render();
}

function toggleToDoStatus(idx) {
    todos[idx]["done"] = !todos[idx]["done"];
    render();
}

function render() {
    document.getElementById("to-do-list").innerHTML = "";
    let currentIndex = 0

    todos.forEach((todo) => {
        let newItem = document.createElement("li");
        newItem.setAttribute("id", "to-do-" + currentIndex);
        if (todo.done) newItem.setAttribute("class", "checked");
        
        let itemDescription =document.createElement("span");
        itemDescription.setAttribute("class", "item");
        itemDescription.setAttribute("onclick", "toggleToDoStatus(" + currentIndex + ")")
        itemDescription.innerHTML = todo.description;

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("onclick", "deleteToDo(" + currentIndex + ")")
        deleteButton.innerHTML = "Delete"

        let divButtons = document.createElement("div");
        divButtons.appendChild(deleteButton);

        newItem.appendChild(itemDescription);
        newItem.appendChild(divButtons);

        let toDoList = document.getElementById("to-do-list");
        toDoList.appendChild(newItem);

        currentIndex++;
    });
}

render()