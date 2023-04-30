const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, addEmployeeRole, exit } = require('./queries.js');

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

module.exports = task;