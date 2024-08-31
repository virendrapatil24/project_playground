const express = require("express");

const app = express();

let todos = []
let currentIndex = 0

function checkToDoIsEmpty (req, res, next) {
    if (todos.length < 1) {
        res.send("No to do item present!!!")
    } else {
        next();
    }
}


app.use(express.json());

//An api to add the todo
app.post("/add", function(req, res) {
    todos.push({
        id: currentIndex,
        description: req.body.description,
        done: false
    })
    res.send("Succesfully added a todo!!!");
    currentIndex++;
})

app.use(checkToDoIsEmpty);

// An api to delete the todo
app.post("/delete", function(req, res) {
    const delID = req.query.id;
    let i = 0;
    let delIndex = -1;
    todos.forEach(todo => {
        if (todo.id == delID) {
            delIndex = i;
        } 
        i++;
    })
    if (delIndex === -1) {
        res.send("todo with given id not found!")
    } else {
        todos.splice(delIndex, 1);
        res.send("todo deleted succesfuuly")
    }
})

// An api to mark done
app.put("/done", function(req, res) {
    const doneID = req.query.id;
    let i = 0;
    let doneIndex = -1;
    todos.forEach(todo => {
        if (todo.id == doneID) {
            doneIndex = i;
        } 
        i++;
    })
    if (doneIndex === -1) {
        res.send("todo with given id not found!")
    } else {
        todos[doneIndex]["done"] = !todos[doneIndex]["done"];
        res.send("todo marked done succesfully")
    }
})

// An api to list the todo
app.get("/", function(req, res) {
    res.send(todos);
}) 

app.listen(3000);