const mysql = require('mysql2');
require('dotenv').config();
const inquirer = require('inquirer');
const { displayTitleText, displayExitText } = require('./lib/specialText.js');
const tasksPrompt = require('./lib/tasksPrompt.js');

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
    if (err) throw err;
    init();
});

// ask prompt, send response to task functions, catch errors
function selectPrompt() {
    inquirer
    .prompt(tasksPrompt)
    .then((response => {
        task(response);
    }))
    .catch(err => {
        console.log(err)    
    })
};

// SQL queries
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        selectPrompt();
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
            process.exit(0);
    }
};

// start application, show title and task prompt
function init() {
    displayTitleText();
    selectPrompt();
};
