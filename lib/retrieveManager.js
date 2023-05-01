const db = require('../config/connection.js');

async function retrieveManager(response) {
    let managerList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM employee
    `).then( (data) => {
        managerList = data[0].map(data => {
            return {
                name: data.first_name + ` ` + data.last_name,
                value: data.id
            }
        })
        managerList.push('NONE');
        return managerList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveManager;
