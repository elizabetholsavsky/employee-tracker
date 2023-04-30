const inquirer = require('inquirer');
const taskPrompt = require('./taskPrompt.js');
const handleTask = require('./handleTask.js');

// ask prompt, send response to task switch case => function, catch errors
function selectTask() {
    inquirer
    .prompt(taskPrompt)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = selectTask;