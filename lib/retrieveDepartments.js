const db = require('../config/connection.js');

async function retrieveDepartments(response) {
    let departmentList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM DEPARTMENT
    `).then( (data) => {
        departmentList = data[0].map(data => {
            return {
                name: data.name,
                value: data.id
            }
        })
        return departmentList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveDepartments;
