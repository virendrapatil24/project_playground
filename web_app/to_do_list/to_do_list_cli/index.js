const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const path = require('path');


program
.name('to-do-list-cli-application')
.description('CLI to create to-do-list');

// a separate command to create diff to-do-list
// program.command('create')
// .description('creates a new to-do-list')
// .action(() => {

//     const jsonData = {
//         currentID: 0,
//         todos: []
//     };

//     fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`to-do-list created!`)
//         }
//     });
// });

program.command('add')
.description('adds to do list item')
.argument('<toDoDescription>', 'to-do-list description')
.action((toDoDescription) => {

    if (!fs.existsSync('to-do-list.json')) {
        const jsonData = {
            currentID: 0,
            todos: []
        };
    
        fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`to-do-list created!`)
            }
        });
    }

    fs.readFile('to-do-list.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let jsonData = JSON.parse(data);
            jsonData.todos.push({
                id: jsonData.currentID,
                description: toDoDescription,
                done: false,
            });
            jsonData.currentID++;
            console.log(jsonData.todos);
            fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`to-do-list updated!`)
                }
            });
        }
    });

});

program.command('print')
.description('prints to-do-list')
.action(() => {
    if (!fs.existsSync('to-do-list.json')) {
        const jsonData = {
            currentID: 0,
            todos: []
        };
    
        fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`to-do-list didn't exited!!! created a new one!!!`)
            }
        });
    }
    
    
    fs.readFile('to-do-list.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let jsonData = JSON.parse(data);
            console.log(jsonData.todos);
        }
    });
});

program.command('done')
.description('marks the to-list-description done for the given index')
.argument('<toDoIndex>', 'to-do-list description index')
.action((toDoIndex) => {
    if (!fs.existsSync('to-do-list.json')) {
        console.log(`to-do-list didn't exited!!! create a new one!!!`);
        return;
    }
    
    fs.readFile('to-do-list.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let jsonData = JSON.parse(data);
            if (jsonData.todos.length - 1 < toDoIndex) {
                console.log('index out of range!!!')
            } else {
                let ifIndex = false;
                jsonData.todos.forEach(todo => {
                    if (todo.id == toDoIndex) {
                        todo.done = true;
                        ifIndex = true;
                        console.log(jsonData.todos);
                        fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`to-do-list updated!`)
                            }
                        });
                        return;
                    }
                });
                if (!ifIndex) {
                    console.log(`index dosen't exist!`)
                }
            }
            console.log(jsonData.todos);
        }
    });
});

program.command('delete')
.description('marks the to-list-description done for the given index')
.argument('<toDoIndex>', 'to-do-list description index')
.action((toDoIndex) => {
    if (!fs.existsSync('to-do-list.json')) {
        console.log(`to-do-list didn't exited!!! create a new one!!!`);
        return;
    }
    
    fs.readFile('to-do-list.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let jsonData = JSON.parse(data);
            if (jsonData.todos.length - 1 < toDoIndex) {
                console.log('index out of range!!!')
            } else {
                let ifIndex = false;
                let i = 0;
                let delIndex = -1
                jsonData.todos.forEach(todo => {
                    if (todo.id == toDoIndex) {
                        delIndex = i;
                        ifIndex = true;
                    }
                    i++;
                });
                if (!ifIndex) {
                    console.log(`index dosen't exist!`)
                } else {
                    jsonData.todos.splice(delIndex, 1)
                    console.log(jsonData.todos);
                    fs.writeFile('to-do-list.json', JSON.stringify(jsonData, null, 2), (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`to-do-list updated!`)
                        }
                    });
                    return;
                }
            }
            console.log(jsonData.todos);
        }
    });
});



program.parse(process.argv);
