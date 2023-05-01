const db = require('../config/connection.js');

function updateEmployeeRole(response) {
    db.query(`
    UPDATE employee SET role_id = ${response.updateRole} WHERE employee.id = ${response.updateEmployee}
    `, (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `Employee role updated!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

module.exports = updateEmployeeRole;