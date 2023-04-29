const mysql = require('mysql2');
require('dotenv').config();
const inquirer = require('inquirer');
const displayTitleText = require('./lib/titleText.js');
const tasksPrompt = require('./lib/tasksPrompt.js');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, addEmployeeRole, exit } = require('./lib/tasks.js')

// connect to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: process.env.PASSWORD,
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database ✔`)
); 

// handle errors or start application
db.connect(function (err) {
    // if (err) throw err;
    init();
});

// start application, show title and task prompt
function init() {
    displayTitleText();
    inquirer
    .prompt(tasksPrompt)
    .then((response => {
        task(response);
    }))
    .catch(err => {
        console.log(err)    
    })
};

// use input to run selected task function
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
            break;
    }
};