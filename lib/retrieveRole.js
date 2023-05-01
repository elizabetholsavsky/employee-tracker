const db = require('../config/connection.js');

// called in prompts.js to present user with current ROLE options

async function retrieveRole(response) {
    let roleList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM role
    `).then( (data) => {
        roleList = data[0].map(data => {
            return {
                name: data.title,
                value: data.id
            }
        })
        return roleList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveRole;
