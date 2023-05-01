const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const handleTask = require('./handleTask.js');

// reusable function to present prompt list after completing each task
// (ask prompt, send response to switch case task handler, go to specific query function or catch errors)

function selectTask() {
    inquirer
    .prompt(prompts)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = selectTask;