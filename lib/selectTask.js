const inquirer = require('inquirer');
const taskList = require('./taskList.js');
const handleTask = require('./handleTask.js');

// ask prompt, send response to task functions, catch errors
function selectTask() {
    inquirer
    .prompt(taskList)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = selectTask;