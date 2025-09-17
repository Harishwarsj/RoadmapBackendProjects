const fs = require('fs');
const path = './tasks.json';
function loadTask() {
    if (!fs.existsSync(path))
        return [];
    try {
        let data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log('eror in converting')
        return;
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}


function addTasks(description) {
    const tasks = loadTask();
    console.log(tasks)
    tasks.push({ description, completed: false });
    saveTasks(tasks);
};

function listTasks() {
    const tasks = loadTask();
    // console.log(tasks);
    if (tasks.length === 0) {
        console.log("No data Found");
        return;
    }
    console.log(tasks.length);
    tasks.forEach((task, index) => {
        const status = task.completed ? "Yes" : "No";
        console.log(`${index + 1}. ${status} ${task.description}`);
    });
}

function completeTasks(index) {
    const tasks = loadTask();
    if (index < 1 || index > tasks.length) {
        console.log("Invalid Task Number");
        return;
    }
    tasks[index - 1].completed = true;
    saveTasks(tasks);
}

function deleteTasks(index) {
    const tasks = loadTask();
    if (index < 1 || index > tasks.length) {
        console.log("Invalid Task Number");
        return;
    }
    tasks.splice(index - 1, 1);
    saveTasks(tasks);
};


module.exports = {
    addTasks,
    listTasks,
    completeTasks,
    deleteTasks

};



