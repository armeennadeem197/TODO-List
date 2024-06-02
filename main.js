import inquirer from "inquirer";
let Todos = [];
let addTask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: ":What would you like to add in you Todos ?"
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Would you like addMore in your Todos ?",
        default: "true",
    }
]);
Todos.push(addTask);
console.log(addTask);
