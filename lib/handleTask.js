const { viewDepartments, viewRoles, viewEmployees } = require('./queryView.js');
const { addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queryAdd.js');
const { displayExitText } = require('./specialText.js');

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
            addDepartment(response);
            break;
        case "Add a role":
            addRole();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "Update an employee role":
            updateEmployeeRole();
            break;
        case "EXIT":
            displayExitText();
            process.exit(0);
    }
};

module.exports = handleTask;