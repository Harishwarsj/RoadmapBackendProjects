const readline = require('readline');
const taskManager = require('./taskmanager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'TODO> '
});
console.log("Welcome to the To-Do CLI App!");
console.log("Commands:");
console.log("  add [task description]");
console.log("  list");
console.log("  done [task number]");
console.log("  delete [task number]");
console.log("  exit");

rl.prompt();

rl.on(`line`, (line) => {
    const input = line.trim();
    console.log(input);
    if (input.startsWith('add ')) { 
        const taskDesc = input.slice(4);
        taskManager.addTasks(taskDesc);
        console.log("Task Added");
    } else if (input === 'list') {
        taskManager.listTasks();
    } else if (input.startsWith('done ')) {
        const index = parseInt(input.slice(5))
        taskManager.completeTasks(index);
        console.log("Task marked as done.");
    } else if (input.startsWith('delete ')) {
        const index = parseInt(input.slice(8));
        taskManager.deleteTasks(index);
        console.log("Task has been deleted");
    } else if (input === 'exit') {
        rl.close();
    } else {
        console.log("Unknown Command");
    }
    rl.prompt();
});

rl.on('close' , () => {
    console.log("Goodbye!, Harishwar");
    process.exit(0);
});