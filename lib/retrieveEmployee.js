const db = require('../config/connection.js');

// called in prompts.js to present user with current EMPLOYEE options

async function retrieveEmployee(response) {
    let employeeList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM employee
    `).then( (data) => {
        employeeList = data[0].map(data => {
            return {
                name: data.first_name + ` ` + data.last_name,
                value: data.id
            }
        })
        employeeList.push({name: 'NONE', value: 0});
        return employeeList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveEmployee;
