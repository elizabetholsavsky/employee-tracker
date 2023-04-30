const { displayTitleText, displayExitText } = require('./specialText.js');
const { viewDepartments, viewRoles, viewEmployees } = require('./queryView.js');
const { addDepartment, addRole, addEmployee, addEmployeeRole } = require('./queryAdd.js');

function handleTask(response) {
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
            displayExitText();
            process.exit(0);
    }
};

module.exports = handleTask;