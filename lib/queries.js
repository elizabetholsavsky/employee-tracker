const db = require('../config/connection.js');
const { displayTitleText, displayExitText } = require('./specialText.js');
const inquirer = require('inquirer');
const taskList = require('./taskList.js');

// ask prompt, send response to task functions, catch errors
function selectTask() {
    inquirer
    .prompt(taskList)
    .then((response => {
        task(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

function task(response) {
    switch (response.task) {
        case "View all departments":
            viewDepartments();
            break;
        case "View all roles":
            viewRoles();
            break;
        case "View all employees":
            viewEmployees();
            break;
        case "Add a department":
            addDepartment();
            break;
        case "Add a role":
            addRole();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "Update an employee role":
            addEmployeeRole();
            break;
        case "Exit":
            exit();
            process.exit(0);
    }
};

// SQL queries
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        selectTask();
    });
};

function viewRoles() {
    console.log('ALSO HERE!')
};

function viewEmployees() {
    console.log('ALSO HERE!')
};

function addDepartment() {
    console.log('ALSO HERE!')
};

function addRole() {
    console.log('ALSO HERE!')
};

function addEmployee() {
    console.log('ALSO HERE!')
};

function addEmployeeRole() {
    console.log('ALSO HERE!')
};

function exit() {
    displayExitText();
};

module.exports = selectTask;