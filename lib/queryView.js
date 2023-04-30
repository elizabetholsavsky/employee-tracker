const db = require('../config/connection.js');

// SQL queries for view db info
function viewDepartments() {
    db.query(`
    SELECT department.id AS department_id, department.name AS department_name FROM department;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function viewRoles() {
    db.query(`
    SELECT role.title AS job_title, role.id AS role_id, department.name AS department, role.salary FROM role 
    INNER JOIN department ON role.department_id = department.id;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function viewEmployees() {
    db.query(`
    SELECT employee.id AS employee_id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, SPACE(1), manager.last_name) AS manager_name FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

module.exports = { viewDepartments, viewRoles, viewEmployees };